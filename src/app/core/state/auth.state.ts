import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { catchError, finalize, of, tap, throwError } from 'rxjs';
import { AuthUtils } from '../auth/auth.utils';
import { AuthResponse, AuthStateModel } from '../models/auth.model';
import { AuthService } from '../services/auth.service';
import { AuthLogin, AuthRegister, Logout, SessionUser } from './auth.action';

const defaults: AuthStateModel = {
  error: null,
  loading: false,
  redirect: false,
  userCreated: null
}

@State<AuthStateModel>({
  name: 'auth',
  defaults
})

@Injectable()
export class AuthState {

  public utils = new AuthUtils();

  constructor(
    private service: AuthService) { }

  @Selector()
  static error(state: AuthStateModel) {
    return state.error;
  }

  @Selector()
  static loading(state: AuthStateModel) {
    return state.loading;
  }

  @Selector()
  static redirect(state: AuthStateModel) {
    return state.redirect;
  }

  @Selector()
  static userCreated(state: AuthStateModel) {
    return state.userCreated;
  }

  @Action(AuthLogin)
  login(ctx: StateContext<AuthStateModel>, action: AuthLogin) {
    ctx.patchState({ loading: true })
    this.service.login(action.auth)
      .pipe(
        tap((response: AuthResponse) => {
          ctx.patchState({ redirect: true, loading: false });
          ctx.dispatch(new SessionUser(response.user));
        }),
        catchError((e: any) => {
          const error = this.utils.handleError(e);
          ctx.patchState({ redirect: false, error: error })
          return throwError(e);
        }),
        finalize(() => ctx.patchState({ loading: false }))
      ).subscribe()
  }

  @Action(AuthRegister)
  register(ctx: StateContext<AuthStateModel>, action: AuthRegister) {
    ctx.patchState({ loading: true })
    this.service.register(action.auth)
      .pipe(
        tap((response: any) => {
          ctx.patchState({ loading: false, userCreated: response });
        }),
        catchError((e: any) => {
          const error = this.utils.handleError(e);
          return of(ctx.patchState({ error: error }));
        }),
        finalize(() => ctx.patchState({ loading: false }))
      ).subscribe()
  }

  @Action(Logout)
  logout(ctx: StateContext<AuthStateModel>) {
    ctx.setState(defaults);
  }
}
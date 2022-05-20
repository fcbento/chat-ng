import { Injectable } from '@angular/core';
import { Action, Selector, StateContext } from '@ngxs/store';
import { catchError, finalize, map, of } from 'rxjs';
import { AuthUtils } from '../auth/auth.utils';
import { AuthResponse, AuthStateModel } from '../models/auth.model';
import { AuthService } from '../services/auth.service';
import { AuthLogin } from './auth.action';

@Injectable()
export class AuthState {
  
  utils = new AuthUtils();

  constructor(private service: AuthService) { }

  @Selector()
  static error(state: AuthStateModel) {
    return state.error;
  }

  @Selector()
  static loading(state: AuthStateModel) {
    return state.loading;
  }

  @Selector()
  static currentUser(state: AuthStateModel) {
    return state.user;
  }

  @Selector()
  static redirect(state: AuthStateModel) {
    return state.redirect;
  }

  @Action(AuthLogin)
  login(ctx: StateContext<AuthStateModel>, action: AuthLogin) {
    ctx.patchState({ error: null })
    ctx.patchState({ loading: true })
    ctx.patchState({ redirect: false })
    this.service.login(action.auth)
      .pipe(
        map((response: AuthResponse) => {
          ctx.patchState({ user: response.user })
          ctx.patchState({ redirect: true })
        }),
        catchError((e: any) => {
          const error = this.utils.handleError(e);
          ctx.patchState({ redirect: false })
          return of(ctx.patchState({ error: error }));
        }),
        finalize(() => ctx.patchState({ loading: false }))
      ).subscribe()
  }
}
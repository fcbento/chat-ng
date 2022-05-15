import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { catchError, finalize, map, Observable, of } from 'rxjs';
import { AuthResponse, AuthStateModel } from '../models/auth.model';
import { AuthService } from '../services/auth.service';
import { AuthLogin } from './auth.action';

@Injectable()
export class AuthState {

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

  @Action(AuthLogin)
  login(ctx: StateContext<AuthStateModel>, action: AuthLogin) {
    ctx.patchState({ error: null })
    ctx.patchState({ loading: true })
    this.service.login(action.auth)
      .pipe(
        map((response: AuthResponse) => {
          ctx.patchState({ user: response.user })
        }),
        catchError((e: any) => {
          return of(ctx.patchState({ error: e.error.message }));
        }),
        finalize(() => ctx.patchState({ loading: false }))
      ).subscribe()
  }
}
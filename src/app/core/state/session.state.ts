import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { AuthResponse, AuthUser } from "../models/auth.model";
import { SessionUser } from "./auth.action";

@State<AuthUser>({
    name: 'user'
})

@Injectable()
export class SessionState {

    @Selector()
    static user(state: AuthResponse) {
        return state.user;
    }

    @Action(SessionUser)
    session(ctx: StateContext<AuthResponse>, action: AuthResponse) {
        ctx.patchState({user: action.user})
    }
}

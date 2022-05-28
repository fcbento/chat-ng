import { LoginRequest, AuthUser, RegisterRequest } from '../models/auth.model';
import { AuthEnum } from './auth.enum';

export class AuthLogin {
    static readonly type = AuthEnum.Login;
    constructor(public auth: LoginRequest) { }
}

export class AuthRegister {
    static readonly type = AuthEnum.Register;
    constructor(public auth: RegisterRequest) { }
}

export class SessionUser {
    static readonly type = AuthEnum.Session;
    constructor(public user: AuthUser) { }
}
import { AuthRequest, AuthUser } from '../models/auth.model';
import { AuthEnum } from './auth.enum';

export class AuthLogin {
    static readonly type = AuthEnum.Login;
    constructor(public auth: AuthRequest) { }
}

export class SessionUser {
    static readonly type = AuthEnum.Session;
    constructor(public user: AuthUser) { }
}
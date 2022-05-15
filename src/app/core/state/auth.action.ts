import { AuthRequest } from '../models/auth.model';
import { AuthEnum } from './auth.enum';

export class AuthLogin {
    static readonly type = AuthEnum.Login;
    constructor(public auth: AuthRequest) { }
}
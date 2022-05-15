export interface AuthRequest {
    email: string;
    password: string;
}

export interface AuthStateModel {
    error: any;
    loading: boolean;
    user: AuthUser;
}

export interface AuthResponse {
    token: string;
    user: AuthUser;
}

export interface AuthUser {
    avatar: string;
    createdAt: string;
    email: string;
    name: string;
}
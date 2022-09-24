export interface LoginRequest {
    email: string;
    password: string;
}

export interface RegisterRequest {
    name: string;
    lastName: string;
    email: string;
    password: string;
}

export interface AuthStateModel {
    error: any;
    loading: boolean;
    redirect: boolean;
    userCreated: AuthUser | null;
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
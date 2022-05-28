import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginRequest, AuthResponse, RegisterRequest } from '../models/auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API = environment.API_URL;

  constructor(private http: HttpClient) { }

  login(auth: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.API}/user/login`, auth)
      .pipe(
        map((response: AuthResponse) => response)
      );
  }

  register(auth: RegisterRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.API}/user`, auth)
      .pipe(
        map((response: AuthResponse) => response)
      );
  }
}

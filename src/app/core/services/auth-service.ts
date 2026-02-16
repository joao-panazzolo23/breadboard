import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, of, tap} from 'rxjs';
import {environment} from '../../../enviroments/environment';
import {LoginResponse} from '../interfaces/login-response.interface';

@Injectable({providedIn: 'root'})
export class AuthService {
  private readonly TOKEN_KEY = 'token';
  private readonly url = environment.url;

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string): Observable<LoginResponse> {
    //todo: find a better way to mock this
    if (!environment.production) {
      return of({token: 'mock-token'} as LoginResponse).pipe(
        tap(response => this.setToken(response.token))
      );
    }

    return this.http.post<LoginResponse>(`${this.url}/login`, {
      email,
      password
    }).pipe(
      tap(response => this.setToken(response.token))
    );
  }

  setToken(token: string) {
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  getToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  isLogged(): boolean {
    return !!this.getToken();
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

}

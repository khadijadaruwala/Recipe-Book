import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor(private http: HttpClient) { }

  signUp(email: string, password: string) {
    const params = {
      email,
      password,
      returnSecureToken: true
    };
    return this.http.post<AuthResponseData>
      ('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBwSs31P6_GzQUBNffzu3RFQmFR9vPkM0o',
        params);
  }
}

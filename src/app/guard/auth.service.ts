import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) {}

  // register a new user
  register(user: any): Observable<any> {
    return this.http.post(this.baseUrl + '/signup', user);
  }

  // login an existing user
  login(credentials: any): Observable<any> {
    return this.http.post(this.baseUrl + '/signin', credentials);
  }

  // check if the user is authenticated
  isAuthenticated(): boolean {
    // you can implement your own logic here
    // for example, check if there is a valid JWT token in the cookie
    return true;
  }
}
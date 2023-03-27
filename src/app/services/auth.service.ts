import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const AUTH_API = 'http://localhost:8082/api/auth/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(username: string, password: string): Observable<any> {

    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }

  register(username: string, email: string, password: string, role:string): Observable<any> {

    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password,
      role
    }, httpOptions);
  }
}

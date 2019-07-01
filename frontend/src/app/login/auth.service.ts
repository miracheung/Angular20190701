import { Injectable } from '@angular/core';
import { User } from './user.models'
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router"

@Injectable()
export class AuthService {
  title = 'app';
  user = new Subject<User>();
  creds = {
    username: '',
    password: ''
  }

  constructor(private http: HttpClient,private router: Router) { }

  handleAuth(creds) {
    this.http.post('http://127.0.0.1:8000/login/', creds)
      .subscribe(
        result => {
          if (result) {
            console.log('I logged in', result)
          const user = new User(result['token'])
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('token', JSON.stringify(user));
            console.log(user)
            this.router.navigate(['list']);
            // this.user.next(user);
        }

        })

  }


  handleReg(creds) {
    this.http.post('http://127.0.0.1:8000/registration/', creds)
      .subscribe(
        result => {
          if (result) {
            console.log('your registration was succesful', result)
            this.router.navigate(['login']);
            // this.user.next(user);
        }

        })

  }


  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('token');
    // this.user.next(null);
}

isAuthenticated(): boolean {
  return localStorage.getItem('token') != null;
}
isTokenExpired(): boolean {
  return false;
}
}
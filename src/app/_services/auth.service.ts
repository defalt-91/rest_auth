import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { shareReplay, tap } from 'rxjs/operators';
import { LoginUser } from '../_models/user';
import { Router } from '@angular/router';
import { ACCESS } from '../_models/access';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, throwError } from 'rxjs';
import { LoginForm } from '../_models/login-form';
import { userLogout } from '../store/UserFeatureStore/actions/user-feature-store.actions';
import { Store } from '@ngrx/store';
import {
  select_access_token,
  select_access_token_expiration,
} from '../store/UserFeatureStore/selectors/user-feature-store.selectors';
import { USER } from '../_models/users';

@Injectable({ providedIn: 'root' })
export class AuthService {
  currentUser = {};
  endpoint = 'http://localhost:8000/auth';
  Access: string | undefined;
  AccessExpiration: string | undefined;

  constructor(
    private store: Store,
    private http: HttpClient,
    public router: Router,
    private snack: MatSnackBar
  ) {
    this.store.select(select_access_token).subscribe((x) => (this.Access = x));
    this.store
      .select(select_access_token_expiration)
      .subscribe((x) => (this.AccessExpiration = x));
  }

  getAccessChecked() {
    return this.http.post(`${this.endpoint}/token/verify/`, {});
  }

  getNewAccess(): Observable<ACCESS> {
    try {
      return this.http.post<ACCESS>(`${this.endpoint}/token/refresh/`, {});
    } catch (e) {
      return throwError(e);
    }
  }

  login(user: LoginForm): Observable<LoginUser> {
    // localStorage.clear()
    return this.http.post<LoginUser>(`${this.endpoint}/login/`, user).pipe(
      tap((res) => {
        this.snack.open('You are Loged In ', 'close', { duration: 3001 });
        // this.setSessionFromLogin(res)
      }),
      shareReplay()
    );
  }

  getUser(): Observable<USER> {
    return this.http.get<USER>(`${this.endpoint}/user/`);
  }

  logout() {
    this.store.dispatch(userLogout());
  }

  public isLoggedIn(): boolean {
    if (this.AccessExpiration && this.Access) {
      return new Date(this.AccessExpiration) > new Date()
        ? true
        : this.getNewAccess() && this.isLoggedIn();
    } else {
      try {
        // this.getNewAccess();
        // return this.isLoggedIn();
        return false
      } catch (e) {
        throwError(e);
        return false;
      }
    }
  }

  isLoggedOut() {
    return !this.isLoggedIn();
  }
}

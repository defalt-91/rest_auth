import { Injectable } from "@angular/core";
import {
  HttpErrorResponse,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from "@angular/common/http";
import { catchError, finalize, shareReplay } from "rxjs/operators";
import { throwError } from "rxjs";
import { AuthService } from "../_services/auth.service";
import { ProgressService } from "../_services/progressbar.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Store } from "@ngrx/store";
import { UserState } from "../store/UserFeatureStore/reducers/user-feature-store.reducer";
import { select_access_token } from "../store/UserFeatureStore/selectors/user-feature-store.selectors";
import { clearStore } from "../store/UserFeatureStore/actions/user-feature-store.actions";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  idToken: string | undefined;

  constructor(
    private auth: AuthSeasdrvice,
    private store: Store<UserState>,
    private ps: ProgressService,
    private snack: MatSnackBar
  ) {
    this.store.select(select_access_token).subscribe((x) => (this.idToken = x));
  }
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    console.log(this.idToken);
    this.ps.isLoading.next(true);
    req = req.clone({ withCredentials: true });
    if (
      this.idToken
      // && this.auth.isLoggedIn()
    ) {
      const cloned = req.clone({
        headers: req.headers.set("Authorization", `Bearer ${this.idToken}`),
      });
      return next.handle(cloned).pipe(
        catchError(this.errorHandler),
        finalize(() => setTimeout(() => this.ps.isLoading.next(false), 2000)),
        shareReplay()
      );
    } else {
      return next.handle(req).pipe(
        catchError(this.errorHandler),
        finalize(() => setTimeout(() => this.ps.isLoading.next(false), 2000))
      );
    }
  }

  errorHandler(error: HttpErrorResponse) {
    if (error.status === 0) {
      throwError({
        reason: error && error.error && error.error ? error.error : "",
        status: error.status,
      });
    }
    if (
      error.error.detail === "Authentication credentials were not provided."
    ) {
      throwError(error.error.detail);
    }
    if (error.error.detail === "Given token not valid for any token type") {
      this.store.dispatch(clearStore());
    }
    if (error.status == 400) {
      let a = Object.keys(error.error)[0];
      return throwError({
        reason:
          error.error.reason !== undefined
            ? error.error.reason
            : error.error[a][0],
        status: error.status,
      });
    }

    let data = {
      reason: error && error.error && error.error.detail ? error.error : "",
      status: error.status,
    };
    return throwError(data);
  }
}

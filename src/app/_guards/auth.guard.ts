import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree,} from '@angular/router';
import {select, Store} from "@ngrx/store";
import {isLoggedIn} from "../store/UserFeatureStore/selectors/user-feature-store.selectors";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {AppState} from "../store";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(private store: Store<AppState>,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.pipe(
      select(isLoggedIn),
      tap(loggedIn => {
        if (!loggedIn) {
          this.router.navigate(['/login'], {
            queryParams: {returnUrl: state.url},
          })
        }
      })
    )
  }
}


//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
//   if (this.authService.isLoggedIn()) {
//     return true;
//   }
//   // not logged in so redirect to login page with the return url
//   return this.router.navigate(['/login'], {
//     queryParams: { returnUrl: state.url },
//   });
// }

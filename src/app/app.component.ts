import {Component} from "@angular/core";
import {slideInAnimation} from "./animations";
import {Router, RouterOutlet} from "@angular/router";
import {AuthService} from "./_services/auth.service";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {UserState} from "./store/UserFeatureStore/reducers/user-feature-store.reducer";
import {select_access_token_expiration} from "./store/UserFeatureStore/selectors/user-feature-store.selectors";
import {clearStore} from "./store/UserFeatureStore/actions/user-feature-store.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  animations: [slideInAnimation],
})
export class AppComponent {
  title = 'Frontend';
  user$: Observable<any>;


  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<UserState>,
  ) {
    this.user$ = this.store.select(select_access_token_expiration);

    // this.router.events.subscribe(
    //   event =>  {
    //     if (event instanceof NavigationStart)
    //     {this.loading=true }
    //     else if(event instanceof NavigationEnd){
    //       setTimeout(()=>this.loading=false,2000)
    //   }
    // )
  }

  getAnimationData(outlet: RouterOutlet) {
    return (
      outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
    );
  }

  logout() {
    this.authService.logout();
  }

  islogin() {
    console.log(this.authService.isLoggedIn());
  }

  retttt() {
    this.store.dispatch(clearStore());
  }

  ngOnInit(): void {
    // this.store.dispatch(userAccessVerify());
    // this.store.dispatch(getUser())
  }
}

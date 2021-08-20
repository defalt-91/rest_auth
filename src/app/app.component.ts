import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Component,ElementRef }                       from "@angular/core";
import { Router, RouterOutlet }           from "@angular/router";
import { Store }                          from "@ngrx/store";
import { Observable }                     from "rxjs";
import { map, shareReplay }               from "rxjs/operators";
import { AppState }                       from "src/app/store";
import { selectLoading }                  from "src/app/store/ui/ui.reducer";
import { AuthService }                    from "./_services/auth.service";
import { slideInAnimation }               from "./animations";
import { clearStore }                     from "./store/UserFeatureStore/actions/user-feature-store.actions";
import { select_access_token_expiration } from "./store/UserFeatureStore/selectors/user-feature-store.selectors";


@Component({
	           selector   : "app-root",
	           templateUrl: "./app.component.html",
	           styleUrls  : ["./app.component.scss"],
	           animations : [slideInAnimation],
           })
export class AppComponent{
	title                           = 'Frontend';
	user$: Observable<any>;
	spin                            = false;
	loading$                        = this.store.select(selectLoading);
	panelOpenState                  = false;
	a: Element                      = this.ElementRef.nativeElement.parentElement.parentElement;
	isHandset$: Observable<boolean> = this.breakpointObserver
	                                      .observe(Breakpoints.Large)
	                                      .pipe(
		                                      map((result) => result.matches),
		                                      shareReplay()
	                                      );
	
	constructor(
		private router: Router,
		private authService: AuthService,
		private store: Store<AppState>,
		private ElementRef: ElementRef,
		private breakpointObserver: BreakpointObserver
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
	
	getAnimationData = (outlet: RouterOutlet) => (
		outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation
	);
	
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
	
	DarkTheme() {
		if(this.a.className == 'mat-typography'){
			this.ElementRef.nativeElement.parentElement.parentElement.classList = ['mat-typography dark-theme']
		} else{
			this.ElementRef.nativeElement.parentElement.parentElement.classList = ['mat-typography']
		}
	}
	
	logout2() {
		this.spin = true;
		this.authService.logout();
		setTimeout(() => this.spin = false, 2200)
	}
}

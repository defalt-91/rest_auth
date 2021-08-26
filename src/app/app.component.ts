import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Component }                       from "@angular/core";
import { Title }                           from "@angular/platform-browser";
import { Router, RouterOutlet }            from "@angular/router";
import { Store }                           from "@ngrx/store";
import { Observable }                      from "rxjs";
import { map, shareReplay }                from "rxjs/operators";
import { AppState }                        from "src/app/store";
import { selectDarkTheme, selectLoading }  from "src/app/store/ui/ui.reducer";
import { AuthService }                     from "./_services/auth.service";
import { slideInAnimation }                from "./animations";
import { UI_Theme_Change }                 from "./store/ui/ui.actions";
import { clearStore }                      from "./store/UserFeatureStore/actions/user-feature-store.actions";


@Component(
	{
		selector   : "app-root",
		templateUrl: "./app.component.html",
		styleUrls  : ["./app.component.scss"],
		animations : [slideInAnimation],
		viewProviders:[Title]
	})
export class AppComponent{
	Title                           = 'Frontend';
	spin                            = false;
	loading$                        = this.store.select(selectLoading);
	isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Large)
	                                      .pipe(map((result) => result.matches), shareReplay());
	isDark$: Observable<boolean>    = this.store.select(selectDarkTheme);
	
	constructor(
		private title:Title,
		private router: Router,
		private authService: AuthService,
		private store: Store<AppState>,
		private breakpointObserver: BreakpointObserver
	) {title.setTitle(this.Title)}
	
	getAnimationData = (outlet: RouterOutlet) => (outlet?.activatedRouteData?.animation);
	
	logout() {this.authService.logout()}
	
	retttt() {this.store.dispatch(clearStore());}
	
	ChangeTheme() {this.store.dispatch(UI_Theme_Change())}
	
	logout2() {
		this.spin = true;
		this.authService.logout();
		setTimeout(() => this.spin = false, 2200)
	}
}

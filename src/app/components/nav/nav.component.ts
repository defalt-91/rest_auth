import { Component,ElementRef } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import {Store} from "@ngrx/store";
import {AuthService} from "../../_services/auth.service";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"],
})
export class NavComponent {
  spin=false
  a:Element=this.ElementRef.nativeElement.parentElement.parentElement
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
DarkTheme(){
    if (this.a.className=='mat-typography'){this.ElementRef.nativeElement.parentElement.parentElement.classList=['mat-typography dark-theme']}
    else{this.ElementRef.nativeElement.parentElement.parentElement.classList=['mat-typography']}
}

  logout(){
    this.spin=true;
    this.authService.logout();
    setTimeout(()=>this.spin=false,2200)
  }
  constructor(private authService:AuthService,
              private store:Store,
              private ElementRef:ElementRef,
              private breakpointObserver: BreakpointObserver) {
  }

}

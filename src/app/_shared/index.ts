import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "./auth.interceptor";
// import {USER_PROVIDED_EFFECTS} from "@ngrx/effects";
// import {UserEffects} from "../store/UserFeatureStore/effects/user-feature-store.effects";

export const HttpInterceptorProviders = [
  {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
]

// export const UserEffectsProvider = [
//   {provide: USER_PROVIDED_EFFECTS, useValue: [UserEffects], multi: true}
// ]

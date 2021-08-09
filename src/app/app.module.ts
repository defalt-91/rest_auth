import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {LayoutModule} from "@angular/cdk/layout";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {MatListModule} from "@angular/material/list";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule, HttpClientXsrfModule} from "@angular/common/http";
import {NavComponent} from "./components/nav/nav.component";
import {StoreModule} from '@ngrx/store';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDividerModule} from "@angular/material/divider";
import {environment} from "../environments/environment";
import {EffectsModule} from "@ngrx/effects";
// import {UserFeatureStoreModule} from "./store/UserFeatureStore/user-feature-store.module";
import {HttpInterceptorProviders} from "./_shared";
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MyspinnerComponent} from './components/myspinner/myspinner.component';
import {MatMenuModule} from '@angular/material/menu';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {metaReducers, reducers} from "./store";
import {StoreRouterConnectingModule} from "@ngrx/router-store";
import {ROUTER_STATE_SERIALIZER_PROVIDER} from "./_shared/custom-serializer";
// import {UserEffects} from "./store/UserFeatureStore/effects/user-feature-store.effects";
import {UserFeatureStoreModule} from "./store/UserFeatureStore/user-feature-store.module";

@NgModule({
  declarations: [AppComponent, NavComponent, MyspinnerComponent, SidebarComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientXsrfModule.withOptions({
      cookieName: "x-csrftoken",
      headerName: "X-CSRFToken",
    }),
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatDividerModule,
    MatSnackBarModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    UserFeatureStoreModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    EffectsModule.forRoot(),
    !environment.production ? StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production}) : [],
    StoreRouterConnectingModule.forRoot({stateKey: 'router'}),
  ],
  providers: [
    HttpInterceptorProviders,
    ROUTER_STATE_SERIALIZER_PROVIDER,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}

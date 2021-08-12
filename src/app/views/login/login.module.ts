import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";

// import { LoginRoutingModule } from './login-routing.module';
import {LoginComponent} from "./login.component";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatDividerModule} from "@angular/material/divider";
const routes:Routes=[{path: "", component: LoginComponent}]
@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDividerModule,
    RouterModule.forChild(routes),
  ],
})
export class LoginModule {
}

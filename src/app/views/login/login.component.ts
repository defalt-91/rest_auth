import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from 'src/app/_services/auth.service';
import {LoginForm} from '../../_models/login-form';
import {Store} from '@ngrx/store';
import {userLogin} from '../../store/UserFeatureStore/actions/user-feature-store.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup;
  loading = false;

  constructor(
    private route: ActivatedRoute,
    // private snackBar: MatSnackBar,
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private store: Store
  ) {
    this.form = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(7)]],
    });
  }

  get username() {
    return this.form.get('username')!;
  }

  get password() {
    return this.form.controls.password;
  }

  // ngOnInit(): void {}

  login() {
    const formValue: LoginForm = this.form.value;
    if (formValue.username && formValue.password && this.form.valid) {
      this.store.dispatch(userLogin({formValue}));
      // this.authService.login(val.username, val.password).subscribe(() => {
      //   this.authService.checkUser().subscribe();
      //   const returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
      //   this.router.navigateByUrl(returnUrl);
      // });
    }
  }
}

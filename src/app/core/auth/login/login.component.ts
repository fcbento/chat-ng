import { AfterContentInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthUser } from '../../models/auth.model';
import { AuthLogin } from '../../state/auth.action';
import { AuthState } from '../../state/auth.state';
import { AuthUtils } from '../auth.utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterContentInit, OnInit {

  @Select(AuthState.error) error$!: Observable<any>;
  @Select(AuthState.loading) loading$!: Observable<boolean>;
  @Select(AuthState.redirect) redirect$!: Observable<boolean>;
  @Select(AuthState.userCreated) userCreated$!: Observable<AuthUser>;

  public form: FormGroup;
  private _authUtils;

  constructor(
    private _formBuilder: FormBuilder,
    private _store: Store,
    private _snackBar: MatSnackBar,
    private _router: Router) {

    this._authUtils = new AuthUtils();

    this.form = this._formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this._authUtils.emailRegEx())]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngAfterContentInit(): void {
    this.showError();
    this.redirect()
  }

  ngOnInit(): void {
    this.setUserEmailAfterRegister();
  }

  showError(): void {
    this.error$.subscribe((error: string) => {
      if (error) this._snackBar.open(error, 'Close');
      this
        ._snackBar
        ._openedSnackBarRef?.afterDismissed()
        .subscribe(this._store.reset('AuthLogin'));
    });
  }

  redirect(): void {
    this.redirect$.subscribe((redirect: boolean) => {
      if (redirect) this._router.navigate(['home']);
    });
  }

  setUserEmailAfterRegister() {
    this.userCreated$.subscribe((user: AuthUser) => {
      if (user != null || user != undefined) {
        this.form.setValue({
          email: user.email,
          password: ''
        });
      }
    });
  }

  login() {
    this._store.dispatch(new AuthLogin(this.form.value));
  }

}

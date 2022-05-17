import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthLogin } from '../../state/auth.action';
import { AuthState } from '../../state/auth.state';
import { AuthUtils } from '../auth.utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterViewInit {

  @Select(AuthState.error) error$!: Observable<any>;
  @Select(AuthState.loading) loading$!: Observable<boolean>;
  @Select(AuthState.redirect) redirect$!: Observable<boolean>;

  public form: FormGroup;
  private authUtils;

  constructor(
    private _formBuilder: FormBuilder,
    private _store: Store,
    private _snackBar: MatSnackBar,
    private _router: Router) {

    this.authUtils = new AuthUtils();

    this.form = this._formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.authUtils.emailRegEx())]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngAfterViewInit(): void {
    this.showError();
    this.redirect();
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

  login() {
    this._store.dispatch(new AuthLogin(this.form.value));
  }

}

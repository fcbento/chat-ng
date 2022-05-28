import { AfterContentInit, AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthUser } from '../../models/auth.model';
import { AuthRegister } from '../../state/auth.action';
import { AuthState } from '../../state/auth.state';
import { AuthUtils } from '../auth.utils';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements AfterContentInit {

  @Select(AuthState.error) error$!: Observable<any>;
  @Select(AuthState.loading) loading$!: Observable<boolean>;
  @Select(AuthState.userCreated) userCreated$!: Observable<AuthUser>;

  public form: FormGroup;
  private _authUtils;

  visibilityPassword = 'visibility';
  visibilityRePassword = 'visibility';
  showPassword = true;
  showRePassword = true;

  @Output() submitted: EventEmitter<any> = new EventEmitter();

  constructor(
    private _formBuilder: FormBuilder,
    private _store: Store,
    private _snackBar: MatSnackBar
  ) {
    this._authUtils = new AuthUtils();

    this.form = this._formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rePassword: ['', [Validators.required, Validators.minLength(6)]],
      email: ['', [Validators.required, Validators.pattern(this._authUtils.emailRegEx())]],

    });
  }

  ngAfterContentInit(): void {
    this.showError();
    this.redirect();
  }

  register() {
    this._store.dispatch(new AuthRegister(this.form.value));
  }

  matchPasswords(): boolean {
    return this._authUtils.matchPasswords(this.form?.value?.password, this.form?.value?.rePassword);
  }

  displayPassword(type: string) {
    if (type === 'password')
      this.passwordVisibility();
    else
      this.rePasswordVisibility();
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
    this.userCreated$.subscribe((user: AuthUser) => {
      if (user != null || user != undefined) {
        this._snackBar.open('User created. Log in', 'Close');
        this.submitted.emit(true);
      }
    });
  }

  passwordVisibility() {
    this.showPassword = !this.showPassword;
    this.visibilityPassword = this.showPassword ? 'visibility' : 'visibility_off';
  }

  rePasswordVisibility() {
    this.showRePassword = !this.showRePassword;
    this.visibilityRePassword = this.showRePassword ? 'visibility' : 'visibility_off';
  }

}

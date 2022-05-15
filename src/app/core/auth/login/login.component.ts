import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
export class LoginComponent implements OnInit {

  @Select(AuthState.error) error$!: Observable<any>;
  @Select(AuthState.loading) loading$!: Observable<boolean>;
  
  public form: FormGroup;
  private authUtils;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store) {

    this.authUtils = new AuthUtils();

    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern(this.authUtils.emailRegEx())]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
  }

  login() {
    this.store.dispatch(new AuthLogin(this.form.value));
  }

}

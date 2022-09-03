import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent {

  renderLogin = false;
  renderRegister = false;

  authOption(option: string) {
    option === 'login' ? this.renderLoginSection() : this.renderRegisterSection();
  }

  isSubmitted(value: boolean) {
    if (value) this.renderLoginSection();
  }

  renderLoginSection() {
    this.renderLogin = true;
    this.renderRegister = false;
  }

  renderRegisterSection() {
    this.renderLogin = false;
    this.renderRegister = true;
  }

}

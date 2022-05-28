import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  renderLogin = false;
  renderRegister = false;

  constructor() { }

  ngOnInit(): void {
  }

  authOption(option: string) {
    if (option === 'login') {
      this.renderLogin = true;
      this.renderRegister = false;
    }else{
      this.renderLogin = false;
      this.renderRegister = true;
    }
  }

  isSubmitted(value: boolean) {
    if(value) {
      this.renderLogin = true;
      this.renderRegister = false;
    }
  }
}

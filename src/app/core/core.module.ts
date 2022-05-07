import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { CoreRoutingModule } from './core-routing.module';
import { MaterialModule } from '../shared/material.module';
import { NgFlexGrid } from 'ng-flex-grid';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MaterialModule,
    NgFlexGrid
  ]
})
export class CoreModule { }

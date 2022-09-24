import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth/auth.component';
import { CoreRoutingModule } from './core-routing.module';
import { MaterialModule } from '../shared/material.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from './state/auth.state';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { SessionState } from './state/session.state';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

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
    ReactiveFormsModule,
    [NgxsModule.forFeature([AuthState, SessionState])],
    NgxsStoragePluginModule.forRoot({
      key: ['user', 'room'],
    }),
    HttpClientModule
  ],
  providers: [
    AuthService
  ]
})
export class CoreModule { }

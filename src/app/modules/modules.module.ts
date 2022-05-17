import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../shared/material.module';
import { ModulesRoutingModule } from './modules-routing.module';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from '../core/state/auth.state';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ModulesRoutingModule,
    [NgxsModule.forFeature([AuthState])],
  ]
})
export class ModulesModule { }

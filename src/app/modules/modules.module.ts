import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../shared/material.module';
import { ModulesRoutingModule } from './modules-routing.module';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from '../core/state/auth.state';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { HomeToolbarComponent } from './home/home-toolbar/home-toolbar.component';

@NgModule({
  declarations: [
    HomeComponent,
    RoomsListComponent,
    HomeToolbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ModulesRoutingModule,
    [NgxsModule.forFeature([AuthState])],
  ]
})
export class ModulesModule { }

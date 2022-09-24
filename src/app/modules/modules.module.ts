import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../shared/material.module';
import { ModulesRoutingModule } from './modules-routing.module';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from '../core/state/auth.state';
import { RoomsListComponent } from './rooms-list/rooms-list.component';
import { HomeToolbarComponent } from './home/home-toolbar/home-toolbar.component';
import { ChatComponent } from './home/chat/chat.component';
import { RoomState } from './rooms-list/rooms-list.state';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';

@NgModule({
  declarations: [
    HomeComponent,
    RoomsListComponent,
    HomeToolbarComponent,
    ChatComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ModulesRoutingModule,
    [NgxsModule.forFeature([AuthState, RoomState])]
  ]
})
export class ModulesModule { }

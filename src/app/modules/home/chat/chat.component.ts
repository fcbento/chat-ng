import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { RoomState } from '../../rooms-list/rooms-list.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  @Select(RoomState.room) currentRoom$: Observable<string> | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}

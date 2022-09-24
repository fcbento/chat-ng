import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { SetRoom } from './rooms-list.action';
import { RoomState } from './rooms-list.state';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {

  current: any;
  @Select(RoomState.room) currentRoom$: Observable<string> | undefined;

  rooms = [
    {
      name: 'Games',
      icon: 'games'
    },
    {
      name: 'Programming',
      icon: 'book'
    },
    {
      name: 'TV Shows',
      icon: 'tv'
    },
  ]

  constructor(private store: Store) { }

  ngOnInit(): void {
  }

  selectRoom(room: any) {
    this.store.dispatch(new SetRoom(room.name));
    this.current = room;
  }

}

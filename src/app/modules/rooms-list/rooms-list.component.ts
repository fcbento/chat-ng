import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.scss']
})
export class RoomsListComponent implements OnInit {
  
  current: any;

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

  constructor() { }

  ngOnInit(): void {
  }

  selectRoom(room: any) {
    this.current = room;
  }

}

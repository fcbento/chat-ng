import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Select } from '@ngxs/store';
import { AuthUser } from 'src/app/core/models/auth.model';
import { SessionState } from 'src/app/core/state/session.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home-toolbar',
  templateUrl: './home-toolbar.component.html',
  styleUrls: ['./home-toolbar.component.scss']
})
export class HomeToolbarComponent implements OnInit {
  @Select(SessionState.user) user$!: Observable<AuthUser>;
  
  @Output() drawerToggle = new EventEmitter<void>();
  @Output() logout = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.drawerToggle.emit();
  }

  logoutEmit() {
    this.logout.emit();
  }

}

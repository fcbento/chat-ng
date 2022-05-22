import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { map, Observable } from 'rxjs';
import { AuthUser } from 'src/app/core/models/auth.model';
import { AuthState } from 'src/app/core/state/auth.state';
import { SessionState } from 'src/app/core/state/session.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Select(SessionState.user) user$!: Observable<AuthUser>;

  constructor() { }

  ngOnInit(): void {
    
  }

}

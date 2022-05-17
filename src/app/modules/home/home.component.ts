import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthUser } from 'src/app/core/models/auth.model';
import { AuthState } from 'src/app/core/state/auth.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Select(AuthState.currentUser) user$!: Observable<AuthUser>;

  constructor() { }

  ngOnInit(): void {
    
  }

}

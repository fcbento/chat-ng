import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { map, Observable } from 'rxjs';
import { AuthUser } from 'src/app/core/models/auth.model';
import { Logout } from 'src/app/core/state/auth.action';
import { SessionState } from 'src/app/core/state/session.state';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Select(SessionState.user) user$!: Observable<AuthUser>;

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {

  }

  logout(): void {
    this.store.dispatch(new Logout()).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

}

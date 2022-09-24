import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Logout } from 'src/app/core/state/auth.action';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store, private router: Router) { }

  ngOnInit(): void {}

  logout(): void {
    this.store.dispatch(new Logout()).subscribe(() => {
      this.router.navigate(['/']);
    });
  }

}

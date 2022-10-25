import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { User } from '../service/user.interface';

@Component({
  selector: 'app-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.scss']
})
export class NavbarUserComponent implements OnInit {

  user: User;
  constructor(
    private auth: AuthService
    ) { 
      this.user = this.auth.user;

    }

  ngOnInit(): void {
  }

}

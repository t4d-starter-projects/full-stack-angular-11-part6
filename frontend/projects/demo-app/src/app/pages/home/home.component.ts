import { Component, OnInit } from '@angular/core';

import { UsersService } from '../../services/users.service';
import { CurrentUser } from '../../models/CurrentUser';
import { LoginForm } from '../../models/LoginForm';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public errorMessage = '';

  get currentUser(): CurrentUser | null {
    return this.usersSvc.getCurrentUser();
  }

  constructor(private usersSvc: UsersService) { }

  ngOnInit(): void {
  }

  doLogin(loginForm: LoginForm): void {
    this.usersSvc.loginEmployee(loginForm.username, loginForm.password).subscribe({
      next: () => {
        this.errorMessage = '';
      },
      error: (err) => {
        if (err.status === 404) {
          this.errorMessage = 'Username and password not found.';
        } else {
          this.errorMessage = 'Unknown login error.';
        }
      }
    });
  }

  doClear(): void {
    console.log('clicked clear');
    this.errorMessage = '';
  }

}

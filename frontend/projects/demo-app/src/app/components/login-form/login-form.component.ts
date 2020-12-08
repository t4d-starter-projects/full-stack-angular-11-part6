import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { LoginForm } from '../../models/LoginForm';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm!: FormGroup;

  @Output()
  login = new EventEmitter<LoginForm>();

  @Output()
  clear = new EventEmitter<void>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: 'adodsworth',
      password: 'testpass',
    });
  }

  doLogin(): void {
    this.login.emit(this.loginForm!.value);
  }

  doClear(): void {
    this.loginForm!.reset();
    this.clear.emit();
  }

}

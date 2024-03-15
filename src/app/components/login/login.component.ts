import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginData : FormGroup;
  private loginSubscription! : Subscription;
  constructor(private _router : Router, private _loginForm : FormBuilder) {
    this.loginData = this._loginForm.group({
      username : this._loginForm.control(
        '',
        Validators.compose([Validators.required, Validators.email])
      ),
      password : this._loginForm.control(
        '',
        Validators.compose([Validators.required])
      ),
    });
  }

  login() {
    if (this.loginData.valid) {
    } else {
    }
  }

  navigation(url: string) {
    this._router.navigate([url]);
  }

  ngOnDestroy(): void {
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { InitialState } from '@ngrx/store/src/models';
import { Subscription } from 'rxjs';
import { State } from '../../model/state.model';
import { loginInitialized, loginSuccess, logout } from '../../store/app.action';
import { selectIsLogged } from '../../store/app.selector';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  loginData: FormGroup;
  private loginSubscription!: Subscription;
  constructor(
    private _router: Router,
    private _loginForm: FormBuilder,
    private _store: Store<{ appReducer: State }>
  ) {
    this.loginData = this._loginForm.group({
      username: this._loginForm.control(
        '',
        Validators.compose([Validators.required, Validators.email])
      ),
      password: this._loginForm.control(
        '',
        Validators.compose([Validators.required])
      ),
    });
  }

  login() {
    if (this.loginData.valid) {
      this._store.dispatch(logout());
      this._store
        .select(selectIsLogged)
        .subscribe((result) => console.log(result));
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

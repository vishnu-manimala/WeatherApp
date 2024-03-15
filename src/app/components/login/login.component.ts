import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginData: FormGroup;
  error_message: string = "";
  //imageUrl: string = '../../../assets/tp.png';
  private loginSubscription!: Subscription;
  constructor(private _router: Router, private _loginForm: FormBuilder) {

    this.loginData = this._loginForm.group({
      username: this._loginForm.control("", Validators.compose([Validators.required, Validators.email])),
      password: this._loginForm.control("", Validators.compose([ Validators.required]))
    })
  }

  login() {
    if (this.loginData.valid) {
      // this.loginSubscription = this._authService.passwordLogin(this.loginData.value).subscribe((response: any) => {
      //   if (response.status === "Success") {
      //     this._toaster.success('Logged succesfully')
          
      //     let role: UserRole = response.data.isAdmin ? UserRole.Admin : UserRole.User;
      //      this._jwt.setToken(response.token);
      //      this._jwt.setRole(role);
      //      this._jwt.setLocal(response.data);
      //      this._jwt.setLocalRefresh(response.refreshToken);
          
        
      //     this._router.navigate([role])
      //   } else {
      //     this.error_message = "something went wrong"
      //     this._toaster.error(response.message)
      //     this._router.navigate(['auth/login.password']);
      //   }
      // })
    } else {
    
      this.error_message = "invalid credentials"
    }
  }

  navigation(url: string) {
    this._router.navigate([url]);
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    if (this.loginSubscription) {
      this.loginSubscription.unsubscribe();
    }
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  registerForm: FormGroup;
  isError:boolean=false;
  private registerSubscription!:Subscription;

constructor(private _router : Router, private _form : FormBuilder){
  this.registerForm = this._form.group({
    name:this._form.control("",Validators.required),
    phone:this._form.control("",Validators.compose([ Validators.pattern(/^\d{10}$/),Validators.minLength(10),Validators.maxLength(10),Validators.required])),
    email:this._form.control("",Validators.compose([Validators.required,Validators.email])),
    password:this._form.control("",Validators.compose([ Validators.required])),
    confirm_password:this._form.control("",Validators.required)
  });
}

navigateToLogin(){
  this._router.navigate(['auth/login.password'])
}

passwordMatchValidator(group:FormGroup){
  const password = group.get('password')?.value;
  const confirmPassword = group.get('confirm_password')?.value;
  if(password !== confirmPassword ){
    return true
  }else{
    return false;
  }
}

  registerSubmit() {
    
    if (this.registerForm.valid) {
     
    }
  }

  ngOnDestroy(): void {
    if(this.registerSubscription){
      this.registerSubscription.unsubscribe();
    }
  }
}

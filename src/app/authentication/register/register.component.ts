import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      'fullName': [null],
      'email': [null, Validators.compose([Validators.required, Validators.email])],
      'password': [null, Validators.compose([Validators.minLength(6)])],
      'confirmPassword': [null, Validators.required],
    }, { validator: this.paswordMatching('password','confirmPassword')});
  }

  ngOnInit() {
    console.log(this.registerForm.value);
  }

  paswordMatching(passwordKey: string, confirmPass: string): any {
    return (group: FormGroup) => {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPass];
      if(!password.value || !confirmPassword.value){
        return null;
      }
      if(password.value !== confirmPassword.value){
        return confirmPassword.setErrors({mismatchedPasswords: true});
      }
      return null;
    };
  }

  onSubmit(){
    this.router.navigate(['/dashboard']);
    console.log(this.registerForm.value);
  }
  


}

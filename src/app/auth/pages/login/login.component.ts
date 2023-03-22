import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginFormulario: FormGroup= this.fb.group({
    email:    ['test1@cosa.com', [Validators.required, Validators.email]],
    password: ['1234567', [Validators.required, Validators.minLength(6)]]
  });

  constructor( private fb: FormBuilder,
                private router: Router) {}

  login(){
    console.log(this.loginFormulario.value);
    //console.log(this.loginFormulario.valid);
    
    this.router.navigateByUrl('/dashboard');
  }
}

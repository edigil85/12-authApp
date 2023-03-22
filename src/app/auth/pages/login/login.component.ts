import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import Swal from "sweetalert2";

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  
  loginFormulario: FormGroup= this.fb.group({
    email:    ['test1@cosa.com', [Validators.required, Validators.email]],
    password: ['12345678', [Validators.required, Validators.minLength(6)]]
  });

  constructor( private fb: FormBuilder,
                private router: Router,
                private authService: AuthService) {}

  login(){
    console.log(this.loginFormulario.value);
    //console.log(this.loginFormulario.valid);
    const {email, password} = this.loginFormulario.value

    this.authService.login( email, password)
    .subscribe((ok: any)=>{
      if (ok === true) {
        this.router.navigateByUrl('/dashboard');
      }else{
        Swal.fire('Error', ok, 'error');
      }
    });
    
    //
  }
}

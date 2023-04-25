import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  usuarioNuevoFormulario: FormGroup= this.fb.group({
    name:     [' ', [Validators.required, Validators.minLength(6)]],
    email:    ['test1@cosa.com', [Validators.required, Validators.email]],
    password: ['1234567', [Validators.required, Validators.minLength(6)]]
  });

  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthService) {  }

  craerUsuario(){
    console.log(this.usuarioNuevoFormulario.value);
    //console.log(this.loginFormulario.valid);
    const {email, password, name} = this.usuarioNuevoFormulario.value

    this.authService.registro(name, email, password)
    .subscribe((ok: any)=>{
      if (ok === true) {
        this.router.navigateByUrl('/dashboard');
      }else{
        Swal.fire('Error', ok, 'error');
      }
    });

    this.router.navigateByUrl('/dashboard');
  }
}

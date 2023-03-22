import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  usuarioNuevoFormulario: FormGroup= this.fb.group({
    name:     ['Otro Usuario', [Validators.required, Validators.minLength(6)]],
    email:    ['test1@cosa.com', [Validators.required, Validators.email]],
    password: ['1234567', [Validators.required, Validators.minLength(6)]]
  });

  constructor(private fb: FormBuilder,
              private router: Router) {  }

  craerUsuario(){
    console.log(this.usuarioNuevoFormulario.value);
    //console.log(this.usuarioNuevoFormulario.valid);

    this.router.navigateByUrl('/dashboard');
  }
}

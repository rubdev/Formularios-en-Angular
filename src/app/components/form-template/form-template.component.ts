import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';


@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styles: [`
  .ng-invalid.ng-touched:not(form) {
    border: 1px solid red;
  }
  .ng-valid.ng-touched:not(form) {
    border: 1px solid green;
  }
  `]
})
export class FormTemplateComponent implements OnInit {

  usuarioForm: Usuario;
  paises: string[] = ['España', 'Francia', 'Inglaterra', 'Portugal', 'Holanda', 'Otro'];
  sexos: string[] = ['Hombre', 'Mujer', 'Friki'];

  constructor() { }

  ngOnInit() {
    // this.usuarioForm = new Usuario();
  }

  enviarFormulario( formulario: NgForm ) {
    console.log('Formulario enviado');
    console.log(formulario);
  }

  

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styles: []
})
export class FormDataComponent {

  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl( '' ),
      apellido: new FormControl( '' ),
      email: new FormControl( '' ),
    });
  }

  enviarFormulario() {
    console.log(this.formulario.value);
    console.log(this.formulario);
  }

}

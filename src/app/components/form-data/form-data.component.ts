import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Usuario } from 'src/app/models/usuario.model';


@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styles: []
})
export class FormDataComponent {

  formulario: FormGroup;
  usuario: Usuario = new Usuario('DevRubén', 'Segura', 'ruben@micorreo.com');

  constructor() {
    this.formulario = new FormGroup({
      nombre: new FormControl( '', [
                                      Validators.required,
                                      Validators.minLength(6)
                                   ] ),
      apellidos: new FormControl( '', Validators.required ),
      email: new FormControl( '', [
                                      Validators.required,
                                      Validators.email
                                  ] ),
    });

    // cargando datos en el formulario
    this.formulario.setValue( this.usuario );
  }

  enviarFormulario() {
    console.log(this.formulario.value);
    console.log(this.formulario);
    this.formulario.reset( this.usuario );
  }

}

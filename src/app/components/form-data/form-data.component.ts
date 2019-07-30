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
                                      Validators.minLength(6),
                                      this.noPruebaName
                                   ] ),
      apellidos: new FormControl( '', Validators.required ),
      email: new FormControl( '', [
                                      Validators.required,
                                      Validators.email
                                  ] ),
      pass1: new FormControl( '', [
                                      Validators.required
                                  ] ) ,
      pass2: new FormControl( '', [
                                      Validators.required,
                                      this.noEsIgual.bind( this.formulario )
                                  ] ) ,
    });

    // cargando datos en el formulario
    // this.formulario.setValue( this.usuario );
  }

  enviarFormulario() {
    console.log(this.formulario.value);
    console.log(this.formulario);
    // this.formulario.reset( this.usuario );
  }

  noPruebaName( control: FormControl ): { [ s: string ]: boolean } {
    if ( control.value === 'prueba' ) {
      return {
        noPruebaName: true
      };
      return null;
    }
  }

  noEsIgual( control: FormControl ): { [ s: string ]: boolean } {
    const formulario: any = this;
    if ( control.value !== formulario.controls['pass1'].value ) {
      return {
        noesigual: true
      };
      return null;
    }
  }

}

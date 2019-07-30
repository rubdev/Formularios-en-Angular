export class Usuario {

    nombre: string;
    apellidos: string;
    email: string;
    /*
    pais: string;
    sexo: string;
    condiciones: boolean;
    */

    // PARA FORM DATA
    constructor( nombre: string, apellidos: string, email: string ) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.email = email;
    }
}

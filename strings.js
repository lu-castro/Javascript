const string1 = "cadena primitiva";
const string2 = 'cadena primitiva';
const string3 = `Otra cadena primitiva más`;

let nombre = "Juan";
let apellido = "Vergara";
//let saludo = new String("Hola Juan"); ya no se usa 

console.log(nombre.length, apellido.length); //cantidad de caracteres (partiendo del 0)
console.log(nombre.toUpperCase, apellido.toLowerCase); //mayúscula o minúscula

let lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ";

console.log(
    lorem.includes("amet"), //buscar si incluye la palabra amet en el lorem 
    lorem.trim(), //elimina los espacios en blanco del texto
    lorem.split(""), //separa los espacios en blanco del texto a la vez que separa palabra por palabra
    lorem.split(","), //separa el texto por comas
    ); 

/* Acceder a un caracteer */

return 'cat'.charAt(1) // devuelve el caracter numero uno, es decir 'a'

// Comparar cadenas //


let a = 'a'  //let declara una variable de alcance local a la cual se le puede asignar un valor
let b = 'b'
if (a < b) {
    console.log(a + 'es menor que ' + b);
} else if (a > b) {
    console.log(a + ' es mayor que ' + b);
} else {
    console.log(a + 'y ' + b + ' son iguales ');
}
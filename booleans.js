Boolean(10 > 9) // Devuelve valores de True o False dependiendo de la condición. 

//Métodos y Propiedades
constructor // devuelve la función creada por el prototipo Booleano: Boolean()
prototype // permite agregar propiedades y métodos al prototipo Booleano
toString() // convierte al valor Booleano en un string y devuelve un resultado 
valueOf() // Devuelve un valor Booleano primitivo 


let verdadero = true;
let falso = false;
let v = Boolean(true);
let f = Boolean(false);

console.log(verdadero, falso);
console.log(typeof verdadero, typeof falso, typeof v, typeof f);

// valores Truthy
console.log(Boolean(true))
console.log(Boolean({}))
console.log(Boolean(40))
console.log(Boolean("foot"))
console.log(Boolean(new Date()))
console.log(Boolean(-7))
console.log(Boolean(9.6))
console.log(Boolean(-3.25))
console.log(Boolean(Infinity))
console.log(Boolean(-Infinity))

// valores Falsy 
console.log(Boolean(false))
console.log(Boolean(null))
console.log(Boolean(undefined))
console.log(Boolean(0))
console.log(Boolean(NaN))
console.log(Boolean(""))


function BooleanT() {
    var x = true;
    if (x) {
        console.log(x);
    }
}
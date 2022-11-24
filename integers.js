new Number(value); // el objeto Number convierte un string a tipo numérico
// permite crear una instancia de un tipo de objeto definido por el usuario o de uno de los tipos de objeto integrados que tiene un función constructora.

var a = new Number('123') //ese es falso 
var b = Number('123');
a instanceof Number; // instanceof verifica que el valor de la cadena sea el requerido por el prototype
b instanceof Number; 



Number('123');
Number('123') === 123

Number("unicorn") //NaN
Number(undefined) //NaN
Number(123) //true


let a = 2;
let b = new Number(1);
let c = 7.19;
let d = "5.6"; 


console.log(typeof c, typeof d); // devuelve qué tipo de dato estamos usando 
console.log(a, b) //devuelve 1 
console.log(c.toFixed(1)); // el método toFixed(1) muestra solo un dígito del decimal, es decir 7,2
console.log(c.toFixed(5)); // muestra cinco dígitos del decimal, es decir 7,19000
console.log(parseInt(c)); // convierte el string en un número. Devuelve el entero del decimal: 7
console.log(parseFloat(c)); // imprime el entero y el decimal: 7.19
console.log( a + b ); // el display va a dar 3, ya que ambos son números y se suman 
console.log( c + d ); // el display es la concatenación de ambos strings (aparecen de distinto color en la consola)









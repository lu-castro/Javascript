# Javascript

## Conditionals.js
#### calcularEdad()
Al ingresar tu edad dentro del input se evalúa si el valor es mayor o menor a 18. El valor es "capturado" por la función a través del id del input, a través de *document.getElementById("edad").value.* 
###### if
Una vez obtenido el valor se evalúa si es mayor o igual a 18. En el caso de que sí, el método *alert()* muestra en pantalla "Podés entrar a esta página".
###### else
En el caso que el valor sea menor a 18, alert() se encarga de mostrar "Vos no podés entrar a esta página". 



## Strings.js 
#### Tipos de cadenadas
Dentro de las variables: let declara una variable de alcance local a la cual se le puede asignar un valor, const declara una variable de alcance local que no se puede modificar y tampoco puede ser redeclarada. 

#### Métodos
###### toUperCase
Mayúsculas. 
###### toLowerCase
Minúsculas. 
###### includes() 
Busca un string dentro de un texto. 
###### trim(
Elimina los espacios en blanco dentro de un texto.
###### split()
Separa el texto dependiendo de lo que se encuentre dentro de los paréntesis. 

#### Propiedades
###### lenght
Muestra la cantidad de caracteres empezando por cero. 



## Integers.js
Se definen Strings con valores de números enteros y decimales.

#### Métodos
###### typeof
Define el tipo de dato: string, integer, boolean.
###### instanceof 
Verifica que el valor de la cadena sea el requerido por el prototype. 
###### toFixed 
Convierte el número en un string y lo redondea a un número específico de decimales.  


#### Funciones
###### parseInt
Convierte el string en un número.
###### parseFloat 
Imprime el número entero con su decimal.



## Boolenas.js 
Devuelve valores de True o False dependiendo de la condición.
#### Métodos
###### toString() 
Convierte al valor Booleano en un string y devuelve un resultado.
###### valueOf()  
Devuelve un valor Booleano primitivo.  


## Forwhile.js
#### For
*for(let i = 0; i <= 4; i++) {*
    *console.log(i);*
*}*

Let i = 0, en la primera vuelta i es igual a cero. La condición es i <= 10 . Si se cumple con la condición, se incrementa uno cada vuelta hasta llegar al 10. 

#### While
*let cont = 1;*
*while(cont <= 100) {console.log(cont + " "); cont++;}*

Mientras 1 sea menor a 100 se imprime generando un bucle infinito, incrementa uno cada vez que se imprime la función y lo frena en 100. 




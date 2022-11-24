//FOR
for(let i = 0; i <= 4; i++) {
    console.log(i);
}
// imprimir el valor de i. va a dar 5 vueltas: de cero a cuatro. Let i = 0, en la primera vuelta i es igual a cero. i <= 4, esta es la condición, si se aplica se incrementa.

for(let i=4; i>=0; i--) {
    console.log(i);
}  //decrece

for(let i=10; i>=0; i--){
    if(i==5){
        console.log(i);
    }
}
//imprime solo cinco cuando se inicia el conteo 

for(let i=10;i>=0;i--){
    if(i!=5){
        console.log(i);
    }
}
// imprime todos los números menos el cinco

for(let i=0;i<=10;i){
    console.log(i);
}
// bucle infinito

let numbers = [0,1,2,3,4,5]
for(let i=0; i<numbers.length;i++){
    console.log(numbers[i]);
}


//WHILE
let cont = 1;
while(cont <= 100) {           //mientras 1 sea menor a 100 se imprime
    console.log(cont + " ");   //genera un bucle infinito
    cont++;                    //incrementa uno cada vez que se imprime la función y lo frena en 100
}


let cont = 1;
do {
    console.log(cont + " ");
    cont++; 
} while(cont <= 0);
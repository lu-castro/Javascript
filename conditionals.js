var edad = document.getElementById("edad").value;

function calcularEdad(){
    var edad = document.getElementById("edad").value;
    if(edad >= 18){
        alert("Podés entrar a esta página");
    } else {
        alert("Vos no podés entrar a esta página");
    }
}


function edadAlice() {
    var edadAlice = document.getElementById("edadAlice").value;
    if(edadAlice < 18){
        alert("Alice es menor de edad");
    } else if (edadAlice >= 18 && edadAlice <= 21) {
        alert("Alice tiene entre 18 y 21");
    } else {
        alert("Alice tiene más de 21");
    }
}
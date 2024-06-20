alert("Bievenenido al juego del numero secreto")

//Variables
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = "vez";
let maximosIntentos = 2;

console.log(numeroSecreto);

while (numeroUsuario != numeroSecreto){
    numeroUsuario =  parseInt(prompt("Me indicas un numero entre 1 y 10 por favor:"));
    
    console.log(typeof numeroUsuario);
    if (numeroUsuario == numeroSecreto) {
        //Acertamos , fue verdadera la condicion
        alert(`acertaste,el numero es:${numeroUsuario}.lo hiciste en ${intentos} ${intentos == 1 ? 'vez': 'veces'}`);
    } else{
        if (numeroUsuario > numeroSecreto) {
                alert("El numero secreto es menor");
        }else{
            alert("El numero secreto es mayor");
        }
        //incrementamos el contador cuando no acierta
        //intentos = intentos +1
        //intento += 1;
        intentos++;
        palabraVeces = 'Veces';
        if (intentos > 3) {
            alert(`Llegaste al numero maximo de intentos`);
            break;
        }
        //No acertamos, fue falsa la condicion
        //alert("Lo siento, no adivinaste el numero");
    }
}

//desafio hora de practicar
/*
alert("Bienvenida y bienvenido a nuestro sitio web");
let nombre = "Luna";
let edad = 25;
let numeroDeVentas = 50;
let saldoDisponible = 1000;
alert ("Error.completa todos los campos");

let mensajeDeError = "Error. Completa todos los campos";
alert(mensajeDeError);

prompt("Ingresa tu nombre");
console.log(nombre);
prompt("Ingresa tu edad");
console.log(edad);

if (edad >= 18) {
    alert("puedes obtener tu licencia de conducir");
}*/


/* EJERCICIO DIA DE LA SEMANA
prompt("que dia de la semana es");
console.log(diaDeLaSemana);

if (diaDeLaSemana == "Sabado") {
    alert("buen fin de semana");
} else{
    alert("buen comienzo de semana");
}*/



let numeroSecreto = generarNumeroSecreto();

function asignarTextoElemento(elemento,texto){// la funcion puede recibir parametros, dos parametros recibidos
    let elementoHTML = document.querySelector(elemento);
    elemento.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = document.getElementById('valorUsuario').value;
    console.log(typeof(numeroDeUsuario));
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario ==  numeroSecreto);
    return;
}

function generarNumeroSecreto() {
    return math.floor (math.random()* 10) + 1;
    return numeroSecreto;

    
}

asignarTextoElemento('h1','juego del numero secreto'); // invocando a la funcion asignarTextoElemento
asignarTextoElemento('p','Indica un numero del 1 al 10'); // invocando a la funcion asignarTextoElemento




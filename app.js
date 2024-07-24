let numeroSecreto = 0;
let intentos = 0;
let listasNumerosSorteados = [];
let numeroMaximo = 10;


function asignarTextoElemeno (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;


}

function verificarIntento () {
    let numeroDeUsuario = parseInt(document.getElementById('valorDeUsuario').value);
    console.log(intentos);
    if (numeroDeUsuario==numeroSecreto)
    {
        asignarTextoElemeno('p', `Acertaste el Numero en ${intentos} ${intentos==1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else
    {
        if (numeroDeUsuario > numeroSecreto)
        {
            asignarTextoElemeno('p', 'El numero secreto es menor');
        }
        else{
            asignarTextoElemeno('p', 'El numero secreto es mayor');
        }

        intentos++;
        limpiarCaja();

    }
    return;
}
function limpiarCaja() {
document.querySelector('#valorDeUsuario').value ='';

}
function generarNumeroSecretro() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listasNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if (listasNumerosSorteados.length == numeroMaximo){
        asignarTextoElemeno('p','Ya se sortearon todos los numeros posibles')

    }   else {

        if (listasNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecretro();

        }
        else{
            listasNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function condicionesIniciales(){
    asignarTextoElemeno ('h1', 'Juego del numero Secreto' );
    asignarTextoElemeno ('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecretro();
    intentos=1;
}
function reiniciarJuego() {
//limpiar caja
limpiarCaja();
//Indicar mensaje de intervalo de numeros
//Generar el numero aleatorio
//Iniciar el numero de intentos
condicionesIniciales();
//Deshabilitar el boton de nuevo juego
document.querySelector('#reiniciar').setAttribute('disabled','true');

}
condicionesIniciales();

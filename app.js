let numeroSecreto;
let intentos = 0; 
let listaNumeroSorteados = [];
let numeroMaximo = 10; 

console.log(numeroSecreto); 


function asignarTextoElemento(elemento, texto) {  // parametros que recibe la funcion

   let elementoHTML = document.querySelector(elemento); // metodo que permite acceder a elementos del documento
      // el titulo se vuelve un objeto y tiene metodos que definen su comportamiento
   elementoHTML.innerHTML = texto;  // Cuando vas a trabajar con esta variable el editor reconoce que es un avariable de tipo header
   return;
  }
  

function verificarIntento() {

 let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); // puedo utilisar parseint para volver a numero lo que quiera.
 
 console.log(' Los intentos van en ' + intentos ); 

 if (numeroDeUsuario === numeroSecreto) { // posible error 
   
  asignarTextoElemento('p',`Acertaste el numero secreto en ${intentos} ${(intentos === 1) ? 'Vez': 'Veces'}`); // usar template strings insertar valores variables a los trings
  document.getElementById('reiniciar').removeAttribute('disabled');
  
 } else {
    //  El usuario no acerto
    if (numeroDeUsuario > numeroSecreto){
      asignarTextoElemento('p','El numero secreto es menor'); 
    }  else {
      asignarTextoElemento('p', 'El numero secreto es mayor');
    }
    intentos++; 
    limpiarCaja();
   }
   return; 
}

function limpiarCaja() {

   document.querySelector('#valorUsuario').value = ''; // el valor en blanco permite limpiar 
   
}

function generarNumeroSecreto() {

 let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1; // si el numero generado esta en la lista hago algo o no 

 console.log(numeroGenerado); 
 console.log(listaNumeroSorteados); 

 if (listaNumeroSorteados.length === numeroMaximo) {

   asignarTextoElemento('p', 'Ya se sortearon todos los posibles numeros');

 } else {

   if (listaNumeroSorteados.includes(numeroGenerado)) { // metodo include para recorrer un array 

      return generarNumeroSecreto();
   
    } else {//Aquí es cuando el número generado no existe, por tanto, lo agrega
   
      listaNumeroSorteados.push(numeroGenerado);
      return numeroGenerado; 
    }

  }

 
}

function condicionesIniciales() {

   asignarTextoElemento('h1','Juego del numero secreto'); // atraves de hoisting en jS se puede asignar al leer las variables al inicio del codigo d
   asignarTextoElemento('p', `Indica el numero del 1 al ${numeroMaximo}`);    
   numeroSecreto = generarNumeroSecreto(); 
   intentos = 1;
}



function reiniciarJuego() {

  // limpiar la caja 
  limpiarCaja(); 
   // indicar mensage de numeros que pide 
   // generar el numero de aleatorio
  condicionesIniciales(); 
   // iniciar intento
   document.querySelector('#reiniciar').setAttribute('disabled', true); 
}

// Arrays - tipo de dato - arreglo de datos que se comporta como una lista 

 // Agrego Condiciones iniciales si declaro la funcion se ejecuta automaticamente

 condicionesIniciales();

 
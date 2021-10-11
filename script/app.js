// Objetos y funciones

//Comenzemos con entidad, primero la entidad tablero y luego la entidad jugador


class Ruleta{
  constructor(roulette,casillaEsp,game){
    this.roulette = roulette;
    this.casillaEsp = casillaEsp;
    this.game = game;
  }
}

class Jugador{
  constructor(nombre,casilla){
    this.nombre = nombre;
    this.casilla = casilla;
  }
  girarRuleta(min, max){
  max = max + 1;
  return Math.floor(Math.random() * (max - min) + min);
  }
}



//Creamos las constantes ahora, atraves de la clase creamos el objeto

const juegoDeLaRuleta = new Ruleta({valorMin:1, valorMax:500},
273,
true);

const jugador = new Jugador("Diego",0);



//Creamos un elemento en HTML, después de que el usuario ingrese el paquete, agregamos el nro de oportunidades


const pOportunidades = document.createElement("p");

const mostrarPack = () => {

if(document.getElementById("packElegido").value == "pack1"){
  pOportunidades.textContent = "1";
  document.getElementById("divConPOportunidades").appendChild(pOportunidades);
}else if (document.getElementById("packElegido").value == "pack2"){
  pOportunidades.textContent = "3";
  document.getElementById("divConPOportunidades").appendChild(pOportunidades);
}else if (document.getElementById("packElegido").value == "pack3"){
  pOportunidades.textContent = "10";
  document.getElementById("divConPOportunidades").appendChild(pOportunidades);
}else{
  pOportunidades.textContent = "El pack ingresado es inválido";
  document.getElementById("divConPOportunidades").appendChild(pOportunidades);
};

}

//Ahora creamos nuestra función

const iniciarGame = () => {
  let i = 0;
  if(document.getElementById("packElegido").value == "pack1"){
    while(i < 1){
      i++;
      jugador.casilla = jugador.casilla + jugador.girarRuleta(juegoDeLaRuleta.roulette.valorMin, juegoDeLaRuleta.roulette.valorMax)
      if(jugador.casilla == 273){
      console.log(`${jugador.nombre}, el número que te tocó es ${jugador.casilla} ganaste el premio mayor, 1 BTC es tuyo.`);
      juegoDeLaRuleta.game = false;
      break
      
      } else{
      console.log(`${jugador.nombre}, te tocó el número ${jugador.casilla} fallaste, sigue intentando, si te quedaste sin intentos adquiere otro pack.`);
      
      }
      jugador.casilla=0;
    }
  }
  if(document.getElementById("packElegido").value == "pack2"){
    while(i < 3){
      
      i++;
      jugador.casilla = jugador.casilla + jugador.girarRuleta(juegoDeLaRuleta.roulette.valorMin, juegoDeLaRuleta.roulette.valorMax)
      if(jugador.casilla == 273){
      console.log(`${jugador.nombre}, el número que te tocó es ${jugador.casilla} ganaste el premio mayor, 1 BTC es tuyo.`);
      juegoDeLaRuleta.game = false;
      break
      
      } else{
      console.log(`${jugador.nombre}, te tocó el número ${jugador.casilla} fallaste, sigue intentando, si te quedaste sin intentos adquiere otro pack.`);
      }
      jugador.casilla=0;
    }
  }
  if(document.getElementById("packElegido").value == "pack3"){
    while(i < 10){
      
      i++;
      jugador.casilla = jugador.casilla + jugador.girarRuleta(juegoDeLaRuleta.roulette.valorMin, juegoDeLaRuleta.roulette.valorMax)
      if(jugador.casilla == 273){
      console.log(`${jugador.nombre}, el número que te tocó es ${jugador.casilla} ganaste el premio mayor, 1 BTC es tuyo.`);
      juegoDeLaRuleta.game = false;
      break
      
      } else{
      console.log(`${jugador.nombre}, te tocó el número ${jugador.casilla} fallaste, sigue intentando, si te quedaste sin intentos adquiere otro pack.`);
      }
      jugador.casilla=0;
    }
  }
  
}



//Fondo con partículas

particlesJS(
{
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#0bbb1f"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.4088700755207083,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 2,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
}
);

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



let paquete = prompt(`Escribí "pack1" si queres una oportunidad, "pack2" si queres 3 oportunidades o "pack3" para 10 chances de ganar`);

//Ahora creamos nuestra función

const iniciarGame = () => {
  let i = 0;
  if(paquete == "pack1"){
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
  if(paquete == "pack2"){
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
  if(paquete == "pack3"){
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

iniciarGame();

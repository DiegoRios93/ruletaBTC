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

//Imprimir en DOM los packs 


let paquetes = [];
let imprimirproductos= document.getElementById("agregarPacks");
let elemento= "";


class Productos{
  constructor(chances,precio, img, ruta){
    this.chances = chances;
    this.precio = precio;
    this.img = img;
    this.ruta = ruta;
  }
}

let pack1 = new Productos(1, 25, "assets/img/unTicket.jpg", "pages/tienda.html#pack1comprar");
let pack2 = new Productos(3, 70, "assets/img/tresTickets.jpg", "pages/tienda.html#pack2comprar");
let pack3 = new Productos(10, 220, "assets/img/diezTickets.jpg", "pages/tienda.html#pack3comprar");
paquetes.push(pack1, pack2, pack3);


for (let i = 0; i < paquetes.length; i++){
    elemento += `
    <div class="col-lg-4 col-md-6 col-xs-12">
      <div class="card" style="width: 18rem;">
        <img src="${paquetes[i].img}" class="card-img-top" alt="imagenTickets">
        <div class="card-body">
          <h5 class="card-title">${paquetes[i].chances} Ticket/s</h5>
          <p class="card-text">Tickets con ${paquetes[i].chances} oportunidad/es para ganar 1 BTC, precio <span>${paquetes[i].precio} USDT</span>, puedes adquirirlos con USDT o BNB.</p>
          <a href="${paquetes[i].ruta}" class="btn btn-primary">Buy</a>
        </div>
      </div>
    </div>
    `
imprimirproductos.innerHTML = elemento
}





//Creamos las constantes ahora, atraves de la clase creamos el objeto

const juegoDeLaRuleta = new Ruleta({valorMin:1, valorMax:500},
273,
true);

const jugador = new Jugador("Diego",0);


//
//
//
// Agregamos el número de oportunidades al HTML Principal


let datoGuardado = 0;
datoGuardado =  datoGuardado + Number(localStorage.getItem('COMPRA'));


let imprimirProductosDos = document.getElementById("divConPOportunidades");

if(datoGuardado == null){
  imprimirProductosDos.innerHTML += `<p>0</p>`;
}else{
  imprimirProductosDos.innerHTML += `<p>${datoGuardado}</p>`;
}

//
//
//
//
//Evento al botón PLAY

/*
let jugando = document.getElementById("jugarALaRuleta");

const jugarRuleta = () => {
  let i = 0;
    while(i < datoGuardado){
      i++;
      jugador.casilla = jugador.casilla + jugador.girarRuleta(juegoDeLaRuleta.roulette.valorMin, juegoDeLaRuleta.roulette.valorMax)
        if(jugador.casilla == 273){
        alert(`${jugador.nombre}, el número que te tocó es ${jugador.casilla} ganaste el premio mayor, 1 BTC es tuyo.`);
        localStorage.removeItem("COMPRA");
        datoGuardado = 0;
        juegoDeLaRuleta.game = false;
        break
        
        } else{
        alert(`${jugador.nombre}, te tocó el número ${jugador.casilla} fallaste, sigue intentando, si te quedaste sin intentos adquiere otro pack.`);
        }
      jugador.casilla=0;
    }
    localStorage.removeItem("COMPRA");
    datoGuardado = 0;
  }
  

jugarALaRuleta.addEventListener("click", jugarRuleta);*/

//Animación a la img de la rulera del LOGO

$("#imgRuletaAnimada").on("click", ()=>{
  $("#imgRuletaAnimada").fadeOut("slow");
});



//Ruletaaaaaaaaaa!
(function($) {
  $.fn.extend({

    roulette: function(options) {

      var defaults = {
        angle: 0,
        angleOffset: -45,
        speed: 7000,
        easing: "easeInOutElastic",
      };

      var opt = $.extend(defaults, options);

      return this.each(function() {
        var o = opt;

        var data = [
          {
            color: '#3f297e',
            text: ':('
          },
          {
            color: '#1d61ac',
            text: ':('
          },
          {
            color: '#169ed8',
            text: ':('
          },
          {
            color: '#209b6c',
            text: ':('
          },
          {
            color: '#60b236',
            text: ':('
          },
          {
            color: '#efe61f',
            text: ':('
          },
          {
            color: '#f7a416',
            text: ':('
          },
          {
            color: '#e6471d',
            text: ':('
          },
          {
            color: '#dc0936',
            text: ':('
          },
          {
            color: '#e5177b',
            text: ':('
          },
          {
            color: '#be107f',
            text: ':('
          },
          {
            color: '#1c1b1a',
            text: '1 BTC !'
          },
          {
            color: '#3f297e',
            text: ':('
          },
          {
            color: '#1d61ac',
            text: ':('
          },
          {
            color: '#169ed8',
            text: ':('
          },
          {
            color: '#209b6c',
            text: ':('
          },
          {
            color: '#60b236',
            text: ':('
          },
          {
            color: '#efe61f',
            text: ':('
          },
          {
            color: '#f7a416',
            text: ':('
          },
          {
            color: '#e6471d',
            text: ':('
          },
          {
            color: '#dc0936',
            text: ':('
          },
          {
            color: '#e5177b',
            text: ':('
          },
          {
            color: '#be107f',
            text: ':('
          },
          {
            color: '#881f7e',
            text: ':('
          },
          {
            color: '#3f297e',
            text: ':('
          },
          {
            color: '#1d61ac',
            text: ':('
          },
          {
            color: '#169ed8',
            text: ':('
          },
          {
            color: '#209b6c',
            text: ':('
          },
          {
            color: '#60b236',
            text: ':('
          },
          {
            color: '#efe61f',
            text: ':('
          },
          {
            color: '#f7a416',
            text: ':('
          },
          {
            color: '#e6471d',
            text: ':('
          },
          {
            color: '#dc0936',
            text: ':('
          },
          {
            color: '#e5177b',
            text: ':('
          },
          {
            color: '#be107f',
            text: ':('
          },
          {
            color: '#881f7e',
            text: ':('
          },
          {
            color: '#3f297e',
            text: ':('
          },
          {
            color: '#1d61ac',
            text: ':('
          },
          {
            color: '#169ed8',
            text: ':('
          },
          {
            color: '#209b6c',
            text: ':('
          },
          {
            color: '#60b236',
            text: ':('
          },
          {
            color: '#efe61f',
            text: ':('
          },
          {
            color: '#f7a416',
            text: ':('
          },
          {
            color: '#e6471d',
            text: ':('
          },
          {
            color: '#dc0936',
            text: ':('
          },
          {
            color: '#e5177b',
            text: ':('
          },
          {
            color: '#be107f',
            text: ':('
          },
          {
            color: '#881f7e',
            text: ':('
          },
          {
            color: '#3f297e',
            text: ':('
          },
          {
            color: '#1d61ac',
            text: ':('
          },
          {
            color: '#169ed8',
            text: ':('
          },
          {
            color: '#209b6c',
            text: ':('
          },
          {
            color: '#60b236',
            text: ':('
          },
          {
            color: '#efe61f',
            text: ':('
          },
          {
            color: '#f7a416',
            text: ':('
          },
          {
            color: '#e6471d',
            text: ':('
          },
          {
            color: '#dc0936',
            text: ':('
          },
          {
            color: '#e5177b',
            text: ':('
          },
          {
            color: '#be107f',
            text: ':('
          },
          {
            color: '#881f7e',
            text: ':('
          },
          {
            color: '#3f297e',
            text: ':('
          },
          {
            color: '#1d61ac',
            text: ':('
          },
          {
            color: '#169ed8',
            text: ':('
          },
          {
            color: '#209b6c',
            text: ':('
          },
          {
            color: '#60b236',
            text: ':('
          },
          {
            color: '#efe61f',
            text: ':('
          },
          {
            color: '#f7a416',
            text: ':('
          },
          {
            color: '#e6471d',
            text: ':('
          },
          {
            color: '#dc0936',
            text: ':('
          },
          {
            color: '#e5177b',
            text: ':('
          },
          {
            color: '#be107f',
            text: ':('
          },
          {
            color: '#881f7e',
            text: ':('
          }
        ];
        
        var $wrap = $(this);
        var $btnStart = $wrap.find("#btn-start");
        var $roulette = $wrap.find(".roulette");
        var wrapW = $wrap.width();
        var angle = o.angle;
        var angleOffset = o.angleOffset;
        var speed = o.speed;
        var esing = o.easing;
        var itemSize = data.length;
        var itemSelector = "item";
        var labelSelector = "label";
        var d = 360 / itemSize;
        var borderTopWidth = wrapW;
        var borderRightWidth = tanDeg(d);

        for (i = 1; i <= itemSize; i += 1) {
          var idx = i - 1;
          var rt = i * d + angleOffset;
          var itemHTML = $('<div class="' + itemSelector + '">');
          var labelHTML = '';
              labelHTML += '<p class="' + labelSelector + '">';
              labelHTML += '  <span class="text">' + data[idx].text + '<\/span>';
              labelHTML += '<\/p>';

          $roulette.append(itemHTML);
          $roulette.children("." + itemSelector).eq(idx).append(labelHTML);
          $roulette.children("." + itemSelector).eq(idx).css({
            "left": wrapW / 2,
            "top": -wrapW / 2,
            "border-top-width": borderTopWidth,
            "border-right-width": borderRightWidth,
            "border-top-color": data[idx].color,
            "transform": "rotate(" + rt + "deg)"
          });

          var textH = parseInt(((2 * Math.PI * wrapW) / d) * .02);

          $roulette.children("." + itemSelector).eq(idx).children("." + labelSelector).css({
            "height": textH + 'px',
            "line-height": textH + 'px',
            "transform": 'translateX(' + (textH * 1.55) + 'px) translateY(' + (wrapW * -.48) + 'px) rotateZ(' + (90 + d * .9) + 'deg)'
          });

        }

        function tanDeg(deg) {
          var rad = deg * Math.PI / 180;
          return wrapW / (1 / Math.tan(rad));
        }


        $btnStart.on("click", function() {
          rotation();
        });

        function rotation() {

          var completeA = 360 * r(5, 10) + r(0, 360);

          $roulette.rotate({
            angle: angle,
            animateTo: completeA,
            center: ["50%", "50%"],
            easing: $.easing.esing,
            duration: speed
          });
        }

        function r(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }

      });
    }
  });
})(jQuery);

$(function() {

  $('.box-roulette').roulette();

});
//sonidos

let ruletaMusic = new Audio("./assets/sound/sonidoRuleta.mp3");
let ganasteMusic = new Audio("./assets/sound/ganaste.mp3");



//Api precio BTC

const dollarContainer = document.getElementById('dollar');
const usdAmount = document.getElementById('usd-amount');

fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then(response => response.json())
    .then(data => displayData(data));

const displayData = data => {
    const usd = data.bpi.USD.rate_float;
    usdAmount.textContent = `$${usd} USD`;

}


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
    <div class="col-lg-4 col-md-6 col-xs-12 margenBottom">
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

// Agregamos el número de oportunidades al HTML Principal


let datoGuardado = 0;
datoGuardado =  datoGuardado + Number(localStorage.getItem('COMPRA'));


let imprimirProductosDos = document.getElementById("divConPOportunidades");

if(datoGuardado == null){
  imprimirProductosDos.textContent = datoGuardado;
}else{
  imprimirProductosDos.textContent = datoGuardado;
}

//

let btnInner = document.getElementById("ganadorONo");

let agregarCartelModal = `
<br><br>
<span>¡GANASTE 1 BITCOIN!</span>
<br><br>
<p>En breve nos pondremos en contacto contigo</p>
<p>Escribe tu mail aquí</p>
<input type="mail" name="mail"></input>
<button>Enviar</button>
`;


let agregarCartelModal2 = `
<br><br>
<p>Seguí participando!</p>
`;


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
                color: '#1c1b1a',
                text: '1 BTC !'
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
                if(datoGuardado > 0){
                datoGuardado--;
                imprimirProductosDos.textContent = datoGuardado;
                localStorage.setItem('COMPRA', datoGuardado);
                ruletaMusic.play();
                rotation();
                }else if(datoGuardado <= 0 ){
                $btnStart.attr("data-toggle","modal");
                $btnStart.attr("data-target","#exampleModal");
                localStorage.removeItem("COMPRA");
                datoGuardado = 0;
              }
            });

              function rotation() {
                

                var completeA = 360 * r(5, 10) + r(0, 360);

                $roulette.rotate({
                  angle: angle,
                  animateTo: completeA,
                  center: ["50%", "50%"],
                  easing: $.easing.esing,
                   callback: function() {
                    var currentA = $(this).getRotateAngle();

                    console.log(currentA);
                      if ( currentA % 360 >= 0 && currentA % 360 <=5){
                        btnInner.innerHTML = agregarCartelModal;
                        ganasteMusic.play();
                        particlesJS({
                                      "particles": {
                                        "number": {
                                          "value": 578,
                                          "density": {
                                            "enable": true,
                                            "value_area": 631.3181133058181
                                          }
                                        },
                                        "color": {
                                          "value": "#efff00"
                                        },
                                        "shape": {
                                          "type": "edge",
                                          "stroke": {
                                            "width": 0.1,
                                            "color": "#ffe100"
                                          },
                                          "polygon": {
                                            "nb_sides": 5
                                          },
                                          "image": {
                                            "src": "img/github.svg",
                                            "width": 200,
                                            "height": 200
                                          }
                                        },
                                        "opacity": {
                                          "value": 0.8979107540846928,
                                          "random": true,
                                          "anim": {
                                            "enable": false,
                                            "speed": 1,
                                            "opacity_min": 0.1,
                                            "sync": false
                                          }
                                        },
                                        "size": {
                                          "value": 10,
                                          "random": true,
                                          "anim": {
                                            "enable": false,
                                            "speed": 40,
                                            "size_min": 0.1,
                                            "sync": false
                                          }
                                        },
                                        "line_linked": {
                                          "enable": false,
                                          "distance": 500,
                                          "color": "#ffffff",
                                          "opacity": 0.4,
                                          "width": 2
                                        },
                                        "move": {
                                          "enable": true,
                                          "speed": 6,
                                          "direction": "bottom",
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
                                            "mode": "bubble"
                                          },
                                          "onclick": {
                                            "enable": true,
                                            "mode": "repulse"
                                          },
                                          "resize": true
                                        },
                                        "modes": {
                                          "grab": {
                                            "distance": 400,
                                            "line_linked": {
                                              "opacity": 0.5
                                            }
                                          },
                                          "bubble": {
                                            "distance": 400,
                                            "size": 4,
                                            "duration": 0.3,
                                            "opacity": 1,
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
                                    });
                      }
                      else {
                        btnInner.innerHTML = agregarCartelModal2;
                      }
                    },
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


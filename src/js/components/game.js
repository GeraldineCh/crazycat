'use strict';

const Game = _ => {
 const general = $('<div></div>'); 
 const activePlayer = $('<h3>Turno de ' + state.players[0].nombre + ' </h3>');
 //const board = $('<div class="tablero"><button type="button" id="casilla1" class="espacio" value="e"/><button type="button" id="casilla2" class="espacio" value="e"/></button><button type="button" id="casilla3" class="espacio" value="e"/></button><br><button type="button" id="casilla4" class="espacio" value="e"/></button><button type="button" id="casilla5" class="espacio" value="e"/></button><button type="button" id="casilla6" class="espacio" value="e"/></button><br><button type="button" id="casilla7" class="espacio" value="e"/></button><button type="button" id="casilla8" class="espacio" value="e"/></button><button type="button" id="casilla9" class="espacio" value="e"/></button><br></div>');
 const player1 = $('<span>Moviemientos de' + state.players[0].nombre + '</span><span id="p1-mov"> 0</span><br>');
 const player2 = $('<span>Moviemientos de' + state.players[1].nombre + '</span><span id="p2-mov"> 0</span><br>');
 
 const button = $("<button>Mandar al historial</button>");

 
 general.append(activePlayer);
 general.append(board());
 general.append(player1);
 general.append(player2);
 general.append(button);
 
  return general;
}

/*
//Variables de inicio
const uno = $('#casilla1');
const dos = $('#casilla2');
const tres = $('#casilla3');
const cuatro = $('#casilla4');
const cinco = $('#casilla5');
const seis = $('#casilla6');
const siete = $('#casilla7');
const ocho = $('#casilla8');
const nueve = $('#casilla9');
//const reinicio = document.getElementById("nuevo");
//const tablero = document.getElementsByClassName("espacio");
const estado = true;
const contador = 0;

//Inicio de la partida
function inicio() {
    if (estado === true) {
        this.setAttribute("value", "X");
        actualizar();
        this.disabled = true;
        estado = false;
        return false;
    }
    if (estado === false) {
        this.setAttribute("value", "O");
        actualizar();
        this.disabled = true;
        estado = true;
    }
}

//Se comprueba al concluir la partida
function actualizar() {
  "use strict";
  //Combinaciones ganadoras del jugador O
  if (((uno.value == "O") && (dos.value == "O") && (tres.value == "O")) ||
    ((cuatro.value == "O") && (cinco.value == "O") && (seis.value == "O")) ||
    ((siete.value == "O") && (ocho.value == "O") && (nueve.value == "O")) ||
    ((uno.value == "O") && (cuatro.value == "O") && (siete.value == "O")) ||
    ((dos.value == "O") && (cinco.value == "O") && (ocho.value == "O")) ||
    ((tres.value == "O") && (seis.value == "O") && (nueve.value == "O")) ||
    ((uno.value == "O") && (cinco.value == "O") && (nueve.value == "O")) ||
    ((tres.value == "O") && (cinco.value == "O") && (siete.value == "O"))) {
      alert("El jugador con el símbolo O es el ganador. Bien jugado.");
      return false;
  }

//Combinaciones ganadoras del jugador X
  if (((uno.value == "X") && (dos.value == "X") && (tres.value == "X")) ||
  ((cuatro.value == "X") && (cinco.value == "X") && (seis.value == "X")) ||
  ((siete.value == "X") && (ocho.value == "X") && (nueve.value == "X")) ||
  ((uno.value == "X") && (cuatro.value == "X") && (siete.value == "X")) ||
  ((dos.value == "X") && (cinco.value == "X") && (ocho.value == "X")) ||
  ((tres.value == "X") && (seis.value == "X") && (nueve.value == "X")) ||
  ((uno.value == "X") && (cinco.value == "X") && (nueve.value == "X")) ||
  ((tres.value == "X") && (cinco.value == "X") && (siete.value == "X"))) {
      alert("El jugador con el símbolo X es el ganador. Felicitaciones.");
      return false;
  }

//Combinaciones que resultan empate
  if ((uno.value == "X" || uno.value == "O") && (dos.value == "X" || dos.value == "O") &&
  (tres.value == "X" || tres.value == "O") && (cuatro.value == "X" || cuatro.value == "O") &&
  (cinco.value == "X" || cinco.value == "O") && (seis.value == "X" || seis.value == "O") &&
  (siete.value == "X" || siete.value == "O") && (ocho.value == "X" || ocho.value == "O") &&
  (nueve.value == "X" || nueve.value == "O")) {
      alert("Han empatado. Recomendamos una nueva partida.");
      return false;
  }
}
*/

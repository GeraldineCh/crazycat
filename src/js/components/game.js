'use strict';

const Game = _ => {
 const general = $('<div></div>'); 
 const activePlayer = $('<h3>Turno de <span id="current-player"></span> </h3>');
 //const board = $('<div class="tablero"><button type="button" id="casilla1" class="espacio" value="e"/><button type="button" id="casilla2" class="espacio" value="e"/></button><button type="button" id="casilla3" class="espacio" value="e"/></button><br><button type="button" id="casilla4" class="espacio" value="e"/></button><button type="button" id="casilla5" class="espacio" value="e"/></button><button type="button" id="casilla6" class="espacio" value="e"/></button><br><button type="button" id="casilla7" class="espacio" value="e"/></button><button type="button" id="casilla8" class="espacio" value="e"/></button><button type="button" id="casilla9" class="espacio" value="e"/></button><br></div>');
 const player1 = $('<span>Moviemientos de' + state.players[0].nombre + '</span><span id="p1-mov"> 0</span><br>');
 const player2 = $('<span>Moviemientos de' + state.players[1].nombre + '</span><span id="p2-mov"> 0</span><br>');
 const warning = $('<span class="message">Gano <span id="winner"></span></span>');
 const button = $("<button>Mandar al historial</button>");

 
 general.append(activePlayer);
 general.append(Board());
 general.append(player1);
 general.append(player2);
 general.append(warning);
 general.append(button);
 
 button.on('click', _ => {
    getJSON('games', (err, json) => {
      if (err) { return console.log(err.message);}
      state.historial = json;
      console.log(state.histoial);
      render($('.root'));
    });
  });
 
 
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

const Board = _ => {
  const board= $('<div class="board"></div>');
  const casillas= 9;

  for (var i = 0; i < casillas; i++) {
    const casilla = $('<a class="btn casilla" data-position="' + i +'"></a>');
    casilla.on('click', (e) => {
      if (state.active == 1) {
        play(state.players[0], e.target);
      }else {
        play(state.players[1], e.target);
      }
    });
    board.append(casilla);
  }
  return board;
}

const play= (player, box) => {
  let current_box = $(box);
  current_box.text(player.juego);
  let row = Math.floor(current_box.data('position') / 3);
  let column = current_box.data('position') % 3;
  state.board[row][column] = player.juego;

  player.movimientos += 1;

  if (player.ingreso == 1) {
    $('#p1-mov').text(player.movimientos);
  }else {
    $('#p2-mov').text(player.movimientos);
  }

  switch (checkWinner()) {
    case 0:
      state.win= "empate";
      $('h5').empty();
      $('h5').text('El juego ha terminado');
      $('.message span').text('Es un empate');
      break;
    case 1:
      state.win= player.ingreso;
      $('h5').empty();
      $('h5').text('El juego ha terminado');
      $('.message span').text(player.nombre);
      var body = {
          winner_player: state.players[0].nombre,
          loser_player: state.players[1].nombre,
          number_of_turns_to_win: state.players[0].movimientos
      };
      postJSON('games', body, (response)=> {
        console.log(response);
        state.actividad = "historial";
        render($('.root'));
      });
      break;
    case 2:
      state.win= player.ingreso;
      $('h5').empty();
      $('h5').text('El juego ha terminado');
      $('.message span').text(player.nombre);
      var body = {
          winner_player: state.players[1].nombre,
          loser_player: state.players[0].nombre,
          number_of_turns_to_win: state.players[1].movimientos
      };
      postJSON('games', body, (response)=> {
        console.log(response);
        state.actividad = "historial";
        render($('.root'));
      });
      break;
    case 3:
      if (player.ingreso == 1) {
        state.active= 2;
        $('#current-player').text(state.players[1].nombre);
      }else {
        state.active= 1;
        $('#current-player').text(state.players[0].nombre);
      }
      break;
    default:
      console.log("El juego a empezado");
  }
}

const checkWinner= _ => {
    return check(state.players[0].juego) ? 1:
           check(state.players[1].juego) ? 2:
           checkFull() ? 0 : 3;
  }
const check = (player) => {
     return (state.board[0][0] == state.board[0][1] && state.board[0][0] == state.board[0][2] && (state.board[0][0] == player)) || //first row
       		  (state.board[1][0] == state.board[1][1] && state.board[1][0] == state.board[1][2] && (state.board[1][0] == player)) || //second row
       		  (state.board[2][0] == state.board[2][1] && state.board[2][0] == state.board[1][2] && (state.board[2][0] == player)) || //third row
       		  (state.board[0][0] == state.board[1][0] && state.board[0][0] == state.board[2][0] && (state.board[0][0] == player)) || //first column
       		  (state.board[0][1] == state.board[1][1] && state.board[0][1] == state.board[2][1] && (state.board[0][1] == player)) || //second column
       		  (state.board[0][2] == state.board[1][2] && state.board[0][2] == state.board[2][2] && (state.board[0][2] == player)) || //third column
       		  (state.board[0][0] == state.board[1][1] && state.board[0][0] == state.board[2][2] && (state.board[0][0] == player)) || //diagonal 1
       		  (state.board[0][2] == state.board[1][1] && state.board[0][2] == state.board[2][0] && (state.board[0][2] == player));   //diagonal 2
   }
const checkFull = _ => {
       return  ((state.board[0][0] == "x") || (state.board[0][0] == "o")) &&
     			    ((state.board[1][0] == "x") || (state.board[1][0] == "o")) &&
     			    ((state.board[2][0] == "x") || (state.board[2][0] == "o")) &&
     			    ((state.board[0][1] == "x") || (state.board[0][1] == "o")) &&
     			    ((state.board[1][1] == "x") || (state.board[1][1] == "o")) &&
     			    ((state.board[2][1] == "x") || (state.board[2][1] == "o")) &&
     			    ((state.board[0][2] == "x") || (state.board[0][2] == "o")) &&
     			    ((state.board[1][2] == "x") || (state.board[1][2] == "o")) &&
     			    ((state.board[2][2] == "x") || (state.board[2][2] == "o"));
   }


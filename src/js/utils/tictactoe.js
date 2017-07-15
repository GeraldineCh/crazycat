//Variables de inicio
var uno = document.getElementById("casilla1");
var dos = document.getElementById("casilla2");
var tres = document.getElementById("casilla3");
var cuatro = document.getElementById("casilla4");
var cinco = document.getElementById("casilla5");
var seis = document.getElementById("casilla6");
var siete = document.getElementById("casilla7");
var ocho = document.getElementById("casilla8");
var nueve = document.getElementById("casilla9");
var reinicio = document.getElementById("nuevo");
var tablero = document.getElementsByClassName("espacio");
var estado = true;
var contador;

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
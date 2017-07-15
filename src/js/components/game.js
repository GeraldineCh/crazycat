'use strict';

const Game = (update) => {
 const general = $('<div></div>'); 
 const activePlayer = $('<h3>Turno de X </h3>');
 const tablero = $('<div class="tablero"><button type="button" id="casilla1" class="espacio" value="e"/><button type="button" id="casilla2" class="espacio" value="e"/></button><button type="button" id="casilla3" class="espacio" value="e"/></button><br><button type="button" id="casilla4" class="espacio" value="e"/></button><button type="button" id="casilla5" class="espacio" value="e"/></button><button type="button" id="casilla6" class="espacio" value="e"/></button><br><button type="button" id="casilla7" class="espacio" value="e"/></button><button type="button" id="casilla8" class="espacio" value="e"/></button><button type="button" id="casilla9" class="espacio" value="e"/></button><br></div>');
 const player1 = $('<span>Moviemientos X</span>');
 const player2 = $('<span>Moviemientos Y</span>');
 
 const button = $("<button>Mandar al historial</button>");

 
 general.append(activePlayer);
 general.append(tablero);
 general.append(player1);
 general.append(player2);
 general.append(button);
 
  return general;
}

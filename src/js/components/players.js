'use strict';

const Players = _ => {
 const general = $('<div></div>'); 
 const name1 = $('<div>Ingrese el nombre del jugador 1: </div>');
 const dato1 = $('<input placeholder="Juagdor 1" id="first_name" type="text">');
 const name2 = $('<div>Ingrese el nombre del jugador 2: </div>');
 const dato2 = $('<input placeholder="Juagdor 2" id="first_name" type="text">');
 const button = $("<button>Comenzar</button>");
 
 general.append(name1);
 general.append(dato1);
 general.append(name2);
 general.append(dato2);
 general.append(button);

 
 button.on('click', _ => {
    state.players[0].nombre = $('#dato1').val();
    state.active = 1;
    state.players[1].nombre = $('#dato2').val();
    state.actividad = "game";
    state.board = [["e","e","e"],["e","e","e"],["e","e","e"]];
    render($('.root'));
  });
 
  return general;
}

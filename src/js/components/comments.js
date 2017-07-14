'use strict';

const Comments = (update) => {
 const general = $('<div></div>'); 
 const title = $('<h3>Detalles</h3>');
 const button = $("<button>Comenzar nueva partida</button>");
 
 general.append(title);
 general.append(button);

 
 button.on('click', _ => {
        state.url = Begin;
        update();
    });
 
  return general;
}

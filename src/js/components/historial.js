'use strict';

const Historial = (update) => {
 const general = $('<div></div>'); 
 const title = $('<h3>Historial</h3>');
 const button = $("<button>Comenzar</button>");
 
 general.append(title);
 general.append(button);

 
 button.on('click', _ => {
        state.url = Comments;
        update();
    });
 
  return general;
}

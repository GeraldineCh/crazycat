'use strict';

const Begin = (update) => {
  const header = $("<header></header>");
  /*const link1 = $("<a href="">Inicio</a>");
 const link2 = $("<a href="">Historial</a>");*/
 const separator = $("<span> | </span>");
 const line = $("<span>Gato Loco</span>");
  const title = $("<h3>Gato Loco</h3>");
  const button = $("<button>Iniciar juego</button>");

 /*line.append(link1);
 line.append(link2);*/
 line.append(separator);
 header.append(title);
 header.append(button);
 
 button.on('click', _ => {
        state.url = Players;
        update();
    });
 
  return header;
}

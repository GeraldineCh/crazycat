'use strict';

const Begin = _ => {
  const header = $("<header></header>");
 const separator = $("<span>Inicio | Historial</span>");
 const line = $("<span></span>");
  const title = $("<h3>Bienvenido a Gato Loco</h3>");
  const button = $("<button>Iniciar juego</button>");

 line.append(separator);
 header.append(line);
 header.append(title);
 header.append(button);
 
 button.on('click', _ => {
        state.actividad = "registro";
        render($('.root'));
    });
 
  return header;
}

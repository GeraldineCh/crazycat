'use strict';
const state = {
  actividad: null,
  players: [{ingreso:1, nombre: null, juego: "X", movimientos:0},
            {ingreso:2, nombre: null, juego: "O", movimientos:0}],
  active: null,
  board : null,
  win: null
}

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  switch (state.actividad) {
    case null:
    wrapper.append(Begin());
      break;
    case "registro":
    wrapper.append(Players());
      break;
    case "game":
    wrapper.append(Game());
      break;
    case "historial":
    wrapper.append(Historial());
      break;
    default:
    wrapper.append(Begin());
  }
  root.append(wrapper);
}

$( _ => {
  render($('.root'));
});

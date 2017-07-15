'use strict';

const Historial = _ => {
 const general = $('<div></div>'); 
 const title = $('<h3>Historial</h3>');
 
 general.append(title);
  return general;
}


const Partidas = (juegos) =>{
  const games = $('<div class="games"></div>');
  $.each(juegos, (index, game) => {
    games.append(GameItem(game));
  });
  return games;
}

const GameItem = (data) => {
  let text = data.winner_player + " le gano a " + data.loser_player + " en " + data.number_of_turns_to_win + " movimientos";
  const gameItem= $('<div class="center"></div>');
  const result= $('<p class="center-align">' + text +'</p>');
  const add_comment= $('<a href="#newComment">Comentar</a>');

  gameItem.append(result);
  gameItem.append(add_comment);

  return gameItem;
}
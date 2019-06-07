import { DOMNode } from "../utilities/utilities.js";
import { hideText } from "./text.js";
import { Game } from "../../games/vanilla-js-game/game.js";

export function playGameSimulation() {
  hideText();
  // call new game with increase ball speed
  new Game("game-one-bricks", "bricks", "blue", 2.2);
  new Game("game-two-bricks", "bricks", "red", 4.0);
  new Game("game-three-bricks", "bricks", "green", 2.4);
  new Game("game-four-bricks", "bricks", "yellow", 5);
  document.getElementsByTagName("body")[0].classList.add("darken");

  let count = 0;
  function changeColour() {
    cycleThroughBoardColours(count);
    if (count === 100) {
      clearInterval(to);
    }
    count++;
  }
  var to = setInterval(changeColour, 1000);
}
function cycleThroughBoardColours(count) {
  switch (count % 4) {
    case 0:
      changeTopGame("game-one", "game-two", count);
      break;
    case 1:
      changeTopGame("game-two", "game-three");
      break;
    case 2:
      changeTopGame("game-three", "game-four");
      break;
    case 3:
      changeTopGame("game-four", "game-one");
      break;
    default:
      return;
  }
}

function changeTopGame(currentTopGameId, newTopGameId, count) {
  const currentTopGameElement = DOMNode(currentTopGameId);
  const newTopGameElement = DOMNode(newTopGameId);
  setTimeout(() => {
    currentTopGameElement.classList.remove("top-game");
    newTopGameElement.classList.add("top-game");
  }, 2000);
}

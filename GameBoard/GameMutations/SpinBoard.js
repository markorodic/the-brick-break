import { DOMNode } from "../Utilities/Utilities.js";
import { hideText } from "./Text.js";
import { Game } from "../../Games/vanilla-js-game/Game.js";

export function playGameSimulation() {
  hideText();

  // call new game with increase ball speed
  new Game("game-one-bricks", "bricks", "blue", 1);
  new Game("game-two-bricks", "bricks", "red", 1);
  new Game("game-three-bricks", "bricks", "green", 1);
  new Game("game-four-bricks", "bricks", "yellow", 1);

  let count = 0;
  function changeColour() {
    count++;
    cycleThroughBoardColours(count);
    if (count === 100) {
      clearInterval(to);
    }
  }
  var to = setInterval(changeColour, 500);

  //   setTimeout(() => {
  //     spinGameBoardButton.classList.add("increase-spin");
  //   }, 2000);
  // let count = 0;
  // while (count < 50) {
  //   setTimeout(() => {
  //     changeBoardColours(count);
  //     count++;
  //   }, 500);
}
function cycleThroughBoardColours(count) {
  switch (count % 4) {
    case 0:
      changeTopGame("game-one", "game-two");
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

function changeTopGame(currentTopGameId, newTopGameId) {
  const currentTopGameElement = DOMNode(currentTopGameId);
  const newTopGameElement = DOMNode(newTopGameId);
  setTimeout(() => {
    currentTopGameElement.classList.remove("top-game");
    newTopGameElement.classList.add("top-game");
  }, 1700);
}

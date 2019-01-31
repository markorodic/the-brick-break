import { DOMNode } from "../Utilities/Utilities.js";
import { hideText } from "./Text.js";

export function playGameSimulation() {
  hideText();
  cycleThroughBoardColours();

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
function cycleThroughBoardColours() {
  let count = 0;
  while (count < 100) {
    switch (count % 3) {
      case 0:
        // change the top game to 2
        console.log(0);
        break;
      case 1:
        // change the top game to 3
        console.log(1);
        break;
      case 2:
        // change the top game to 4
        console.log(2);
        break;
      case 3:
        // change the top game to 1
        console.log(3);
        break;
      default:
        return;
    }
    count++;
  }
}

changeTopGame("game-one", "game-two");

changeTopGame("game-two", "game-three");

changeTopGame("game-three", "game-four");

changeTopGame("game-four", "game-one");

function changeTopGame(currentTopGameId, newTopGameId) {
  const currentTopGameElement = DOMNode(currentTopGameId);
  const newTopGameElement = DOMNode(newTopGameId);
  setTimeout(() => {
    currentTopGameElement.classList.remove("top-game");
    newTopGameElement.classList.add("top-game");
  }, 1700);
}

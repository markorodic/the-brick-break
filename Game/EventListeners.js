import {
  gameRotateBoard,
  gameIsolateGameBodies
} from "./GameMutations/GameMutations.js";
import { DOMNode } from "./Utilities/Utilities.js";
import { Game } from "../vanilla-js-game/js/Game.js";
import { game } from "../functional-js-game/js/Game.js";

// export function onDocumentLoaded() {
//   if (
//     document.attachEvent
//       ? document.readyState === "complete"
//       : document.readyState !== "loading"
//   ) {
//     registerEventListeners();
//   } else {
//     document.addEventListener("DOMContentLoaded", registerViewEventListeners);
//   }
// }

window.onload = function() {
  new Game("game-one-bricks", "bricks", "blue", 0.5);
  new Game("game-one-ball", "ball", "blue", 0.5);
  new Game("game-one-paddle", "paddle", "blue", 0.5);
  game("game-two-bricks", "bricks");
  game("game-two-ball", "ball");
  game("game-two-paddle", "paddle");
};

export function registerEventListeners() {
  const separateViewButton = DOMNode("separate-view-button");
  addEventListenerOnClick(separateViewButton, gameIsolateGameBodies);
  const rotateGameBoardButton = DOMNode("rotate-game-board-button");
  addEventListenerOnClick(rotateGameBoardButton, gameRotateBoard);
}

function addEventListenerOnClick(element, callBack) {
  element.addEventListener("click", callBack);
}

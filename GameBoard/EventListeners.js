import {
  gameRotateBoard,
  gameIsolateGameBodies,
  gamePlayGameSimulation
} from "./GameMutations/GameMutations.js";
import { DOMNode } from "./Utilities/Utilities.js";
import { Game } from "../Games/vanilla-js-game/Game.js";
import { game } from "../Games/functional-js-game/Game.js";

window.onload = function() {
  // Move this elsewhere
  new Game("game-one-bricks", "bricks", "blue", 0.5);
  new Game("game-one-ball", "ball", "blue", 0.5);
  new Game("game-one-paddle", "paddle", "blue", 0.5);
  game("game-two-bricks", "bricks");
  game("game-two-ball", "ball");
  game("game-two-paddle", "paddle");
  new Game("game-three-bricks", "bricks", "green", 0.5);
  new Game("game-three-ball", "ball", "green", 0.5);
  new Game("game-three-paddle", "paddle", "green", 0.5);
};

export function registerEventListeners() {
  // Move domnode inside addeventlister
  const separateViewButton = DOMNode("separate-view-button");
  addEventListenerOnClick(separateViewButton, gameIsolateGameBodies);
  const rotateGameBoardButton = DOMNode("rotate-game-board-button");
  addEventListenerOnClick(rotateGameBoardButton, gameRotateBoard);
  const spinGameBoardButton = DOMNode("play-game-board-button");
  addEventListenerOnClick(spinGameBoardButton, gamePlayGameSimulation);
}

function addEventListenerOnClick(element, callBack) {
  element.addEventListener("click", callBack);
}

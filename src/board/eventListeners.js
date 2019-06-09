import { gameRotateBoard } from "./animations/animations.js";
import { DOMNode } from "./utilities/utilities.js";
import { Game as VanillaGame } from "../games/vanilla-js-game/game.js";

window.onload = function() {
  // Move this elsewhere
  new VanillaGame("game-one-canvas", "blue", 1.1);
  new VanillaGame("game-two-canvas", "red", 3);
  new VanillaGame("game-three-canvas", "green", 1);
  new VanillaGame("game-four-canvas", "yellow", 7.4);
};

export function registerEventListeners() {
  const gameBoardButton = DOMNode("game-board");
  addEventListenerOnClick(gameBoardButton, gameRotateBoard);
}

function addEventListenerOnClick(element, callBack) {
  element.addEventListener("click", callBack);
}

import {
  gameRotateBoard,
  gameIsolateGameBodies,
  gamePlayGameSimulation
} from "./animations/animations.js";
import { DOMNode } from "./utilities/utilities.js";
import { Game } from "../games/vanilla-js-game/game.js";

let vanillaGameOne;
let vanillaGameTwo;
let vanillaGameThree;
let functionalGameOne;
let functionalGameTwo;
let functionalGameThree;
let es6GameOne;
let es6GameTwo;
let es6GameThree;
let elmGameOne;
let elmGameTwo;
let elmGameThree;

window.onload = function() {
  // Move this elsewhere
  vanillaGameOne = new Game("game-one-bricks", "bricks", "blue", 1.1);
  vanillaGameTwo = new Game("game-one-ball", "ball", "blue", 1.1);
  vanillaGameThree = new Game("game-one-paddle", "paddle", "blue", 1.1);
  functionalGameOne = new Game("game-two-bricks", "bricks", "red", 2.0);
  functionalGameTwo = new Game("game-two-ball", "ball", "red", 2.0);
  functionalGameThree = new Game("game-two-paddle", "paddle", "red", 2.0);
  es6GameOne = new Game("game-three-bricks", "bricks", "green", 1.2);
  es6GameTwo = new Game("game-three-ball", "ball", "green", 1.2);
  es6GameThree = new Game("game-three-paddle", "paddle", "green", 1.2);
  elmGameOne = new Game("game-four-bricks", "bricks", "yellow", 2.5);
  elmGameTwo = new Game("game-four-ball", "ball", "yellow", 2.5);
  elmGameThree = new Game("game-four-paddle", "paddle", "yellow", 2.5);
};

export function registerEventListeners() {
  // Move domnode inside addeventlister
  const separateViewButton = DOMNode("separate-view-button");
  addEventListenerOnClick(separateViewButton, gameIsolateGameBodies);
  const rotateGameBoardButton = DOMNode("rotate-game-board-button");
  addEventListenerOnClick(rotateGameBoardButton, gameRotateBoard);
  const spinGameBoardButton = DOMNode("play-game-board-button");
  addEventListenerOnClick(spinGameBoardButton, gamePlayGameSimulation);
  addEventListenerOnClick(spinGameBoardButton, pauseCurrentGames);
}

function pauseCurrentGames() {
  vanillaGameOne.stopGame();
  vanillaGameTwo.stopGame();
  vanillaGameThree.stopGame();
  functionalGameOne.stopGame();
  functionalGameTwo.stopGame();
  functionalGameThree.stopGame();
  es6GameOne.stopGame();
  es6GameTwo.stopGame();
  es6GameThree.stopGame();
  elmGameOne.stopGame();
  elmGameTwo.stopGame();
  elmGameThree.stopGame();
}

function addEventListenerOnClick(element, callBack) {
  element.addEventListener("click", callBack);
}

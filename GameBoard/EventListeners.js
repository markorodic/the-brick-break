import {
  gameRotateBoard,
  gameIsolateGameBodies,
  gamePlayGameSimulation
} from "./GameMutations/GameMutations.js";
import { DOMNode } from "./Utilities/Utilities.js";
import { Game } from "../Games/vanilla-js-game/Game.js";
import { game } from "../Games/functional-js-game/Game.js";

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
  vanillaGameOne = new Game("game-one-bricks", "bricks", "blue", 0.5);
  vanillaGameTwo = new Game("game-one-ball", "ball", "blue", 0.5);
  vanillaGameThree = new Game("game-one-paddle", "paddle", "blue", 0.5);
  functionalGameOne = new Game("game-two-bricks", "bricks", "red", 0.5);
  functionalGameTwo = new Game("game-two-ball", "ball", "red", 0.5);
  functionalGameThree = new Game("game-two-paddle", "paddle", "red", 0.5);
  es6GameOne = new Game("game-three-bricks", "bricks", "green", 0.5);
  es6GameTwo = new Game("game-three-ball", "ball", "green", 0.5);
  es6GameThree = new Game("game-three-paddle", "paddle", "green", 0.5);
  elmGameOne = new Game("game-four-bricks", "bricks", "yellow", 0.5);
  elmGameTwo = new Game("game-four-ball", "ball", "yellow", 0.5);
  elmGameThree = new Game("game-four-paddle", "paddle", "yellow", 0.5);
};

export function registerEventListeners() {
  // Move domnode inside addeventlister
  // const separateViewButton = DOMNode("separate-view-button");
  // addEventListenerOnClick(separateViewButton, gameIsolateGameBodies);
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

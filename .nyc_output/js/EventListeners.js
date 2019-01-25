import {
  gameRotateBoard,
  gameIsolateGameBodies
} from "./GameMutations/GameMutations.js";
import { DOMNode } from "./Utilities/Utilities.js";

export function onDocumentLoaded() {
  if (
    document.attachEvent
      ? document.readyState === "complete"
      : document.readyState !== "loading"
  ) {
    registerEventListeners();
  } else {
    document.addEventListener("DOMContentLoaded", registerViewEventListeners);
  }
}

function registerEventListeners() {
  const separateViewButton = DOMNode("separate-view-button");
  addEventListenerOnClick(separateViewButton, gameIsolateGameBodies);
  const rotateGameBoardButton = DOMNode("rotate-game-board-button");
  addEventListenerOnClick(rotateGameBoardButton, gameRotateBoard);
}

function addEventListenerOnClick(element, callBack) {
  element.addEventListener("click", callBack);
}

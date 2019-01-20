import { rotateBoard, changeGameBodyView } from "./Game.js";

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
  const separateViewButton = document.getElementById("separate-view-button");
  addEventListenerOnClick(separateViewButton, changeGameBodyView);
  const rotateGameBoardButton = document.getElementById(
    "rotate-game-board-button"
  );
  addEventListenerOnClick(rotateGameBoardButton, rotateBoard);
}

function addEventListenerOnClick(element, callBack) {
  element.addEventListener("click", callBack);
}

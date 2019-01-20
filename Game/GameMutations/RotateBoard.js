import { flashText } from "./Text.js";
import {
  addClass,
  removeClass,
  replaceClass,
  DOMNode
} from "../Utilities/Utilities.js";

export function rotateBoard() {
  let rotationClasses = {
    first: "first-game",
    second: "second-game",
    third: "third-game",
    fourth: "fourth-game"
  };

  function changeClassToGame(boardElement, boardClassName) {
    switch (boardClassName) {
      case "first-game":
        replaceClass(
          boardElement,
          rotationClasses.first,
          rotationClasses.second
        );
        changeTopGame("game-one", "game-two");
        changeTextClass("show-text", "text-two");
        break;
      case "second-game":
        replaceClass(
          boardElement,
          rotationClasses.second,
          rotationClasses.third
        );
        changeTopGame("game-two", "game-three");
        changeTextClass("show-text", "text-three");
        break;
      case "third-game":
        replaceClass(
          boardElement,
          rotationClasses.third,
          rotationClasses.fourth
        );
        changeTopGame("game-three", "game-four");
        changeTextClass("show-text", "text-four");
        break;
      case "fourth-game":
        replaceClass(
          boardElement,
          rotationClasses.fourth,
          rotationClasses.first
        );
        changeTopGame("game-four", "game-one");
        changeTextClass("show-text", "text-one");
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

  function changeTextClass(removeClassName, addClassName) {
    const currentTextToHide = document.getElementsByClassName(
      removeClassName
    )[0];
    const newTextToShow = document.getElementsByClassName(addClassName)[0];

    setTimeout(() => {
      currentTextToHide.classList.remove(removeClassName);
      newTextToShow.classList.add(removeClassName);
    }, 1000);
  }

  function rotateBoard() {
    const boardElement = DOMNode("game-board");
    const boardElementClass = boardElement.className;

    changeClassToGame(boardElement, boardElementClass);
  }

  flashText();
  rotateBoard();
}

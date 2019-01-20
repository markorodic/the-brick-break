import { state } from "./State.js";
import { onDocumentLoaded } from "./EventListeners.js";
import { flashText } from "./Animations/Text.js";

const State = state();
onDocumentLoaded();

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
        changeBoardClass(
          boardElement,
          rotationClasses.first,
          rotationClasses.second
        );
        changeTopGame("game-one", "game-two");
        changeTextClass("show-text", "text-two");
        break;
      case "second-game":
        changeBoardClass(
          boardElement,
          rotationClasses.second,
          rotationClasses.third
        );
        changeTopGame("game-two", "game-three");
        changeTextClass("show-text", "text-three");
        break;
      case "third-game":
        changeBoardClass(
          boardElement,
          rotationClasses.third,
          rotationClasses.fourth
        );
        changeTopGame("game-three", "game-four");
        changeTextClass("show-text", "text-four");
        break;
      case "fourth-game":
        changeBoardClass(
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
    const currentTopGameElement = document.getElementById(currentTopGameId);
    const newTopGameElement = document.getElementById(newTopGameId);
    setTimeout(() => {
      currentTopGameElement.classList.remove("top-game");
      newTopGameElement.classList.add("top-game");
    }, 1700);
  }

  function addClass(element, newClass) {
    element.classList.add(newClass);
  }

  function removeClass(element, newClass) {
    element.classList.remove(newClass);
  }

  function changeBoardClass(boardElement, removeClassName, addClassName) {
    addClass(boardElement, addClassName);
    removeClass(boardElement, removeClassName);
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
    const boardElement = document.getElementById("game-board");
    const boardElementClass = boardElement.className;

    changeClassToGame(boardElement, boardElementClass);
  }

  flashText();
  rotateBoard();
}

export function changeGameBodyView() {
  const brickGame = document.getElementById("game-one-bricks");
  const ballGame = document.getElementById("game-one-ball");
  const paddleGame = document.getElementById("game-one-paddle");
  const gameState = State.getState();
  if (gameState.separated) {
    brickGame.classList.remove("separate");
    ballGame.classList.remove("separate");
    paddleGame.classList.remove("separate");
    State.setState("separated", false);
  } else {
    brickGame.classList.add("separate");
    ballGame.classList.add("separate");
    paddleGame.classList.add("separate");
    State.setState("separated", true);
  }
}

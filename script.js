gameState = {
  separated: false
};

function switchBoard() {
  let rotationClasses = {
    first: "first-game",
    second: "second-game",
    third: "third-game",
    fourth: "fourth-game"
  };

  function flashText() {
    const buttonElement = document.getElementsByClassName(
      "button-container"
    )[0];
    const subtextElement = document.getElementsByClassName(
      "information-container"
    )[0];
    addFlashClass(buttonElement, subtextElement);

    setTimeout(() => {
      removeFlashClass(buttonElement, subtextElement);
    }, 1500);
  }

  function addFlashClass(button, text) {
    button.classList.add("flash");
    text.classList.add("flash");
  }

  function removeFlashClass(button, text) {
    button.classList.remove("flash");
    text.classList.remove("flash");
  }

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

  function changeBoardClass(boardElement, removeClassName, addClassName) {
    boardElement.classList.remove(removeClassName);
    boardElement.classList.add(addClassName);
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

function separateGameBodies() {
  const brickGame = document.getElementById("game-one-bricks");
  const ballGame = document.getElementById("game-one-ball");
  const paddleGame = document.getElementById("game-one-paddle");
  if (gameState.separated) {
    brickGame.classList.remove("separate");
    ballGame.classList.remove("separate");
    paddleGame.classList.remove("separate");
    gameState.separated = false;
  } else {
    brickGame.classList.add("separate");
    ballGame.classList.add("separate");
    paddleGame.classList.add("separate");
    gameState.separated = true;
  }
}

// document.getElementsByClassName('.switch-button').addEventListener("click", () => {
//     document.getElementsByClassName('.button-container').classList.add("flash");
//     document.getElementsByClassName('.subtext-container').classList.add("flash");

//     setTimeout(() => {
//         document.getElementsByClassName('.game-board').classList.add("second");
//     }, 200)

//     setTimeout(() => {
//         document.getElementsByClassName('.button-container').classList.add("flash");
//         document.getElementsByClassName('.subtext-container').classList.add("flash");
//     }, 200)
// });

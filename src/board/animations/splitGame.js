import { State } from "../state.js";
import { DOMNode } from "../utilities/utilities.js";

export function isolateGameBodies() {
  const isSeparated = State.getState().separated;
  if (isSeparated) {
    const currentGame = State.getState().currentGame;
    const gameClassNames = getGameClassNames(currentGame);
    gameClassNames.bricks.classList.remove("separate");
    gameClassNames.ball.classList.remove("separate");
    gameClassNames.paddle.classList.remove("separate");
    State.setState("separated", false);
    showAllGames();
  } else {
    const currentGame = State.getState().currentGame;
    const gameClassNames = getGameClassNames(currentGame);

    hideAllGamesExcept(currentGame);
    gameClassNames.bricks.classList.add("separate");
    gameClassNames.ball.classList.add("separate");
    gameClassNames.paddle.classList.add("separate");
    State.setState("separated", true);
  }
}

function hideAllGamesExcept(game) {
  switch (game) {
    case 1:
      hideGame(2);
      hideGame(3);
      hideGame(4);
      break;
    case 2:
      hideGame(1);
      hideGame(3);
      hideGame(4);
      break;
    case 3:
      hideGame(1);
      hideGame(2);
      hideGame(4);
      break;
    case 4:
      hideGame(1);
      hideGame(2);
      hideGame(3);
      break;
  }
}

function hideGame(game) {
  switch (game) {
    case 1:
      const gameOneContainer = DOMNode("game-one");
      gameOneContainer.classList.add("hide");
    case 2:
      const gameTwoContainer = DOMNode("game-two");
      gameTwoContainer.classList.add("hide");
    case 3:
      const gameThreeContainer = DOMNode("game-three");
      gameThreeContainer.classList.add("hide");
    case 4:
      const gameFourContainer = DOMNode("game-four");
      gameFourContainer.classList.add("hide");
  }
}

function showAllGames() {
  const gameOneContainer = DOMNode("game-one");
  gameOneContainer.classList.remove("hide");
  const gameTwoContainer = DOMNode("game-two");
  gameTwoContainer.classList.remove("hide");
  const gameThreeContainer = DOMNode("game-three");
  gameThreeContainer.classList.remove("hide");
  const gameFourContainer = DOMNode("game-four");
  gameFourContainer.classList.remove("hide");
}

function getGameClassNames(game) {
  switch (game) {
    case 1:
      return {
        bricks: DOMNode("game-one-bricks"),
        ball: DOMNode("game-one-ball"),
        paddle: DOMNode("game-one-paddle")
      };
    case 2:
      return {
        bricks: DOMNode("game-two-bricks"),
        ball: DOMNode("game-two-ball"),
        paddle: DOMNode("game-two-paddle")
      };
    case 3:
      return {
        bricks: DOMNode("game-three-bricks"),
        ball: DOMNode("game-three-ball"),
        paddle: DOMNode("game-three-paddle")
      };
    case 4:
      return {
        bricks: DOMNode("game-four-bricks"),
        ball: DOMNode("game-four-ball"),
        paddle: DOMNode("game-four-paddle")
      };
  }
}

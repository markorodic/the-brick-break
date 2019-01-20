import { State } from "../State.js";
import { DOMNode } from "../Utilities/Utilities.js";

export function isolateGameBodies() {
  // const brickGame = DOMNode("game-one-bricks");
  // const ballGame = DOMNode("game-one-ball");
  // const paddleGame = DOMNode("game-one-paddle");
  const gameClassNames = getGameClassNames();
  const gameState = State.getState();

  if (gameState.separated) {
    gameClassNames.bricks.classList.remove("separate");
    gameClassNames.ball.classList.remove("separate");
    gameClassNames.paddle.classList.remove("separate");
    State.setState("separated", false);
  } else {
    gameClassNames.bricks.classList.add("separate");
    gameClassNames.ball.classList.add("separate");
    gameClassNames.paddle.classList.add("separate");
    State.setState("separated", true);
  }
}

function getGameClassNames() {
  const currentGame = State.getState().currentGame;
  switch (currentGame) {
    case 1:
      return {
        bricks: DOMNode("game-one-bricks"),
        ball: DOMNode("game-one-ball"),
        paddle: DOMNode("game-one-paddle")
      };
    case 2:
      return {
        bricks: "game-two-bricks",
        ball: "game-two-ball",
        paddle: "game-two-paddle"
      };
    case 3:
      return {
        bricks: "game-three-bricks",
        ball: "game-three-ball",
        paddle: "game-three-paddle"
      };
    case 4:
      return {
        bricks: "game-four-bricks",
        ball: "game-four-ball",
        paddle: "game-four-paddle"
      };
  }
}

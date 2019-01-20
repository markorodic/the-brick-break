import { State } from "../State.js";
import { DOMNode } from "../Utilities/Utilities.js";

export function isolateGameBodies() {
  const brickGame = DOMNode("game-one-bricks");
  const ballGame = DOMNode("game-one-ball");
  const paddleGame = DOMNode("game-one-paddle");
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

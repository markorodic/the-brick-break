import { State } from "../State.js";

export function isolateGameBodies() {
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

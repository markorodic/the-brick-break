import { ballFalls, ballHitsBrick } from "./Collisions.js";
import { iterationCounterUpdate } from "./Game.js";

export function updateGame(state, canvas) {
  iterationCounterUpdate.startCalc("functional update");
  const {
    lives,
    score,
    ball,
    bricks,
    ballPosition,
    ballDiameter,
    brickSize,
    gameMode
  } = state;
  let newState = { ...state };

  if (lives == 0) {
    newState.gameMode = "gameOver";
  }
  if (ballFalls(ballPosition, canvas)) {
    newState.lives -= 1;
  }
  if (ballHitsBrick(ballPosition, bricks)) {
    newState.score += 1;
  }
  iterationCounterUpdate.endCalc("functional update");
  return newState;
}

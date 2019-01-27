import { ballFalls, ballHitsBrick } from "./Collisions.js";

export function updateGame(state, canvas) {
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

  return newState;
}

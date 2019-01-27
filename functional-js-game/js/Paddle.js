import { CONSTANTS } from "./Constants.js";

export function updatePaddle(state, canvas) {
  const { paddlePositionX } = state;
  const newState = { ...state };

  const paddleCanMoveLeft =
    state.ballPosition.x - CONSTANTS.PADDLE.SIZE.width / 2 > 1;
  const paddleCanMoveRight =
    state.ballPosition.x < canvas.width - CONSTANTS.PADDLE.SIZE.width / 2;

  console.log(paddleCanMoveLeft);
  if (paddleCanMoveLeft && paddleCanMoveRight) {
    newState.paddlePositionX =
      state.ballPosition.x - CONSTANTS.PADDLE.SIZE.width / 2;
  }

  return newState;
}

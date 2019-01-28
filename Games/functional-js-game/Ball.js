import { iterationCounterBall } from "./Game.js";

export function updateBall(state, canvas) {
  iterationCounterBall.startCalc("functional update ball");
  let newState = { ...state };
  const { ballPosition, ballVelocity } = state;

  newState.ballPosition.x = ballPosition.x + ballVelocity.x;
  newState.ballPosition.y = ballPosition.y + ballVelocity.y;

  iterationCounterBall.endCalc("functional update ball");

  return newState;
}

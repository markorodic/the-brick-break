export function updateBall(state, canvas) {
  let newState = { ...state };
  const { ballPosition, ballVelocity } = state;

  newState.ballPosition.x = ballPosition.x + ballVelocity.x;
  newState.ballPosition.y = ballPosition.y + ballVelocity.y;

  return newState;
}

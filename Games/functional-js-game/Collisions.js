import { CONSTANTS } from "./Constants.js";
import { filterBricks } from "./Bricks.js";

export function collisionDetection(state, canvas) {
  const { ballPosition, ballVelocity, paddlePositionX, bricks } = state;
  const newState = {
    ...state,
    ballPosition: { x: state.ballPosition.x, y: state.ballPosition.y },
    ballVelocity: { x: state.ballVelocity.x, y: state.ballVelocity.y }
  };

  if (ballHitsWall(ballPosition, canvas)) {
    newState.ballVelocity.x = -ballVelocity.x;
  }
  if (ballHitsCeiling(ballPosition)) {
    newState.ballVelocity.y = -ballVelocity.y;
  }
  if (ballHitsPaddle(ballPosition, paddlePositionX, canvas)) {
    newState.ballVelocity.y = -ballVelocity.y;
  }
  if (ballFalls(ballPosition, canvas)) {
    (newState.ballPosition = { x: 193, y: 282 }),
      (newState.ballVelocity = { x: 0, y: 0 });
  }
  if (ballHitsBrick(ballPosition, bricks)) {
    filterBricks(newState);
    newState.ballVelocity.y = -ballVelocity.y;
  }
  return newState;
}

export function ballFalls(ballPosition, canvas) {
  return ballPosition.y >= canvas.height;
}

function ballHitsWall(ballPosition, canvas) {
  const ballBeyondGameSidesBounds =
    ballPosition.x < 0 ||
    ballPosition.x + CONSTANTS.BALL.DIAMETER > canvas.width;

  return ballBeyondGameSidesBounds;
}

function ballHitsCeiling(ballPosition) {
  return ballPosition.y < 70;
}

function ballHitsPaddle(ballPosition, paddlePositionX, canvas) {
  const ballIsbetweenPaddleEdges =
    ballPosition.x > paddlePositionX &&
    ballPosition.x < paddlePositionX + CONSTANTS.PADDLE.SIZE.width;
  const ballHitsPaddleTop =
    ballPosition.y + CONSTANTS.BALL.DIAMETER >= canvas.height;

  return ballHitsPaddleTop && ballIsbetweenPaddleEdges;
}

export function ballHitsBrick(ballPosition, bricks) {
  let hitBrick = bricks.filter(function(brick) {
    return ballHitsABrick(ballPosition, brick);
  });
  return hitBrick[0];
}

export function ballHitsABrick(ballPosition, brick) {
  const ballCenterX = ballPosition.x + CONSTANTS.BALL.DIAMETER / 2;
  const ballCenterY = ballPosition.y + CONSTANTS.BALL.DIAMETER / 2;
  const ballIsBeneathBrickTop = ballCenterY > brick.y;
  const ballIsAboveBrickBottom = ballCenterY < brick.y + CONSTANTS.BRICK.SIZE.y;
  const ballIsbetweenBrickSides =
    ballCenterX > brick.x && ballCenterX < brick.x + CONSTANTS.BRICK.SIZE.x;

  return (
    ballIsbetweenBrickSides && ballIsBeneathBrickTop && ballIsAboveBrickBottom
  );
}

import { CONSTANTS } from "./Constants.js";
import { getData } from "./fps.js";

export function draw(state, canvas, ctx) {
  [drawBall, drawPaddle, drawBricks, drawStats].forEach(function(drawFunction) {
    drawFunction({ state, ctx });
  });
  return state;
}

function drawBall({ state, ctx }) {
  const { ballPosition } = state;

  ctx.fillStyle = "#C6494B";
  ctx.fillRect(
    ballPosition.x,
    ballPosition.y,
    CONSTANTS.BALL.DIAMETER,
    CONSTANTS.BALL.DIAMETER
  );
}

function drawBricks({ state, ctx }) {
  state.bricks.forEach(function(brick) {
    ctx.fillStyle = brick.colour;
    ctx.fillRect(
      brick.x,
      brick.y,
      CONSTANTS.BRICK.SIZE.x,
      CONSTANTS.BRICK.SIZE.y
    );
  });
}

function drawPaddle({ state, ctx }) {
  const { paddlePositionX } = state;

  ctx.fillStyle = "#C6494B";
  ctx.fillRect(
    paddlePositionX,
    564,
    CONSTANTS.PADDLE.SIZE.width,
    CONSTANTS.PADDLE.SIZE.height
  );
}

function drawStats({ state, ctx }) {
  console.log(getData(state));
}

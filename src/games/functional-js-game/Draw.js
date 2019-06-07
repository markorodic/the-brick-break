import { CONSTANTS } from "./Constants.js";

export function draw(state, canvas, ctx) {
  [drawBall, drawPaddle, drawBricks].forEach(function(drawFunction) {
    drawFunction({ state, ctx });
  });
  return state;
}

function drawBall({ state, ctx }) {
  const { ballPosition } = state;

  ctx.fillStyle = "#CB66A7";
  ctx.fillRect(
    ballPosition.x,
    ballPosition.y,
    CONSTANTS.BALL.DIAMETER,
    CONSTANTS.BALL.DIAMETER
  );
}

function drawBricks({ state, ctx }) {
  if (state.body === "bricks") {
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
}

function drawPaddle({ state, ctx }) {
  const { paddlePositionX } = state;

  ctx.fillStyle = "#CB66A7";
  ctx.fillRect(
    paddlePositionX,
    500 - CONSTANTS.PADDLE.SIZE.height,
    CONSTANTS.PADDLE.SIZE.width,
    CONSTANTS.PADDLE.SIZE.height
  );
}

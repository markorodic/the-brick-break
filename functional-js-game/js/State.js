import { initBricks } from "./Bricks.js";

export const initialState = {
  score: 0,
  lives: 3,
  ballPosition: { x: 193, y: 282 },
  ballVelocity: { x: -1, y: 1 },
  paddlePositionX: 166,
  bricks: initBricks(),
  gameMode: "start",
  frames: [],
  lastFrameTimeStamp: performance.now()
};

import { initBricks } from "./Bricks.js";
import { IterationCounter } from "../IterationCounter.js";

export const initialState = {
  score: 0,
  lives: 3,
  ballPosition: { x: 250, y: 479 },
  ballVelocity: { x: -1, y: 1 },
  paddlePositionX: 250,
  bricks: initBricks(),
  gameMode: "start",
  frames: [],
  iterationCounter: new IterationCounter()
};

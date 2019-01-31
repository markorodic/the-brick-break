import { initialState } from "./State.js";
import { draw } from "./Draw.js";
import { update } from "./Update3.js";
import { collisionDetection } from "./Collisions.js";
import { IterationCounter } from "../../GameBoard/Counters/IterationCounter.js";
import { FramesPerSecondCounter } from "../../GameBoard/Counters/FramesPerSecond.js";

export function game(canvasId, body) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");
  const state = { ...initialState, body };

  playGame(state, canvas, ctx);
}

export const framesPerSecondCounter = new FramesPerSecondCounter();
export const iterationCounterLoop = new IterationCounter();
export const iterationCounterUpdate = new IterationCounter();
export const iterationCounterBall = new IterationCounter();
export let fpsCount = 0;

function playGame(state, canvas, ctx) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const newState = gameLoop(state, canvas, ctx);

  window.requestAnimationFrame(function() {
    playGame(newState, canvas, ctx);
  });
}

function gameLoop(state, canvas, ctx) {
  iterationCounterLoop.startCalc("functional");
  framesPerSecondCounter.calcData("functional");
  const newState = [state, draw, update, collisionDetection].reduce(function(
    currentState,
    updateFunction
  ) {
    return updateFunction(currentState, canvas, ctx);
  });
  iterationCounterLoop.endCalc("functional");
  return newState;
}
import { initialState } from "./State.js";
import { draw } from "./Draw.js";
import { update } from "./Update3.js";
import { collisionDetection } from "./Collisions.js";

export function game(canvasId) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");
  const state = { ...initialState };

  playGame(state, canvas, ctx);
}

function playGame(state, canvas, ctx) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const newState = gameLoop(state, canvas, ctx);

  window.requestAnimationFrame(function() {
    playGame(newState, canvas, ctx);
  });
}

function gameLoop(state, canvas, ctx) {
  const newState = [state, draw, update, collisionDetection].reduce(function(
    currentState,
    updateFunction
  ) {
    return updateFunction(currentState, canvas, ctx);
  });
  return newState;
}

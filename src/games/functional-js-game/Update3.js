import { updateBall } from "./ball.js";
import { updatePaddle } from "./paddle.js";
import { updateGame } from "./update.js";

export function update(state, canvas) {
  const newState = [state, updateBall, updatePaddle, updateGame].reduce(
    function(currentState, updateFunction) {
      return updateFunction(currentState, canvas);
    }
  );

  return newState;
}

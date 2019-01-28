import { updateBall } from "./ball.js";
import { updatePaddle } from "./paddle.js";
import { updateGame } from "./update.js";
import { iterationCounterUpdate } from "./Game.js";

export function update(state, canvas) {
  iterationCounterUpdate.startCalc("functional update");

  const newState = [state, updateBall, updatePaddle, updateGame].reduce(
    function(currentState, updateFunction) {
      return updateFunction(currentState, canvas);
    }
  );
  iterationCounterUpdate.endCalc("functional update");

  return newState;
}

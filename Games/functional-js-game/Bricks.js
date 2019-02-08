import { ballHitsABrick } from "./Collisions.js";
import { whichColour } from "../../board/Colours.js";

export function initBricks() {
  const emptyBrickList = Array(196).fill({ x: 0, y: 0, colour: "" });
  return assignBrickPositions(emptyBrickList);
}

function assignBrickPositions(emptyBrickList) {
  const assignedBrickList = emptyBrickList.map(function(brick, index) {
    var xMultiple = index % 14;
    var yMultiple = Math.floor(index / 14);
    var x = 29 * xMultiple + 46.5;
    var y = 29 * yMultiple + 46.5;
    var colour = whichColour(yMultiple, "red");
    return { x: x, y: y, colour };
  });
  return assignedBrickList;
}

export function filterBricks(state) {
  const { ballPosition, bricks } = state;
  state.bricks = state.bricks.filter(function(brick) {
    return !ballHitsABrick(ballPosition, brick);
  });
}

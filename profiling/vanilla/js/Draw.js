import { whichColour, colours } from "./Colours.js";
import { Brick } from "./Bricks.js";

export const drawToScreen = {
  drawRect: function(ctx, body, colour) {
    ctx.fillStyle = colour;
    ctx.fillRect(
      body.position.x - body.size.x / 2,
      body.position.y - body.size.y / 2,
      body.size.x,
      body.size.y
    );
  },
  drawBricks: function(game) {
    var bricks = [];
    for (var i = 0; i < 196; i++) {
      var xMultiple = i % 14;
      var yMultiple = Math.floor(i / 14);
      var x = 29 * xMultiple + 61;
      var y = 29 * yMultiple + 61;
      var colour = whichColour(yMultiple);

      bricks.push(new Brick(game, { x, y }, colour));
    }
    return bricks;
  }
};

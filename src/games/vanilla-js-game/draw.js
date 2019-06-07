import { whichColour, colours } from "../../board/colours.js";
import { Brick } from "./bricks.js";

export const drawToScreen = {
  drawRect: function(ctx, body, colour) {
    ctx.fillStyle = colour;
    // ctx.globalCompositeOperation = "lighter";
    ctx.fillRect(
      body.position.x - body.size.x / 2,
      body.position.y - body.size.y / 2,
      body.size.x,
      body.size.y
    );
  },
  drawBricks: function(game, themeColour, mainEntity) {
    var bricks = [];
    for (var i = 0; i < 196; i++) {
      var xMultiple = i % 14;
      var yMultiple = Math.floor(i / 14);
      var x = 29 * xMultiple + 61;
      var y = 29 * yMultiple + 61;
      var colour = whichColour(yMultiple, themeColour);
      bricks.push(new Brick(game, { x: x, y: y }, colour, mainEntity));
    }
    return bricks;
  }
};

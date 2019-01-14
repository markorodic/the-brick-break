var drawToScreen = {
  drawRect: function(ctx, body, colour) {
    ctx.fillStyle = colour;
    ctx.fillRect(
      body.position.x - body.size.x / 2,
      body.position.y - body.size.y / 2,
      body.size.x,
      body.size.y
    );
  },
  drawGap: function(ctx) {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 55, 392, 15);
  },
  drawText: function(ctx, variable, left, top) {
    ctx.fillStyle = "white";
    ctx.fillText(variable, left, top);
    ctx.font = '42px "Press Start 2P"';
  },
  drawBricks: function(game, themeColour) {
    var bricks = [];
    for (var i = 0; i < 196; i++) {
      var xMultiple = i % 14;
      var yMultiple = Math.floor(i / 14);
      var x = 29 * xMultiple + 61;
      var y = 29 * yMultiple + 61;
      var colour = whichColour(yMultiple, themeColour);
      bricks.push(new Brick(game, { x: x, y: y }, colour));
    }
    return bricks;
  }
};

var whichColour = function(yPostion, themeColour) {
  switch (yPostion) {
    case 0:
      return colours[themeColour].rowOne;
    case 1:
      return colours[themeColour].rowTwo;
    case 2:
      return colours[themeColour].rowThree;
    case 3:
      return colours[themeColour].rowFour;
    case 4:
      return colours[themeColour].rowFive;
    case 5:
      return colours[themeColour].rowSix;
    case 6:
      return colours[themeColour].rowSeven;
    case 7:
      return colours[themeColour].rowEight;
    case 8:
      return colours[themeColour].rowNine;
    case 9:
      return colours[themeColour].rowTen;
    case 10:
      return colours[themeColour].rowEleven;
    case 11:
      return colours[themeColour].rowTwelve;
    case 12:
      return colours[themeColour].rowThirteen;
    case 13:
      return colours[themeColour].rowFourteen;
  }
};

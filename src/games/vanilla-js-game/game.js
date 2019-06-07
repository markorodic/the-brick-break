import { drawToScreen } from "./draw.js";
import { Paddle } from "./paddle.js";
import { Ball } from "./ball.js";
import { collisions } from "./collisions.js";
import { colours } from "../../board/colours.js";

export function Game(canvasId, mainGameEntity, themeColour, ballVelocity) {
  var canvas = document.getElementById(canvasId);
  var ctx = canvas.getContext("2d");
  this.gameSize = { x: canvas.width, y: canvas.height };
  this.themeColour = themeColour;
  this.mainGameEntity = mainGameEntity;
  this.bodies = {
    bricks: drawToScreen.drawBricks(
      this,
      this.themeColour,
      this.mainGameEntity
    ),
    paddle: new Paddle(this.gameSize, mainGameEntity),
    ball: new Ball(this, ballVelocity, mainGameEntity)
  };
  this.score = 0;
  this.lives = 3;
  this.stopped = false;

  var self = this;

  function playGame() {
    if (self.stopped) {
      ctx.clearRect(0, 0, self.gameSize.x, self.gameSize.y);
      return;
    }
    self.update();
    self.draw(ctx, canvas);
    requestAnimationFrame(playGame);
  }
  playGame();
}

Game.prototype = {
  update: function() {
    const { ball, bricks, paddle } = this.bodies;
    var gameSize = this.gameSize;

    this.bodies.bricks = bricks.filter(function(brick) {
      return !collisions.brickCol(brick, ball);
    });
    paddle.update(ball);
    ball.update(paddle, bricks, gameSize);
  },
  draw: function(ctx) {
    ctx.clearRect(0, 0, this.gameSize.x, this.gameSize.y);
    drawToScreen.drawRect(
      ctx,
      this.bodies.ball,
      colours[this.themeColour].main
    );
    drawToScreen.drawRect(
      ctx,
      this.bodies.paddle,
      colours[this.themeColour].main
    );
    for (var i = 0; i < this.bodies.bricks.length; i++) {
      drawToScreen.drawRect(
        ctx,
        this.bodies.bricks[i],
        this.bodies.bricks[i].colour
      );
    }
  },
  stopGame: function() {
    this.stopped = true;
  }
};

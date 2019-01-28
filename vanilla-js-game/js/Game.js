import { drawToScreen } from "./Draw.js";
import { Paddle } from "./Paddle.js";
import { Ball } from "./Ball.js";
import { collisions } from "./Collisions.js";
import { colours } from "./Colours.js";
import { Fps2 } from "../../Game/fps2.js";

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

  this.gameFps = new Fps2();
  // this.updateFps = new Fps("update");
  // this.drawFps = new Fps("draw");
  // this.drawFpsCount = 0;

  var self = this;

  function playGame() {
    self.gameFps.calcData();
    self.update();
    self.draw(ctx, canvas);
    requestAnimationFrame(playGame);
  }
  playGame();
}

Game.prototype = {
  update: function() {
    var ball = this.bodies.ball;
    var bricks = this.bodies.bricks;
    var paddle = this.bodies.paddle;
    var gameSize = this.gameSize;

    this.bodies.bricks = bricks.filter(function(brick) {
      return !collisions.brickCol(brick, ball);
    });
    if (this.lives < 0) {
      this.lives = 3;
      this.score = 0;
    }
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
    // if (this.drawFpsCount % 100 === 0) {
    drawToScreen.drawFps(this.gameFps.getData());
    // }
    this.drawFpsCount++;
  }
};

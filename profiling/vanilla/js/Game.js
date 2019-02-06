import { drawToScreen } from "./Draw.js";
import { Paddle } from "./Paddle.js";
import { Ball } from "./Ball.js";
import { collisions } from "./Collisions.js";
import { colours } from "./Colours.js";
import { IterationCounter } from "../IterationCounter.js";

export function Game(canvasId) {
  var canvas = document.getElementById(canvasId);
  var ctx = canvas.getContext("2d");
  this.gameSize = { x: canvas.width, y: canvas.height };
  this.bodies = {
    bricks: drawToScreen.drawBricks(this),
    paddle: new Paddle(this.gameSize),
    ball: new Ball(this)
  };
  this.score = 0;
  this.lives = 3;
  this.iterationCounter = new IterationCounter();

  var self = this;

  function playGame() {
    self.update();
    self.draw(ctx, canvas);
    requestAnimationFrame(playGame);
  }
  playGame();
}

Game.prototype = {
  update: function() {
    this.iterationCounter.startCalc();
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
    this.iterationCounter.endCalc();
  },
  draw: function(ctx) {
    ctx.clearRect(0, 0, this.gameSize.x, this.gameSize.y);
    drawToScreen.drawRect(ctx, this.bodies.ball, colours.main);
    drawToScreen.drawRect(ctx, this.bodies.paddle, colours.main);
    for (var i = 0; i < this.bodies.bricks.length; i++) {
      drawToScreen.drawRect(
        ctx,
        this.bodies.bricks[i],
        this.bodies.bricks[i].colour
      );
    }
  }
};

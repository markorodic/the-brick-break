var Game = function(canvasId, mainGameEntity, themeColour, ballVelocity) {
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
  var self = this;

  function playGame() {
    self.update();
    self.draw(ctx, canvas);
    requestAnimationFrame(playGame);
  }

  playGame();
};

Game.prototype = {
  update: function() {
    var ball = this.bodies.ball;
    var bricks = this.bodies.bricks;
    var paddle = this.bodies.paddle;
    var gameSize = this.gameSize;

    this.bodies.bricks = bricks.filter(function(brick) {
      return !collision.brickCol(brick, ball);
    });
    if (this.lives < 0) {
      this.lives = 3;
      this.score = 0;
    }
    paddle.update(ball);
    ball.update(paddle, bricks, gameSize, this.score, this.lives);
  },
  draw: function(ctx, canvas) {
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
  }
};

var Ball = function(game, velocity, mainEntity) {
  this.game = game;
  this.size = { x: 6, y: 6 };
  this.position = { x: 250, y: 475 };
  this.velocity = { x: velocity, y: velocity };
  this.radius = this.size.x / 2;
  this.shouldBeVisible = mainEntity === "ball";
};

Ball.prototype = {
  update: function(paddle, bricks, gameSize) {
    ball = this;
    if (collision.betweenBallAndCeiling(this.position.y, this.radius)) {
      this.velocity.y = -this.velocity.y;
    }
    if (collision.betweenBallAndWall(ball, gameSize)) {
      this.velocity.x = -this.velocity.x;
    }
    if (collision.ballHasDropped(ball, gameSize)) {
      this.game.lives -= 1;
      this.position = { x: 200, y: 400 };
      this.velocity = { x: 0, y: 0 };
    }
    if (collision.betweenBallAndPaddle(ball, paddle, gameSize)) {
      this.velocity.y = -this.velocity.y;
    }
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    if (collision.betweenBallAndBrick(ball, bricks)) {
      this.velocity.y = -this.velocity.y;
      this.game.score += 1;
    }
  }
};

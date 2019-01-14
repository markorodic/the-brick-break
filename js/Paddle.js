var Paddle = function(gameSize) {
  (this.size = {
    x: 60,
    y: 7
  }),
    (this.position = {
      x: gameSize.x / 2,
      y: gameSize.y - 2
    }),
    (this.arrowKey = new KeyboardInput());
  this.velocity = 4;
  this.gameSize = gameSize;
};

Paddle.prototype = {
  update: function(ball) {
    const paddleStart = this.position.x - this.size.x / 2;
    const paddleEnd = this.position.x + this.size.x / 2;
    const paddleCanMove = paddleStart >= -2 || paddleEnd < this.gameSize;
    if (ball.position.x > 30 && ball.position.x < 470) {
      this.position.x = ball.position.x;
    }
    if (this.arrowKey.isDown(this.arrowKey.KEY.SPACE)) {
      if (ball.velocity.x == 0) {
        ball.velocity = { x: 2, y: 2 };
      }
    }
  }
};

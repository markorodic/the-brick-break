import { collisions } from "./Collisions.js";

export const Ball = function(game) {
  this.game = game;
  this.size = { x: 6, y: 6 };
  this.position = { x: 250, y: 475 };
  this.velocity = { x: 1, y: 1 };
  this.radius = this.size.x / 2;
};

Ball.prototype = {
  update: function(paddle, bricks, gameSize) {
    if (collisions.betweenBallAndCeiling(this.position.y, this.radius)) {
      this.velocity.y = -this.velocity.y;
    }
    if (collisions.betweenBallAndWall(this, gameSize)) {
      this.velocity.x = -this.velocity.x;
    }
    if (collisions.ballHasDropped(this, gameSize)) {
      this.game.lives -= 1;
      this.position = { x: 200, y: 400 };
      this.velocity = { x: 0, y: 0 };
    }
    if (collisions.betweenBallAndPaddle(this, paddle, gameSize)) {
      this.velocity.y = -this.velocity.y;
    }
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
    const brickShouldBounce = collisions.betweenBallAndBrick(this, bricks);
    console.log(brickShouldBounce);
    if (brickShouldBounce === "x") {
      this.velocity.x = -this.velocity.x;
    }
    if (brickShouldBounce === "y") {
      this.velocity.y = -this.velocity.y;
    }
  }
};

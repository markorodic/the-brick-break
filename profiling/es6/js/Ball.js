export class Ball {
  constructor(gameSize, collisions) {
    this.gameSize = gameSize;
    this.size = { x: 6, y: 6 };
    this.center = { x: 250, y: 475 };
    this.velocity = { x: 1, y: 1 };
    this.moving = false;
  }
  moveBall() {
    this.center.x += this.velocity.x;
    this.center.y += this.velocity.y;
  }

  update(collisions) {
    collisions.ballStart();
    if (this.moving) {
      this.velocity = { x: 2, y: 2 };
      this.moving = false;
    }
    if (collisions.hitWall()) {
      this.velocity.x = -this.velocity.x;
    }
    if (collisions.hitCeiling()) {
      this.velocity.y = -this.velocity.y;
    }
    if (collisions.ballHit()) {
      this.velocity.y = -this.velocity.y;
    }

    let self = this;
    collisions.bricks.forEach(function(brick) {
      if (collisions.brickHit(brick) === "x") {
        console.log("x");
        self.velocity.x = -self.velocity.x;
      }
      if (collisions.brickHit(brick) === "y") {
        console.log("y");
        self.velocity.y = -self.velocity.y;
      }
    });
    if (collisions.ballDrop()) {
      this.center = { x: 200, y: 400 };
      this.velocity = { x: 0, y: -0 };
    }
    this.moveBall();
  }
}

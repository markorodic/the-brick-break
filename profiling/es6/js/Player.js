export class Player {
  constructor(gameSize) {
    (this.size = { x: 60, y: 6 }),
      (this.center = { x: gameSize.x / 2, y: gameSize.y - 3 });
    this.moving = false;
    this.space = false;
    this.gameSize = gameSize;
  }
  update(ball) {
    this.center.x = ball.center.x;
  }
  printSide() {
    this.input.keyboardPress(this.input.key.left);
  }
}

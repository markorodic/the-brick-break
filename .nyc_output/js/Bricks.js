var Brick = function(game, position, colour, mainEntity) {
  this.game = game;
  this.size = { x: 29, y: 29 };
  this.position = position;
  this.colour = colour;
  this.shouldBeVisible = mainEntity === "bricks";
};

let vanillaGameOne;
let vanillaGameTwo;
let vanillaGameThree;

// initialGames = {
//   ["game-one-bricks", "bricks", "blue", 0.5]
//   2: new Game("game-one-ball", "ball", "blue", 0.5),
//   3: new Game("game-one-paddle", "paddle", "blue", 0.5),
// }

export function vanillaJSGame() {
  // define game instances
  function createGameWith(canvasId, gameBody, ballSpeed) {
    // assign new games to defined game instances

    new Game(canvasId, gameBody, ballSpeed);
  }
  function stopGame(gameId) {
    // get the the game name
    // call stop on it
  }
}

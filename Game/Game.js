import { registerEventListeners } from "./EventListeners.js";

registerEventListeners();

function writeData() {
  requestAnimationFrame(writeData);
}
writeData();

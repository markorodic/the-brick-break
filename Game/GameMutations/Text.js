import { addClass, removeClass, DOMNode } from "../Utilities/Utilities.js";

export function flashText() {
  const buttonElement = DOMNode("button-container");
  const subtextElement = document.getElementsByClassName(
    "information-container"
  )[0];
  addFlashClass(buttonElement, subtextElement);

  setTimeout(() => {
    removeFlashClass(buttonElement, subtextElement);
  }, 1500);
}

function addFlashClass(button, text) {
  addClass(button, "flash");
  addClass(text, "flash");
}

function removeFlashClass(button, text) {
  removeClass(button, "flash");
  removeClass(text, "flash");
}

export function hideText() {}

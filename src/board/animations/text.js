import { addClass, removeClass, DOMNode } from "../utilities/utilities.js";

export function flashText() {
  const buttonElement = DOMNode("button-container");
  const subtextElement = DOMNode("information-container");
  addFlashClass(buttonElement, subtextElement);

  setTimeout(() => {
    removeFlashClass(buttonElement, subtextElement);
  }, 1500);
}

export function hideText() {
  const buttonElement = DOMNode("button-container");
  const subtextElement = DOMNode("information-container");
  addFlashClass(buttonElement, subtextElement);

  setTimeout(() => {
    removeFlashClass(buttonElement, subtextElement);
  }, 100000);
}

function addFlashClass(button, text) {
  addClass(button, "flash");
  addClass(text, "flash");
}

function removeFlashClass(button, text) {
  removeClass(button, "flash");
  removeClass(text, "flash");
}

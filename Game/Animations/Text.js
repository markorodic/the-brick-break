export function flashText() {
  const buttonElement = document.getElementsByClassName("button-container")[0];
  const subtextElement = document.getElementsByClassName(
    "information-container"
  )[0];
  addFlashClass(buttonElement, subtextElement);

  setTimeout(() => {
    removeFlashClass(buttonElement, subtextElement);
  }, 1500);
}

function addFlashClass(button, text) {
  button.classList.add("flash");
  text.classList.add("flash");
}

function removeFlashClass(button, text) {
  button.classList.remove("flash");
  text.classList.remove("flash");
}

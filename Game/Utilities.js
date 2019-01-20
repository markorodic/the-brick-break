export function addClass(element, newClass) {
  element.classList.add(newClass);
}

export function removeClass(element, newClass) {
  element.classList.remove(newClass);
}

export function replaceClass(boardElement, currentClassName, newClassName) {
  removeClass(boardElement, currentClassName);
  addClass(boardElement, newClassName);
}

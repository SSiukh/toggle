const toggle = document.querySelector(".toggle");
const light = document.querySelector(".light");
const forest = document.querySelector(".forest");
const mountains = document.querySelector(".mountains");
const backmount = document.querySelector(".back-mount");
const container = document.querySelector(".container");
const switcher = document.querySelector(".switcher");

toggle.addEventListener("click", handleClick);

function handleClick() {
  toggle.classList.toggle("toggle-light");
  light.classList.toggle("light-light");
  forest.classList.toggle("forest-light");
  mountains.classList.toggle("mountains-light");
  backmount.classList.toggle("back-mount-light");
  container.classList.toggle("container-light");
  switcher.classList.toggle("switcher-light");
}

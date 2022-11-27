import Slider from "./slider";

// slider -> init
const initAttribute = document.querySelector("[data-no-init]");
if (!initAttribute) {
  const el = [...document.querySelectorAll("[data-slider='wrapper']")];
  el.forEach((wrapper) => new Slider(wrapper));
}

window.Slider = Slider;

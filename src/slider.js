import KeenSlider from "keen-slider";
import { easeOutExpo, easeOutBack } from "./easings";

export default class {
  constructor(wrapper, config = {}) {
    this.wrapper = wrapper;
    this.element = wrapper.querySelector('[data-slider="container"]');
    this.config(config);

    this.ui = {
      dots: [],
      current: 0,
    };

    this.init();
  }

  config(config) {
    // CONVERT
    if (this.element.dataset.duration) this.element.dataset.duration *= 1000;

    /* TODO: rework function boolean conversion */
    const loop = evalStr(this.element.dataset.loop);
    const rubberband = evalStr(this.element.dataset.rubberband);
    const drag = evalStr(this.element.dataset.drag);
    const centered = evalStr(this.element.dataset.centered);
    const perview = () => {
      const { perview } = this.element.dataset;
      if (perview === undefined || perview === "0") {
        return "auto";
      } else {
        return Number(perview);
      }
    };
    const spacing = () => {
      const { spacing } = this.element.dataset;
      if (spacing === undefined || spacing === "0") {
        return 0;
      } else {
        return Number(spacing);
      }
    };
    // const easing = () => {
    //   return null;
    // };

    this.config = {
      // *** slider
      loop: loop, // --> out
      mode: this.element.dataset.mode || "free-snap", // --> out
      renderMode: "precision",
      rubberband: rubberband, // --> out
      // *** drag
      drag: drag, // --> out
      dragSpeed: +this.element.dataset.rubberband || 1, // --> out
      // *** animation
      defaultAnimation: {
        duration: +this.element.dataset.duration || 100, // --> out
        // easing: easeOutBack,
      },
      // *** slides
      initial: 0,
      slides: {
        origin: centered ? "center" : "auto", // --> out
        perView: perview(), // --> out
        spacing: spacing(), // --> out
      },
      range: {
        // align: false,
      },
      ...config, // INIT config takes precedence
    };

    console.log("Slider Configuration: ", this.config);
  }

  init() {
    this.slider = new KeenSlider(this.element, {
      // * INTERNAL config
      selector: () => [...this.element.children],
      //   slides: {
      //     perView: "auto",
      //     // spacing: 0,
      //   },
      ...this.config,
    });

    this.initDom();
    this.slider.on("slideChanged", this.update.bind(this));

    // console.log(this.slider.slides.length);
  }

  /**
   * DOM
   */

  initDom() {
    // arrows
    const arrowLeft = this.wrapper.querySelector('[data-slider="left"]');
    const arrowRight = this.wrapper.querySelector('[data-slider="right"]');
    if (arrowLeft || arrowRight) this.createArrows(arrowLeft, arrowRight);

    // dots
    const dotsWrapper = this.wrapper.querySelector('[data-slider="dots"]');
    if (dotsWrapper) this.createDots(dotsWrapper);

    this.onStart(0);
  }

  createArrows(left, right) {
    this.ui.hasArrows = true;
    if (left) left.onclick = () => this.slider.prev();
    if (right) right.onclick = () => this.slider.next();

    // * check
    // console.log("arrows", left, right);
  }

  createDots(wrapper) {
    this.ui.hasDots = true;

    const children = [...wrapper.children];
    if (children.length < 1) return;

    const activeDot = wrapper.querySelector(".active");
    if (!activeDot) return;
    const dot = activeDot.cloneNode(true);
    dot.classList.remove("active");

    children.forEach((child) => child.remove());

    this.slider.slides.forEach((slide, i) => {
      const newDot = dot.cloneNode(true);
      newDot.onclick = () => this.slider.moveToIdx(i);

      this.ui.dots.push(newDot);
      wrapper.appendChild(newDot);

      //   console.log(i);
    });

    // * check
    // console.log("dots", this.ui.dots);
  }

  /**
   * Loop
   */

  onStart(rel) {
    this.ui.dots[rel].classList.add("active");
    this.ui.current = rel;
    // this.updateArrows(rel);
  }

  update(e = 0) {
    const rel = typeof e === "number" ? e : e.track.details.rel;
    // console.log(rel);

    this.updateDots(rel);
    this.updateSlides(rel);
    this.updateArrows(rel);

    this.ui.current = rel;
  }

  updateSlides(rel) {
    this.slider.slides[this.ui.current].classList.remove("active");
    this.slider.slides[rel].classList.add("active");
  }

  updateDots(rel) {
    if (!this.ui.hasDots) return;
    this.ui.dots[this.ui.current].classList.remove("active");
    this.ui.dots[rel].classList.add("active");
  }

  updateArrows(rel) {
    if (!this.ui.hasArrows) return;
    // if (rel === 0) console.log("edge left");
    // if (rel === this.slider.slides.length) console.log("edge right");
  }
}

function evalStr(str) {
  return str === "true";
}

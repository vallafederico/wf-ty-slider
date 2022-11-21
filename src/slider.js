import KeenSlider from "keen-slider";

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
    // -> from attributes
    // console.log(this.element);

    console.log(this.element.dataset);
    // console.log(eval(this.element.dataset.loop));
    // console.log(this.element.dataset.mode);

    this.config = {
      // slider
      loop: false, // out
      mode: "free-snap", // out
      renderMode: "precision",
      rubberband: true, // out
      // drag
      drag: true, // out
      dragSpeed: 1, // out
      // animation
      defaultAnimation: {
        duration: 1000, // out
        // easing: () => {},
      },
      // slides
      initial: 0,
      range: {
        // align: false,
      },
      ...config, // INIT config takes precedence
    };

    console.log("-- config ", this.config);
  }

  init() {
    this.slider = new KeenSlider(this.element, {
      // * INTERNAL config
      selector: () => [...this.element.children],
      slides: {
        perView: "auto",
        // spacing: 0,
      },
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
    if (rel === 0) console.log("edge left");
    if (rel === this.slider.slides.length) console.log("edge right");
  }
}

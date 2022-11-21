import KeenSlider from "keen-slider";

export default class extends KeenSlider {
  constructor(element) {
    const config = {
      // * events
      //   created: () => console.log("created"),
      // * general config
      loop: false,
      mode: "free-snap",
      // * slides config
      selector: () => [...element.children],
      slides: {
        perView: "auto",
        // spacing: 0,
      },
    };
    super(element, config);

    // console.log("SLIDER", this);

    // this.dom();
  }

  dom() {
    const arrowLeft = document.querySelector('[data-slider="left"]');
    const arrowRight = document.querySelector('[data-slider="right"]');

    console.log(arrowLeft, arrowRight);
  }
}

import KeenSlider from "keen-slider";

export default class extends KeenSlider {
  constructor(element, config = {}) {
    // parse config

    // init!
    super(element, {
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
    });

    this.options.defaultAnimation = {
      duration: 1000,
    };

    console.log("SLIDER", this.options);
  }
}

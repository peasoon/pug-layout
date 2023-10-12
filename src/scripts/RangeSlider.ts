import { debounce } from "ts-debounce";
import { CardData } from "./products";

export class RangeSlider {
  refs: {
    lowThumb: Element | null | undefined;
    highThumb: Element | null | undefined;
    lowInput: Element | null | undefined;
    highInput: Element | null | undefined;
  };
  min: number;
  max: number;
  render: Function;
  data: CardData[];
  currentData: CardData[];
  constructor(
    selector: string,
    min: number,
    max: number,
    render: Function,
    data: CardData[]
  ) {
    const container = document.querySelector(selector);
    this.min = min;
    this.max = max;
    this.currentData=[...data];
    this.render = render;
    this.data=data;
    this.refs = {
      lowThumb:
        container?.querySelector<HTMLInputElement>('[data-price="low"]'),
      highThumb: container?.querySelector<HTMLInputElement>(
        '[data-price="high"]'
      ),
      lowInput: container?.querySelector<HTMLInputElement>('[data-out="low"]'),
      highInput:
        container?.querySelector<HTMLInputElement>('[data-out="high"]'),
    };
    this.addListeners();
    this.initValues();
  }

  initValues() {
    (this.refs.lowThumb as HTMLInputElement).min = String(this.min);
    (this.refs.lowThumb as HTMLInputElement).max = String(this.max);
    (this.refs.highThumb as HTMLInputElement).min = String(this.min);
    (this.refs.highThumb as HTMLInputElement).max = String(this.max);

    (this.refs.lowThumb as HTMLInputElement).value = String(this.min);
    (this.refs.highThumb as HTMLInputElement).value = String(this.max);

    this.renderValues();
  }

  renderValues() {
    (this.refs.lowInput as HTMLInputElement).value = String(this.min);
    (this.refs.highInput as HTMLInputElement).value = String(this.max);
  }

  setValues() {
    console.log("works");
    const low = Number((this.refs.lowThumb as HTMLInputElement).value);
    const high = Number((this.refs.highThumb as HTMLInputElement).value);

    debounce(()=>{
      this.min = Math.min(low, high);
      this.max = Math.max(low, high);
  
      this.renderValues();
      this.currentData = this.data.filter(el=>el.price>=this.min&&el.price<=this.max);
      this.render(".products",this.currentData)
    },300)()
    // this.min = Math.min(low, high);
    // this.max = Math.max(low, high);

    // this.renderValues();
  }

  addListeners() {
    this.refs.lowThumb?.addEventListener("change", this.setValues.bind(this));
    this.refs.highThumb?.addEventListener("change", this.setValues.bind(this));
  }
}



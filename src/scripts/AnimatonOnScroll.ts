export class AnimationOnScroll {
  #element: HTMLElement | null;
  offset?: number;
  constructor(selector: string, offset: number = 200) {
    this.#element = document.querySelector<HTMLElement>(selector);
    this.offset = offset;
    console.log(this.#element);
    this.addListeners();
  }

  addListeners() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }
  handleScroll() {
    const top = this.#element!.getBoundingClientRect().top;
    console.log(top - this.offset!);
    if (top - this.offset! <= 0) {
      if (!this.#element?.classList.contains("animated")) {
        this.#element?.classList.add("animated");
      }
    }
  }
}

export class Scroller {
  scrollInner: HTMLDivElement | null | undefined;
  constructor(selector: string) {
    const parent = document.querySelector<HTMLDivElement>(selector);
    this.scrollInner = parent?.querySelector<HTMLDivElement>(
      `${selector}__inner`
    );
    console.log("scroll container ", parent);
    console.log("scroll inner ", Array.from(this.scrollInner!.children));
    this.doubleContent();
  }

  doubleContent() {
    const doubledNodes = Array.from(this.scrollInner!.children).forEach(
      (el) => {
        const cloned = el.cloneNode(true) as HTMLElement;
        this.scrollInner!.insertAdjacentElement("beforeend", cloned);
      }
    );
  }
}

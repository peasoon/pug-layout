export class Tabs {
  headingsContainer: HTMLDivElement | null | undefined;
  contentContainer: HTMLLegendElement | null | undefined;
  constructor(selector: string) {
    console.log("tabs are here");
    const parent = document.querySelector(selector);
    this.headingsContainer =
      parent?.querySelector<HTMLDivElement>(".tabs__headings");
    this.contentContainer =
      parent?.querySelector<HTMLLegendElement>(".tabs__content");
    this.addListeners();
  }

  addListeners() {
    this.headingsContainer?.addEventListener(
      "click",
      this.clickHeadingsContainer.bind(this)
    );
  }

  clickHeadingsContainer(e: Event) {
    e.preventDefault();
    const target = e.target as HTMLElement;
    if (target.tagName === "A") {
      const headings = this.headingsContainer!.children;
      Array.from(headings).forEach((head) => head.classList.remove("selected"));
      target.classList.add("selected");
      let pos = 0;
      let temp: HTMLElement | null | Element = target;
      while (temp?.previousElementSibling) {
        pos++;
        temp = temp.previousElementSibling;
      }
      const content = this.contentContainer!.children;
      Array.from(content).forEach((cnt) => cnt.classList.remove("selected"));
      content[pos].classList.add("selected");
    }
  }
}

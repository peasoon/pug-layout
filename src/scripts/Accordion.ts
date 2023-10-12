export class Accordion {
  constructor(selector: string) {
    const parent = document.querySelector<HTMLUListElement>(selector);
    console.log(parent);
    this.addListeners(parent!);
  }

  addListeners(parent:HTMLElement) {
    console.log('parent is ',parent)
    parent.addEventListener("click", this.clickHandler);
  }

  clickHandler(e: Event) {
    const target = e.target as HTMLElement;
    target.parentElement?.classList.toggle('active')
  }
}

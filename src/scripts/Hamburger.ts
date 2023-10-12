export class Hamburger {
  #element: HTMLElement | null;
  constructor(selector:string) {
    this.#element = document.querySelector<HTMLElement>(selector)
    this.addListener()
  }
  addListener() {
    this.#element?.addEventListener('click',this.handleClick.bind(this))
  }
  handleClick() {
    this.#element?.classList.toggle('is-active')
  }
}
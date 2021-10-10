export class BaseComponent {
  readonly element: HTMLElement;

  constructor(
    parentNode: HTMLElement | null = null,
    tag: keyof HTMLElementTagNameMap = 'div',
    styles: string[] = [],
    content = ''
  ) {
    this.element = document.createElement(tag);
    this.element.classList.add(...styles);
    this.element.innerHTML = content;
    if (parentNode) parentNode.append(this.element);
  }

  addAttribute(attr: string, value: string): void {
    this.element.setAttribute(attr, value);
  }

  hideElement(): void {
    this.element.classList.add('hide');
  }

  showElement(): void {
    this.element.classList.remove('hide');
  }
}

export class BaseButton {
  readonly button: HTMLButtonElement;

  constructor(parentNode: HTMLElement | null = null, styles: string[] = [], title: string, type: string) {
    this.button = document.createElement('button');
    this.button.setAttribute('type', type);
    this.button.textContent = title;
    this.button.classList.add(...styles);
    if (parentNode) parentNode.append(this.button);
  }
}

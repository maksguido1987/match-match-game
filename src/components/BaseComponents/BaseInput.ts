export class BaseInput {
  readonly input: HTMLInputElement;

  constructor(
    parentNode: HTMLElement,
    styles: string[] = [],
    id: string,
    placeholder: string,
    type: string,
    required: boolean
  ) {
    this.input = document.createElement('input');
    this.input.setAttribute('id', id);
    this.input.setAttribute('type', type);
    this.input.required = required;
    this.input.placeholder = placeholder;
    this.input.classList.add(...styles);
    if (parentNode) parentNode.append(this.input);
  }

  getInputValue(): string {
    return this.input.value;
  }
}

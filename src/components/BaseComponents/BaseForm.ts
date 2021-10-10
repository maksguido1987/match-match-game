export class BaseForm {
  readonly form: HTMLFormElement;

  constructor(parentNode: HTMLElement | null = null, styles: string[] = [], id: string, action: string) {
    this.form = document.createElement('form');
    this.form.setAttribute('id', id);
    this.form.action = action;
    this.form.classList.add(...styles);
    if (parentNode) parentNode.append(this.form);
  }
}

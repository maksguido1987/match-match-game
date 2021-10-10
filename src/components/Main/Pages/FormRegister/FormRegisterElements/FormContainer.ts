import { BaseComponent } from '../../../../BaseComponents/BaseComponent';

export class FormContainer extends BaseComponent {
  readonly formTitle: BaseComponent;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['form-container']);

    this.formTitle = new BaseComponent(this.element, 'h2', ['form-title'], 'Registr new Player');
  }
}

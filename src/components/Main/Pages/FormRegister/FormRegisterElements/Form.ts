import { BaseForm } from '../../../../BaseComponents/BaseForm';

export class Form extends BaseForm {
  constructor(parentNode: HTMLElement) {
    super(parentNode, ['form-register'], 'form', '#');
  }
}

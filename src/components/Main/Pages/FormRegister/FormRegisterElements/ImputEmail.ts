import { regexEmail } from '../../../../../variables';
import { BaseComponent } from '../../../../BaseComponents/BaseComponent';
import { BaseInput } from '../../../../BaseComponents/BaseInput';

export class InputEmail extends BaseComponent {
  readonly inputEmailLabel: BaseComponent;

  readonly inputEmail: BaseInput;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['form-email', 'input-wrapper']);

    this.inputEmailLabel = new BaseComponent(this.element, 'label', ['form-email-label', 'form-label'], 'E-mail');
    this.inputEmailLabel.addAttribute('for', 'e-mail');
    this.inputEmail = new BaseInput(this.element, ['form-email-input', 'form-input'], 'email', '', 'e-mail', false);
    this.inputEmail.input.oninput = () => {
      if (this.inputEmail.input.value.match(regexEmail)) {
        this.element.classList.add('valid');
        this.element.classList.remove('invalid');
      } else {
        this.element.classList.remove('valid');
        this.element.classList.add('invalid');
      }
    };
  }

  chechValidEmail(): boolean {
    return regexEmail.test(this.inputEmail.input.value);
  }
}

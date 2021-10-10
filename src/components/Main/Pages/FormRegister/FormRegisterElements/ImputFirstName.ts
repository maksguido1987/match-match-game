import { regexFirstName } from '../../../../../variables';
import { BaseComponent } from '../../../../BaseComponents/BaseComponent';
import { BaseInput } from '../../../../BaseComponents/BaseInput';

export class InputFirstName extends BaseComponent {
  formFirstNameLabel: BaseComponent;

  formFirstNameInput: BaseInput;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['form-first-name', 'input-wrapper']);

    this.formFirstNameLabel = new BaseComponent(
      this.element,
      'label',
      ['form-first-name-label', 'form-label'],
      'First Name'
    );
    this.formFirstNameLabel.addAttribute('for', 'first-name');
    this.formFirstNameInput = new BaseInput(
      this.element,
      ['form-first-name-input', 'form-input'],
      'first-name',
      '',
      'text',
      false
    );
    this.formFirstNameInput.input.oninput = () => {
      if (
        this.formFirstNameInput.input.value.match(regexFirstName) &&
        this.formFirstNameInput.input.value.length >= 1
      ) {
        this.element.classList.add('valid');
        this.element.classList.remove('invalid');
      } else {
        this.element.classList.remove('valid');
        this.element.classList.add('invalid');
      }
    };
  }

  chechValidFirstName(): boolean {
    return regexFirstName.test(this.formFirstNameInput.input.value);
  }
}

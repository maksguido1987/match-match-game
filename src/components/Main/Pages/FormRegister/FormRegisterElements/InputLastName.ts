import { regexLastName } from '../../../../../variables';
import { BaseComponent } from '../../../../BaseComponents/BaseComponent';
import { BaseInput } from '../../../../BaseComponents/BaseInput';

export class InputLastName extends BaseComponent {
  readonly formLastNameLabel: BaseComponent;

  readonly formLastNameInput: BaseInput;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['form-last-name', 'input-wrapper']);

    this.formLastNameLabel = new BaseComponent(
      this.element,
      'label',
      ['form-last-name-lamel', 'form-label'],
      'Last Name'
    );
    this.formLastNameLabel.addAttribute('for', 'last-name');
    this.formLastNameInput = new BaseInput(
      this.element,
      ['form-last-name-input', 'form-input'],
      'last-name',
      '',
      'text',
      false
    );
    this.formLastNameInput.input.oninput = () => {
      if (this.formLastNameInput.input.value.match(regexLastName) && this.formLastNameInput.input.value.length >= 1) {
        this.element.classList.add('valid');
        this.element.classList.remove('invalid');
      } else {
        this.element.classList.remove('valid');
        this.element.classList.add('invalid');
      }
    };
  }

  chechValidLastName(): boolean {
    return regexLastName.test(this.formLastNameInput.input.value);
  }
}

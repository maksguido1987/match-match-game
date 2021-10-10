import { BaseComponent } from '../../../../BaseComponents/BaseComponent';
import { InputEmail } from './ImputEmail';
import { InputFirstName } from './ImputFirstName';
import { InputLastName } from './InputLastName';
import { InputAvatar } from './InputAvatar';

export class TopFieldForm extends BaseComponent {
  formInputWrapper: BaseComponent;

  inputFirstName: InputFirstName;

  inputLastName: InputLastName;

  inputEmail: InputEmail;

  formAvatarWrapper: InputAvatar;

  constructor(parentNode: HTMLElement, avatar: BaseComponent) {
    super(parentNode, 'div', ['top-field-form']);

    this.formInputWrapper = new BaseComponent(this.element, 'div', ['form-input-wrapper']);
    this.inputFirstName = new InputFirstName(this.formInputWrapper.element);
    this.inputLastName = new InputLastName(this.formInputWrapper.element);
    this.inputEmail = new InputEmail(this.formInputWrapper.element);
    this.formAvatarWrapper = new InputAvatar(this.element, avatar);
  }
}

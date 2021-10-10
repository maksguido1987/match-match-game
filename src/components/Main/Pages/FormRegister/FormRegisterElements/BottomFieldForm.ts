import { BaseButton } from '../../../../BaseComponents/BaseButton';
import { BaseComponent } from '../../../../BaseComponents/BaseComponent';

export class BottomFieldForm extends BaseComponent {
  readonly addUserBtn: BaseButton;

  readonly cancelBtn: BaseButton;

  readonly resetBtn: BaseButton;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['bottom-field-form']);

    this.addUserBtn = new BaseButton(this.element, ['form-btn', 'add-user-btn'], 'add user', 'button');
    this.resetBtn = new BaseButton(this.element, ['form-btn', 'reset-btn'], 'reset', 'button');
    this.cancelBtn = new BaseButton(this.element, ['form-btn', 'cancel-btn'], 'cancel', 'button');
  }
}

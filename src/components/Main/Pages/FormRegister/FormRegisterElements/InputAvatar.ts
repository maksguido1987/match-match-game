import { BaseComponent } from '../../../../BaseComponents/BaseComponent';
import { BaseInput } from '../../../../BaseComponents/BaseInput';

export class InputAvatar extends BaseComponent {
  inputFile: BaseInput;

  inputFileLabel: BaseComponent;

  constructor(parentNode: HTMLElement, avatar: BaseComponent) {
    super(parentNode, 'div', ['form-avatar-wrapper']);

    this.inputFileLabel = new BaseComponent(this.element, 'label', ['label-file']);
    this.inputFileLabel.element.setAttribute('for', 'input-file');
    this.inputFile = new BaseInput(this.element, ['input-file'], 'input-file', '', 'file', false);
    this.inputFile.input.onchange = () =>
      this.addAvatar().then((link) => {
        this.inputFileLabel.element.style.backgroundImage = `url("${link}")`;
        avatar.element.style.backgroundImage = `url("${link}")`;
      });
  }

  addAvatar(): PromiseLike<string> {
    return new Promise((resolve) => {
      const file = this.inputFile.input.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        resolve(reader.result as string);
        localStorage.setItem('avatar', reader.result.toString());
      };
    });
  }
}

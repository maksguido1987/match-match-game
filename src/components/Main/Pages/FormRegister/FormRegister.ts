import { BaseComponent } from '../../../BaseComponents/BaseComponent';
import './form-register.scss';
import { FormContainer } from './FormRegisterElements/FormContainer';
import { Form } from './FormRegisterElements/Form';
import { TopFieldForm } from './FormRegisterElements/TopFieldForm';
import { BottomFieldForm } from './FormRegisterElements/BottomFieldForm';
import formAvatar from '../../../../img/about-game/avatar.svg';

export class FormRegister extends BaseComponent {
  formContainer: FormContainer;

  formRegister: Form;

  topFieldForm: TopFieldForm;

  bottomFieldForm: BottomFieldForm;

  onHideForm!: () => void;

  constructor(parentNode: HTMLElement, avatar: BaseComponent) {
    super(parentNode, 'div', ['register-form-popup']);

    this.formContainer = new FormContainer(this.element);
    this.formRegister = new Form(this.formContainer.element);

    this.topFieldForm = new TopFieldForm(this.formRegister.form, avatar);
    this.bottomFieldForm = new BottomFieldForm(this.formRegister.form);

    this.bottomFieldForm.addUserBtn.button.onclick = () => {
      if (
        this.topFieldForm.inputFirstName.chechValidFirstName() &&
        this.topFieldForm.inputLastName.chechValidLastName() &&
        this.topFieldForm.inputEmail.chechValidEmail()
      ) {
        this.onHideForm();
        this.clearFormValidation();
      }
    };

    this.bottomFieldForm.resetBtn.button.onclick = () => {
      this.formRegister.form.reset();
      this.topFieldForm.formAvatarWrapper.inputFileLabel.element.style.backgroundImage = `url("${formAvatar}")`;
      this.clearFormValidation();
    };

    this.bottomFieldForm.cancelBtn.button.onclick = () => {
      this.formRegister.form.reset();
      this.topFieldForm.formAvatarWrapper.inputFileLabel.element.style.backgroundImage = `url("${formAvatar}")`;
      this.clearFormValidation();
      this.hideElement();
    };
  }

  clearFormValidation(): void {
    this.topFieldForm.inputFirstName.element.classList.remove('valid');
    this.topFieldForm.inputFirstName.element.classList.remove('invalid');
    this.topFieldForm.inputLastName.element.classList.remove('valid');
    this.topFieldForm.inputLastName.element.classList.remove('invalid');
    this.topFieldForm.inputEmail.element.classList.remove('valid');
    this.topFieldForm.inputEmail.element.classList.remove('invalid');
  }
}

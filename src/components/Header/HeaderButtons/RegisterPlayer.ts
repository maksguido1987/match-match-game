import { BaseComponent } from '../../BaseComponents/BaseComponent';
import './register-player.scss';

export class RegisterPlayer extends BaseComponent {
  constructor(parentNode: HTMLElement) {
    super(parentNode, 'button', ['header__register-player'], 'register new player');
  }
}

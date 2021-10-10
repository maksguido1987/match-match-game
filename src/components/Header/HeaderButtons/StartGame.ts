import { BaseComponent } from '../../BaseComponents/BaseComponent';
import './start-game.scss';

export class StartGame extends BaseComponent {
  constructor(parentNide: HTMLElement) {
    super(parentNide, 'button', ['header__start-game'], 'start game');
  }
}

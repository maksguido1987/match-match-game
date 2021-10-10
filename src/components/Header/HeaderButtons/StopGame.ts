import { BaseComponent } from '../../BaseComponents/BaseComponent';
import './stop-game.scss';

export class StopGame extends BaseComponent {
  constructor(parentNide: HTMLElement) {
    super(parentNide, 'button', ['header__stop-game'], 'stop game');
  }
}

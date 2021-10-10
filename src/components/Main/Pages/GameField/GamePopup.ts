import { BaseComponent } from '../../../BaseComponents/BaseComponent';
import './game-popup.scss';

export class GamePopup extends BaseComponent {
  congratulations: BaseComponent;

  congratulationsText: BaseComponent;

  congratulationsBtn: BaseComponent;

  openBeastScorePage!: () => void;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['game-popup']);

    this.congratulations = new BaseComponent(this.element, 'div', ['congratulations']);
    this.congratulationsText = new BaseComponent(this.congratulations.element, 'div', ['congratulations-text']);
    this.congratulationsBtn = new BaseComponent(this.congratulations.element, 'button', ['congratulations-btn'], 'ok');
    this.congratulationsBtn.element.onclick = () => {
      this.openBeastScorePage();
    };
  }
}

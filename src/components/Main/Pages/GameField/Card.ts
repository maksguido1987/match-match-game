import { BaseComponent } from '../../../BaseComponents/BaseComponent';
import './card.scss';

const FLIP_CLASS = 'flipped';

export class Card extends BaseComponent {
  isFlipped = false;

  constructor(parentNode: HTMLElement, readonly image: string) {
    super(parentNode, 'div', ['card-container']);

    this.element.innerHTML = `
      <div class="card">
        <div class="card-front" style="background-image: url('${image}')"></div>
        <div class="card-back"></div>
      </div>
    `;
  }

  flipToBack(): Promise<void> {
    this.isFlipped = false;
    return this.flip(true);
  }

  flipToFront(): Promise<void> {
    this.isFlipped = true;
    return this.flip();
  }

  private flip(isFront = false): Promise<void> {
    return new Promise((resolve) => {
      this.element.classList.toggle(FLIP_CLASS, isFront);
      this.element.addEventListener('transitionend', () => resolve(), {
        once: true,
      });
    });
  }
}

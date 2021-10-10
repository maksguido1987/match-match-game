import { BaseComponent } from '../../../BaseComponents/BaseComponent';
import { Card } from './Card';
import './game-field.scss';

export const SHOW_TIME = 30;

export class GameField extends BaseComponent {
  private cards: Card[] = [];

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['game-field']);
  }

  clear(): void {
    this.cards = [];
    this.element.innerHTML = '';
  }

  addCards(cards: Card[]): void {
    this.cards = cards;
    this.cards.forEach((card) => this.element.appendChild(card.element));
    setTimeout(() => {
      this.cards.forEach((card) => card.flipToBack());
    }, SHOW_TIME * 1000);
  }
}

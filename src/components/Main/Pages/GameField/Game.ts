import { BaseComponent } from '../../../BaseComponents/BaseComponent';
import { delay } from '../../../delay/delay';
import { Card } from './Card';
import { GameField, SHOW_TIME } from './GameField';
import { Timer } from './Timer';
import { GamePopup } from './GamePopup';
import { FLIP_DELAY } from '../../../../variables';

export class Game extends BaseComponent {
  readonly gameField: GameField;

  gamePopup: GamePopup;

  timer: Timer;

  private activeCard?: Card;

  private isAnimation = false;

  private cardCollection: number;

  private activeCardCollection: HTMLElement[] = [];

  private counterClickedCards: number;

  private counterClikedIncorrect: number;

  readonly disableGameFielf: BaseComponent;

  score: number;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['game']);

    this.timer = new Timer(this.element);
    this.gameField = new GameField(this.element);
    this.gamePopup = new GamePopup(this.element);
    this.disableGameFielf = new BaseComponent(this.element, 'div', ['disable-game-field']);
    this.gamePopup.hideElement();
    this.disableGameFielf.hideElement();
    this.cardCollection = 0;
    this.counterClickedCards = 0;
    this.counterClikedIncorrect = 0;
    this.score = 0;
  }

  newGame(images: string[]): void {
    this.gameField.clear();
    this.disableGameFielf.showElement();

    setTimeout(() => {
      this.timer.startTimer();
      this.disableGameFielf.hideElement();
    }, SHOW_TIME * 1000);

    this.cardCollection = images.length;

    const cards = images
      .concat(images)
      .map((url) => new Card(this.element, url))
      .sort(() => Math.random() - 0.5);

    cards.forEach((card) =>
      card.element.addEventListener('click', () => {
        this.cardHandler(card);
      })
    );

    this.gameField.addCards(cards);
  }

  private async cardHandler(card: Card) {
    if (this.isAnimation) return;
    if (card.isFlipped) return;
    this.isAnimation = true;

    await card.flipToFront();

    if (!this.activeCard) {
      this.activeCard = card;
      this.isAnimation = false;
      return;
    }
    if (this.activeCard.image !== card.image) {
      this.counterClikedIncorrect += 1;
      this.counterClickedCards += 1;

      await Promise.all([this.activeCard.element.classList.add('error'), card.element.classList.add('error')]);
      await delay(FLIP_DELAY);
      await Promise.all([this.activeCard.element.classList.remove('error'), card.element.classList.remove('error')]);
      await Promise.all([this.activeCard.flipToBack(), card.flipToBack()]);
    } else {
      await Promise.all([this.activeCard.element.classList.add('complete'), card.element.classList.add('complete')]);
      this.activeCardCollection.push(this.activeCard.element);
      this.counterClickedCards += 1;
    }
    if (this.activeCardCollection.length === this.cardCollection) {
      this.timer.stopTimer();
      this.score = (this.counterClickedCards - this.counterClikedIncorrect) * 100 - (this.timer.time - 3600);

      setTimeout(() => {
        const time = `Good! You successfully found all matches on ${this.timer.element.textContent} minutes.`;
        this.gamePopup.congratulationsText.element.textContent = time;
        this.gamePopup.showElement();
        this.activeCardCollection = [];
        this.counterClikedIncorrect = 0;
        this.counterClickedCards = 0;
      }, 1000);
    }
    this.activeCard = undefined;
    this.isAnimation = false;
  }
}

import { BaseComponent } from '../BaseComponents/BaseComponent';

export class HeaderMenu extends BaseComponent {
  aboutGame: BaseComponent;

  bestScore: BaseComponent;

  gameSettings: BaseComponent;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'nav', ['header__menu']);
    this.aboutGame = new BaseComponent(this.element, 'a', ['header__menu-link'], 'AboutGame');
    this.aboutGame.addAttribute('href', '#');
    this.bestScore = new BaseComponent(this.element, 'a', ['header__menu-link'], 'BestScore');
    this.bestScore.addAttribute('href', '#best-score');
    this.gameSettings = new BaseComponent(this.element, 'a', ['header__menu-link'], 'GameSettings');
    this.gameSettings.addAttribute('href', '#settings-game');
  }

  addClassAboutGame(): void {
    this.aboutGame.element.classList.add('active-menu-link');
  }

  removeClassAboutGame(): void {
    this.aboutGame.element.classList.remove('active-menu-link');
  }

  addClassBestScore(): void {
    this.bestScore.element.classList.add('active-menu-link');
  }

  removeClassBestScore(): void {
    this.bestScore.element.classList.remove('active-menu-link');
  }

  addClassGameSettings(): void {
    this.gameSettings.element.classList.add('active-menu-link');
  }

  removeClassSettings(): void {
    this.gameSettings.element.classList.remove('active-menu-link');
  }
}

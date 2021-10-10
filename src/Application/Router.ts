import { Header } from '../components/Header/Header';
import { HeaderMenu } from '../components/Header/HeaderMenu';
import { Main } from '../components/Main/Main';
import { AboutGame } from '../components/Main/Pages/AboutGame/AboutGame';
import { BestScore } from '../components/Main/Pages/BestScore/BestScore';
import { SettingsGame } from '../components/Main/Pages/SettingsGame/SettingsGame';

export class Router {
  readonly main: Main;

  readonly header: Header;

  private hash: string;

  readonly headerMenu: HeaderMenu;

  readonly hashOptions: { [key: string]: AboutGame | BestScore | SettingsGame } = {};

  constructor(headerMenu: HeaderMenu, main: Main, header: Header) {
    this.main = main;
    this.header = header;
    this.headerMenu = headerMenu;
    this.hash = '';
    this.hashOptions = {
      '': this.main.aboutGamePage,
      'best-score': this.main.bestScore,
      'settings-game': this.main.settingsGame,
    };
    window.onpopstate = () => this.addPage();

    this.headerMenu.aboutGame.element.onclick = () => {
      this.clearGameField();
    };
    this.headerMenu.bestScore.element.onclick = () => {
      this.clearGameField();
    };
    this.headerMenu.gameSettings.element.onclick = () => {
      this.clearGameField();
    };
  }

  addPage(): void {
    this.hash = window.location.hash.slice(1);
    Object.keys(this.hashOptions).forEach((hashKey) => {
      if (this.hash === hashKey) {
        this.hashOptions[hashKey].showElement();
      } else {
        this.hashOptions[hashKey].hideElement();
      }
    });
    if (this.hash === '') {
      this.headerMenu.addClassAboutGame();
      this.headerMenu.removeClassBestScore();
      this.headerMenu.removeClassSettings();
    }
    if (this.hash === 'best-score') {
      this.headerMenu.addClassBestScore();
      this.headerMenu.removeClassAboutGame();
      this.headerMenu.removeClassSettings();
    }
    if (this.hash === 'settings-game') {
      this.headerMenu.addClassGameSettings();
      this.headerMenu.removeClassBestScore();
      this.headerMenu.removeClassAboutGame();
    }
  }

  clearGameField(): void {
    this.main.game.gameField.clear();
    this.main.game.timer.stopTimer();
    this.main.game.timer.clearTimer();
    this.main.game.hideElement();
    if (this.header.registerPlayer.element.classList.contains('hide')) {
      this.header.onShowStartButton();
    }
  }
}

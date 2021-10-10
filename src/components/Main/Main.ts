import { BaseComponent } from '../BaseComponents/BaseComponent';
import { FormRegister } from './Pages/FormRegister/FormRegister';
import { AboutGame } from './Pages/AboutGame/AboutGame';
import { Game } from './Pages/GameField/Game';
import { ImageCategory } from './Pages/GameField/ImageCategory';
import './main.scss';
import { SettingsGame } from './Pages/SettingsGame/SettingsGame';
import { BestScore } from './Pages/BestScore/BestScore';

export class Main extends BaseComponent {
  readonly formRegister: FormRegister;

  aboutGamePage: AboutGame;

  readonly game: Game;

  settingsGame: SettingsGame;

  bestScore: BestScore;

  constructor(parentNode: HTMLElement, avatar: BaseComponent) {
    super(parentNode, 'main', ['main']);

    this.aboutGamePage = new AboutGame(this.element);
    this.formRegister = new FormRegister(this.element, avatar);
    this.formRegister.hideElement();

    this.game = new Game(this.element);
    this.game.hideElement();

    this.settingsGame = new SettingsGame(this.element);
    this.settingsGame.hideElement();

    this.bestScore = new BestScore(this.element);
    this.bestScore.hideElement();
  }

  async startGame(): Promise<void> {
    const res = await fetch('./images.json'); // json файл
    const categories: ImageCategory[] = await res.json(); // списки обьектов
    const cameCards: number = this.settingsGame.settingGameCardSelect.selectedIndex;
    const cat = categories[cameCards]; // 0 обьект
    const quantityCards: number = this.settingsGame.settingDifficultSelect.value === 'ease' ? 6 : 12;
    const images = cat.images
      .map((name) => `./${name}`)
      .sort(() => Math.random() - Math.random())
      .slice(0, quantityCards); // окончания с названием картинок
    this.game.newGame(images);
  }
}

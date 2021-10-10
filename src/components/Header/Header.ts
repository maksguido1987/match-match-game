import './header.scss';
import { BaseComponent } from '../BaseComponents/BaseComponent';
import { HeaderMenu } from './HeaderMenu';
import { RegisterPlayer } from './HeaderButtons/RegisterPlayer';
import { StartGame } from './HeaderButtons/StartGame';
import { StopGame } from './HeaderButtons/StopGame';

export class Header extends BaseComponent {
  readonly headerMenu: HeaderMenu;

  private readonly btnWrapper: BaseComponent;

  readonly registerPlayer: RegisterPlayer;

  readonly startGame: StartGame;

  readonly stoptGame: StopGame;

  readonly headerAvatar: BaseComponent;

  onPageShow!: () => void;

  onStartGame!: () => void;

  onStopTimer!: () => void;

  onShowAvatar!: () => void;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'header', ['header']);

    this.headerMenu = new HeaderMenu(this.element);
    this.btnWrapper = new BaseComponent(this.element, 'div', ['header__btn-wrapper']);
    this.registerPlayer = new RegisterPlayer(this.btnWrapper.element);
    this.startGame = new StartGame(this.btnWrapper.element);
    this.startGame.hideElement();
    this.stoptGame = new StopGame(this.btnWrapper.element);
    this.stoptGame.hideElement();
    this.headerAvatar = new BaseComponent(this.btnWrapper.element, 'div', ['header__avatar']);
    this.headerAvatar.hideElement();

    this.registerPlayer.element.onclick = () => {
      this.onPageShow();
    };

    this.startGame.element.onclick = () => {
      this.onStartGame();
      this.startGame.hideElement();
      this.stoptGame.showElement();
    };

    this.stoptGame.element.onclick = () => {
      this.onStopTimer();
      this.stoptGame.hideElement();
      this.onShowStartButton();
    };
  }

  onShowStartButton(): void {
    this.startGame.showElement();
    this.stoptGame.hideElement();
    this.registerPlayer.hideElement();
    this.headerAvatar.showElement();
  }
}

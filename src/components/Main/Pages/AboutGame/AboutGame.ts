import { BaseComponent } from '../../../BaseComponents/BaseComponent';
import './about-game.scss';

export class AboutGame extends BaseComponent {
  private readonly aboutGameContainer: BaseComponent;

  private readonly aboutGameTitle: BaseComponent;

  private readonly aboutGameColumnLeft: BaseComponent;

  private readonly aboutRegisterRule: BaseComponent;

  private readonly aboutRegisterConfig: BaseComponent;

  private readonly aboutRegisterStart: BaseComponent;

  private readonly aboutGameColumnRight: BaseComponent;

  private readonly aboutRegisterForm: BaseComponent;

  private readonly aboutRegisterSettings: BaseComponent;

  private readonly aboutRegisterField: BaseComponent;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['about-game']);

    this.aboutGameTitle = new BaseComponent(this.element, 'h1', ['about-game-title'], 'How to play?');
    this.aboutGameContainer = new BaseComponent(this.element, 'div', ['about-game-container']);

    this.aboutGameColumnLeft = new BaseComponent(this.aboutGameContainer.element, 'div', [
      'about-game-column',
      'about-game-column-left',
    ]);
    this.aboutRegisterRule = new BaseComponent(
      this.aboutGameColumnLeft.element,
      'div',
      ['about-game-rule'],
      'Register new player in game'
    );
    this.aboutRegisterConfig = new BaseComponent(
      this.aboutGameColumnLeft.element,
      'div',
      ['about-game-config'],
      'Configure your game settings'
    );
    this.aboutRegisterStart = new BaseComponent(
      this.aboutGameColumnLeft.element,
      'div',
      ['about-game-start'],
      'Start you new game! Remember card positions and match it before times up.'
    );

    this.aboutGameColumnRight = new BaseComponent(this.aboutGameContainer.element, 'div', [
      'about-game-column',
      'about-game-column-right',
    ]);
    this.aboutRegisterForm = new BaseComponent(this.aboutGameColumnRight.element, 'div', ['about-game-form']);
    this.aboutRegisterSettings = new BaseComponent(this.aboutGameColumnRight.element, 'div', ['about-game-settings']);
    this.aboutRegisterField = new BaseComponent(this.aboutGameColumnRight.element, 'div', ['about-game-field']);
  }
}

import { BaseComponent } from '../../../BaseComponents/BaseComponent';
import { IDBParams } from '../../../../Application/Database';
import formAvatar from '../../../../img/about-game/avatar.svg';

export class ScoreItem extends BaseComponent {
  scoreWrapper: BaseComponent;

  scoreAvatar: BaseComponent;

  scoreNameContainer: BaseComponent;

  scoreName: BaseComponent;

  scoreSurname: BaseComponent;

  scoreEmail: BaseComponent;

  scoreResult: BaseComponent;

  score: BaseComponent;

  scoreValue: BaseComponent;

  params!: IDBParams;

  constructor(parentNode: HTMLElement, name: string, surname: string, email: string, score: number, avatar = '') {
    super(parentNode, 'div', ['score-item']);

    this.scoreAvatar = new BaseComponent(this.element, 'img', ['score-avatar']);
    this.scoreAvatar.element.setAttribute('src', avatar || formAvatar);
    this.scoreWrapper = new BaseComponent(this.element, 'div', ['score-wrapper']);
    this.scoreNameContainer = new BaseComponent(this.scoreWrapper.element, 'div', ['score-name-container']);
    this.scoreName = new BaseComponent(this.scoreNameContainer.element, 'span', ['score-name'], name);
    this.scoreSurname = new BaseComponent(this.scoreNameContainer.element, 'span', ['score-surname'], surname);
    this.scoreEmail = new BaseComponent(this.scoreNameContainer.element, 'div', ['score-email'], email);
    this.scoreResult = new BaseComponent(this.scoreWrapper.element, 'div', ['score-result']);
    this.score = new BaseComponent(this.scoreResult.element, 'div', ['score'], 'Score: ');
    this.scoreValue = new BaseComponent(this.scoreResult.element, 'span', ['score-value'], `${score}`);
  }
}

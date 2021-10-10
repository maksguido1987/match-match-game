import { BaseComponent } from '../../../BaseComponents/BaseComponent';
import './settings-game.scss';

export class SettingsGame extends BaseComponent {
  settingGameCard: BaseComponent;

  settingGameCardSelect: HTMLSelectElement;

  settingGameCardTitle: BaseComponent;

  settingGameCardOptionAnimal: HTMLOptionElement;

  settingGameCardOptionCars: HTMLOptionElement;

  settingDifficult: BaseComponent;

  settingDifficultSelect: HTMLSelectElement;

  settingDifficultTitle: BaseComponent;

  settingDifficultOptionEase: HTMLOptionElement;

  settingDifficultOptionHard: HTMLOptionElement;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['settings-game']);

    // create sellect difficult
    this.settingDifficultSelect = <HTMLSelectElement>document.createElement('select');
    this.settingDifficultSelect.classList.add('settings-select');
    this.settingDifficultOptionEase = <HTMLOptionElement>document.createElement('option');
    this.settingDifficultOptionEase.text = 'ease';
    this.settingDifficultOptionHard = <HTMLOptionElement>document.createElement('option');
    this.settingDifficultOptionHard.text = 'hard';
    this.settingDifficultSelect.add(this.settingDifficultOptionEase);
    this.settingDifficultSelect.add(this.settingDifficultOptionHard);

    // create select cards type
    this.settingGameCardSelect = <HTMLSelectElement>document.createElement('select');
    this.settingGameCardSelect.classList.add('settings-select');
    this.settingGameCardOptionAnimal = <HTMLOptionElement>document.createElement('option');
    this.settingGameCardOptionAnimal.text = 'animal';
    this.settingGameCardOptionCars = <HTMLOptionElement>document.createElement('option');
    this.settingGameCardOptionCars.text = 'cars';
    this.settingGameCardSelect.add(this.settingGameCardOptionAnimal);
    this.settingGameCardSelect.add(this.settingGameCardOptionCars);

    this.settingDifficult = new BaseComponent(this.element, 'div', ['setting-game-wrapper']);
    this.settingDifficultTitle = new BaseComponent(
      this.settingDifficult.element,
      'h2',
      ['setting-title'],
      'Difficulty'
    );
    this.settingDifficult.element.append(this.settingDifficultSelect);

    this.settingGameCard = new BaseComponent(this.element, 'div', ['setting-game-wrapper']);
    this.settingGameCardTitle = new BaseComponent(this.settingGameCard.element, 'h2', ['setting-title'], 'Game cards');
    this.settingGameCard.element.append(this.settingGameCardSelect);
  }
}

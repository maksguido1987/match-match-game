import { Header } from '../components/Header/Header';
import { Main } from '../components/Main/Main';
import { ScoreItem } from '../components/Main/Pages/BestScore/ScoreItem';
import { Database } from './Database';
import { Router } from './Router';

export class App {
  private readonly header: Header;

  private readonly main: Main;

  private readonly router: Router;

  private readonly iDB: Database;

  constructor(readonly rootElement: HTMLElement) {
    this.header = new Header(rootElement);
    this.main = new Main(rootElement, this.header.headerAvatar);

    this.iDB = new Database();
    this.iDB
      .init('maksguido1987')
      .then(() => this.iDB.readFiltered())
      .then((users) => {
        users.forEach((user) => {
          if (user) {
            new ScoreItem(
              this.main.bestScore.bestScoreContainer.element,
              user.name,
              user.surname,
              user.email,
              user.score,
              user.avatar
            );
          }
        });
      });
    this.router = new Router(this.header.headerMenu, this.main, this.header);
    this.router.addPage();

    this.header.onPageShow = () => {
      this.main.formRegister.showElement();
    };

    this.main.formRegister.onHideForm = () => {
      this.iDB
        .write({
          name: this.main.formRegister.topFieldForm.inputFirstName.formFirstNameInput.getInputValue(),
          surname: this.main.formRegister.topFieldForm.inputLastName.formLastNameInput.getInputValue(),
          score: this.main.game.score,
          email: this.main.formRegister.topFieldForm.inputEmail.inputEmail.getInputValue(),
          avatar: localStorage.getItem('avatar'),
        })
        .then(() => this.iDB.readFiltered());
      localStorage.clear();
      this.header.onShowStartButton();
      this.main.formRegister.hideElement();
    };

    this.header.onStartGame = () => {
      this.main.aboutGamePage.hideElement();
      this.main.settingsGame.hideElement();
      this.main.game.showElement();
      this.main.bestScore.hideElement();
      this.main.startGame();
      this.main.game.timer.clearTimer();
    };

    this.header.onStopTimer = () => {
      this.main.game.timer.stopTimer();
    };

    this.main.game.gamePopup.openBeastScorePage = () => {
      this.main.game.gamePopup.hideElement();
      this.main.game.hideElement();
      this.main.bestScore.showElement();
      this.main.bestScore.bestScoreContainer.element.innerHTML = '';
      this.iDB
        .write({
          name: this.main.formRegister.topFieldForm.inputFirstName.formFirstNameInput.input.value,
          surname: this.main.formRegister.topFieldForm.inputLastName.formLastNameInput.input.value,
          score: this.main.game.score,
          email: this.main.formRegister.topFieldForm.inputEmail.inputEmail.input.value,
        })
        .then(() => this.iDB.readFiltered())
        .then((users) => {
          users.forEach((user) => {
            if (user) {
              new ScoreItem(
                this.main.bestScore.bestScoreContainer.element,
                user.name,
                user.surname,
                user.email,
                user.score,
                user.avatar
              );
            }
          });
        });
      this.header.headerMenu.bestScore.element.classList.add('active-menu-link');
      this.header.headerMenu.aboutGame.element.classList.remove('active-menu-link');
      this.header.headerMenu.gameSettings.element.classList.remove('active-menu-link');
      this.header.stoptGame.hideElement();
      this.header.onShowStartButton();
      this.main.game.timer.clearTimer();
      window.location.hash = 'best-score';
    };
  }
}

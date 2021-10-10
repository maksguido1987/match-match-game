import { BaseComponent } from '../../../BaseComponents/BaseComponent';
import './best-score.scss';
import { ScoreItem } from './ScoreItem';
import { Database } from '../../../../Application/Database';

export class BestScore extends BaseComponent {
  readonly bestScoreTitle: BaseComponent;

  bestScoreContainer: BaseComponent;

  scoreItem!: ScoreItem;

  readonly iDB!: Database;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['best-score']);

    this.bestScoreTitle = new BaseComponent(this.element, 'h2', ['best-score-title'], 'Best players');
    this.bestScoreContainer = new BaseComponent(this.element);
    this.iDB = new Database();
  }
}

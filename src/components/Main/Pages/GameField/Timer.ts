import { BaseComponent } from '../../../BaseComponents/BaseComponent';
import './timer.scss';

export class Timer extends BaseComponent {
  private timer!: number;

  time: number;

  constructor(parentNode: HTMLElement) {
    super(parentNode, 'div', ['timer'], '00:00');

    this.time = 3600;
  }

  startTimer(): void {
    this.timer = window.setInterval(() => {
      const min = (this.time / 60) % 60;
      const sec = (this.time % 60).toLocaleString('en', { minimumIntegerDigits: 2 });
      this.element.textContent = `0${Math.trunc(min)}:${sec}`;
      this.time += 1;
    }, 1000);
  }

  stopTimer(): void {
    clearInterval(this.timer);
  }

  clearTimer(): void {
    this.time = 3600;
    this.element.textContent = '00:00';
  }
}

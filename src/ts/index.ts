import '../scss/style.scss';
import '../index.html';
import { App } from '../Application/App';

window.onload = () => {
  new App(document.body);
};

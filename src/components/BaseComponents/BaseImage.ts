export class BaseImage {
  readonly image: HTMLImageElement;

  constructor(parentNode: HTMLElement | null = null, styles: string[] = [], srcAttr = '', altAttr = '') {
    this.image = document.createElement('img');
    this.image.src = srcAttr;
    this.image.alt = altAttr;
    this.image.classList.add(...styles);
    if (parentNode) parentNode.append(this.image);
  }

  hideImage(): void {
    this.image.style.display = 'none';
  }

  showImage(): void {
    this.image.style.display = 'block';
  }
}

export default class Trello {
  constructor(page) {
    this.page = page;
    this.draggableEl = null;
    this.draggableCloneEl = null;
    this.x = null;
    this.y = null;
  }

  init() {
    this.page.addEventListener('mousedown', this.mouseDownHandler.bind(this));
    this.page.addEventListener('mousemove', this.mouseMoveHandler.bind(this));
    this.page.addEventListener('mouseup', this.mouseUpHandler.bind(this));
    // this.page.addEventListener('mouseleave', this.mouseLeaveHandler);
  }

  /**
   * Событие нажатие кнопки мыши
   * @param {*} event -
   */
  mouseDownHandler(event) {
    event.preventDefault();
    console.log('pageY', event.pageY);
    if (event.target.tagName !== 'P') return;

    this.draggableEl = event.target;
    this.draggableCloneEl = event.target.cloneNode(true);
    this.draggableCloneEl.classList.add('draggable');
    const { top, left } = this.draggableEl.getBoundingClientRect();

    this.y = event.pageY - top;
    this.x = event.pageX - left;
    console.log('top', top);

    this.draggableCloneEl.style.top = `${window.scrollY + top}px`;
    this.draggableCloneEl.style.left = `${window.scrollX + left}px`;
    this.draggableEl.style.display = 'none';
    document.body.appendChild(this.draggableCloneEl);
  }

  /**
   * Событие движения мыши
   * @param {*} event -
   */
  mouseMoveHandler(event) {
    event.preventDefault();
    if (!this.draggableEl) return;
    this.draggableCloneEl.style.top = `${window.scrollY + event.pageY - this.y}px`;
    this.draggableCloneEl.style.left = `${window.scrollX + event.pageX - this.x}px`;
  }

  /**
   * Отпускание кнопки мыши
   * @param {*} event -
   */
  mouseUpHandler(event) {
    event.preventDefault();
    if (!this.draggableEl) return;

    if (event.currentTarget.classList.contains('trello')) {
      document.body.removeChild(this.draggableCloneEl);
      this.draggableEl.style.display = 'block';
      this.draggableEl.classList.remove('draggable');
      this.draggableEl = null;
      this.draggableCloneEl = null;
      return;
    }

    this.draggableEl = null;
    this.draggableCloneEl = null;
  }
}

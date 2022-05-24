/* eslint-disable max-len */
export default class Trello {
  constructor(page) {
    this.page = page;
    this.draggableEl = null; // Переносимый элемент
    this.draggableCloneEl = null; // Клон переносимого элемента
    this.startPositionX = null; // Начальная позиция X клона
    this.startPositionY = null; // Начальная позиция Y клона
    this.draggableElHeight = null; // Высота переносимого элемента
  }

  /**
   * Старт приложения, установка событий
   */
  init() {
    const blocks = this.page.querySelectorAll('.block'); // блоки с карточками
    blocks.forEach((item) => {
      item.addEventListener('click', this.blockClickHandler.bind(this));
      item.addEventListener('mouseleave', this.constructor.mouseLeaveHandler);
      item.querySelector('.block__items')
        .addEventListener('mousedown', this.mouseDownHandler.bind(this));
    });

    this.page.addEventListener('mousemove', this.mouseMoveHandler.bind(this));
    this.page.addEventListener('mouseup', this.mouseUpHandler.bind(this));
  }

  /**
   * По событию mouseleave удаляет препросмотр позиции при уходе с блока
   * @param {*} event - event
   */
  static mouseLeaveHandler(event) {
    event.preventDefault();
    const prevEl = event.target.querySelector('.prev-item');
    if (prevEl) prevEl.remove();
  }

  /**
   * Событие нажатие кнопки мыши
   * @param {*} event -
   */
  mouseDownHandler(event) {
    event.preventDefault();
    if (event.target.tagName !== 'P') return;
    // Получаем данные переносимого элемента
    this.draggableEl = event.target;
    const { top, left, height } = this.draggableEl.getBoundingClientRect();
    this.draggableElHeight = height;
    // Клонируем
    this.draggableCloneEl = this.draggableEl.cloneNode(true);
    this.draggableCloneEl.classList.add('draggable');

    // Позиция для определения положения курсора при захвате
    this.startPositionY = event.pageY - top;
    this.startPositionX = event.pageX - left;

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
    this.draggableCloneEl.style.top = `${window.scrollY + event.pageY - this.startPositionY}px`;
    this.draggableCloneEl.style.left = `${window.scrollX + event.pageX - this.startPositionX}px`;
    // this.draggableCloneEl.style.cursor = 'grab';
    // Элемент под таскаемым элементом
    const underEl = document.elementFromPoint(event.pageX, event.pageY);

    if (underEl.tagName === 'P') {
      const { top: underElTop, height: underElHeight } = underEl.getBoundingClientRect();

      // Вставляем перед элементом
      if (event.pageY < (underElTop + underElHeight / 2)) {
        // Получаем предыдущий элемент
        const prevEl = underEl.previousElementSibling;
        // Если уже есть препросмотр выходим
        if (prevEl && prevEl.classList.contains('prev-item')) return;
        this.removePrevItem();
        const newPrevEl = this.constructor.createGhostItem(this.draggableElHeight);
        underEl.before(newPrevEl);
      }

      // Вставляем после элемента
      if (event.pageY >= (underElTop + underElHeight / 2)) {
        // Получаем предыдущий элемент
        const nextEl = underEl.nextElementSibling;
        // Если уже есть препросмотр выходим
        if (nextEl && nextEl.classList.contains('prev-item')) return;
        this.removePrevItem();
        const newPrevEl = this.constructor.createGhostItem(this.draggableElHeight);
        underEl.after(newPrevEl);
      }
    }

    // Вставляем в конец списка, если наводим на блок,но не элемент списка
    if (underEl.closest('.block')) {
      if (this.page.querySelector('.prev-item')) return;
      const newPrevEl = this.constructor.createGhostItem(this.draggableElHeight);
      underEl.closest('.block').querySelector('.block__items').append(newPrevEl);
    }

    // Если вышли за пределы блока удаляем элемент предпросмотра
    if (underEl.classList.contains('trello')) {
      this.removePrevItem();
    }
  }

  /**
   * Отпускание кнопки мыши
   * @param {*} event -
   */
  mouseUpHandler(event) {
    event.preventDefault();
    if (!this.draggableEl) return;

    if (event.target.classList.contains('trello')) {
      document.body.removeChild(this.draggableCloneEl);
      this.draggableEl.style.display = 'block';
      this.draggableEl.classList.remove('draggable');
      this.draggableEl = null;
      this.draggableCloneEl = null;
      return;
    }

    const prevEl = this.page.querySelector('.prev-item');

    if (prevEl) {
      prevEl.replaceWith(this.draggableEl);
    }

    this.draggableEl.style.display = 'block';
    document.body.removeChild(this.draggableCloneEl);
    this.draggableEl = null;
    this.draggableCloneEl = null;
  }

  static createGhostItem(height) {
    const div = document.createElement('div');
    div.classList.add('prev-item');
    div.style.height = `${height}px`;
    return div;
  }

  /**
   * Удаляем элемент предпросмотра,если он есть
   */
  removePrevItem() {
    const el = this.page.querySelector('.prev-item');
    if (el) el.remove();
  }

  /**
   * Обработка кликов по блоку
   */
  blockClickHandler(event) {
    event.preventDefault();
    const currentEl = event.target;
    // console.log(currentEl);

    if (currentEl.classList.contains('block__item-remove')) {
      currentEl.closest('.block__item').remove();
    }
    // Кнопка создать новую карточку
    if (currentEl.dataset.addButton === 'create') {
      const isOpenAddWindow = this.page.querySelector('.block__add');
      if (isOpenAddWindow) {
        isOpenAddWindow.remove();
        this.page.querySelector('.hidden').classList.remove('hidden');
      }
      currentEl.before(this.constructor.createAddFormElement());
      currentEl.classList.add('hidden');
    }

    // Кнопка добавить в форме
    if (currentEl.dataset.addButton === 'add') {
      const text = event.currentTarget.querySelector('.block__add-field').value.trim();
      if (text === '') return;
      const newItemEl = this.constructor.createCardItem(text);
      event.currentTarget.querySelector('.block__items').append(newItemEl);
      event.currentTarget.querySelector('.block__add').remove();
      event.currentTarget.querySelector('[data-add-button="create"]').classList.remove('hidden');
    }

    // Кнопка закрыть в форме
    if (currentEl.dataset.addButton === 'close') {
      event.currentTarget.querySelector('.block__add').remove();
      event.currentTarget.querySelector('[data-add-button="create"]').classList.remove('hidden');
    }
  }

  /**
   * Создание элемента вводи новой карточки
   */
  static createAddFormElement() {
    const blockAddEl = document.createElement('div');
    blockAddEl.classList.add('block__add');

    const textArea = document.createElement('textArea');
    textArea.classList.add('block__add-field');
    textArea.setAttribute('rows', 3);
    textArea.setAttribute('placeholder', 'Введите текст карточки');

    const blockAddButtons = document.createElement('div');
    blockAddButtons.classList.add('block__add-buttons');

    const addButton = document.createElement('button');
    addButton.classList.add('block__add-button');
    addButton.dataset.addButton = 'add';
    addButton.textContent = 'Добавить';

    const closeButton = document.createElement('button');
    closeButton.classList.add('block__add-button');
    closeButton.dataset.addButton = 'close';
    closeButton.textContent = 'Закрыть';

    blockAddButtons.append(addButton);
    blockAddButtons.append(closeButton);

    blockAddEl.append(textArea);
    blockAddEl.append(blockAddButtons);

    return blockAddEl;
  }

  /**
   * Создает новый элемент списка
   * @param {*} text - текст карточки
   * @returns html элемент
   */
  static createCardItem(text) {
    const el = document.createElement('p');
    el.classList.add('block__item');
    el.textContent = text;
    const span = document.createElement('span');
    span.classList.add('block__item-remove');
    el.append(span);
    return el;
  }
}

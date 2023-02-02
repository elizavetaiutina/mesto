export default class Section {
  constructor({ renderer, selectorContainer }) {
    this._renderer = renderer;
    this._container = document.querySelector(selectorContainer);
  }

  //перебирает массив. Внутри вызывает для каждого элемента массива метод addItem
  renderItems(array) {
    array.forEach((item) => {
      this.addItemAppend(item);
    });
  }

  //в начало
  addItemPrepend(item) {
    const card = this._renderer(item);
    this._container.prepend(card);
  }

  //в конец
  addItemAppend(element) {
    const card = this._renderer(element);
    this._container.append(card);
  }
}

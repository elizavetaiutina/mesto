export default class Section {
  constructor({ renderer }, selectorContainer) {
    this._renderer = renderer;
    this._container = selectorContainer;
  }

  //перебирает массив. Внутри вызывает для каждого элемента массива метод addItem
  renderItems(array) {
    array.forEach((item) => {
      this._renderer(item);
    });
  }

  //принимает параметр element и вставляет его в контейнер
  addItemPrepend(element) {
    this._container.prepend(element); //в начало
  }

  addItem(element) {
    this._container.append(element); //в конец
  }
}

import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ selectorPopup, handleFormSubmit }) {
    super(selectorPopup);
    this._form = this._popup.querySelector(".form");
    this._button = this._popup.querySelector(".form__button-save");
    this._textButton = this._button.textContent;
    this._inputList = this._form.querySelectorAll(".form__input");
    this._handleFormSubmit = handleFormSubmit;
    this._buttonText = this._button.textContent; //сохранили изначальый текст
  }

  setInputValues(data) {
    this._inputList.forEach((input) => {
      // тут вставляем в `value` инпута данные из объекта по атрибуту `name` этого инпута
      input.value = data[input.name];
    });
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }
  // Отображение уведомления на кнопке пока данные загружаются
  _renderLoading(isLoading, loadingText = "Сохранение...") {
    if (isLoading) {
      this._button.textContent = loadingText;
    } else {
      this._button.textContent = this._buttonText;
    }
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();

      this._renderLoading(true);
      // добавим вызов функции _handleFormSubmit передадим ей объект — результат работы _getInputValues
      this._handleFormSubmit(this._getInputValues())
        .then(() => this.close())
        .catch((err) => {
          console.log(`Ошибка: ${err}.`);
        })
        .finally(() => {
          this._renderLoading(false);
        });
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}

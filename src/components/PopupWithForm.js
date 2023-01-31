import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ selectorPopup, handleFormSubmit }) {
    super(selectorPopup);
    this._form = this._popup.querySelector(".form");
    this._button = this._popup.querySelector(".form__button-save");
    this._textButton = this._button.textContent;
    this._inputList = this._form.querySelectorAll(".form__input");
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      // добавим вызов функции _handleFormSubmit передадим ей объект — результат работы _getInputValues
      this._handleFormSubmit(
        this._getInputValues(),
        this._button,
        this._textButton
      );
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}

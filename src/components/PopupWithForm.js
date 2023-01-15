/* Создайте класс PopupWithForm, который наследует от Popup. Этот класс
Кроме селектора попапа принимает в конструктор колбэк сабмита формы.
Содержит приватный метод _getInputValues, который собирает данные всех полей формы.
Перезаписывает родительский метод setEventListeners. Метод setEventListeners класса 
PopupWithForm должен не только добавлять обработчик клика иконке закрытия, но и 
добавлять обработчик сабмита формы.
Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и
сбрасываться.
Для каждого попапа создавайте свой экземпляр класса PopupWithForm.
*/
import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ selectorPopup, handleFormSubmit }) {
    super(selectorPopup);
    this._handleFormSubmit = handleFormSubmit;
  }

  _getInputValues() {
    this._form = this._popup.querySelector(".form");
    this._inputList = this._form.querySelectorAll(".form__input");
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form = this._popup.querySelector(".form");
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();

      // добавим вызов функции _handleFormSubmit передадим ей объект — результат работы _getInputValues
      this._handleFormSubmit(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}

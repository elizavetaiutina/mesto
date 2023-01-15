/*Создайте класс Popup, который отвечает за открытие и закрытие попапа. Этот класс:
Принимает в конструктор единственный параметр — селектор попапа.
Содержит публичные методы open и close, которые отвечают за открытие и закрытие попапа.
Содержит приватный метод _handleEscClose, который содержит логику закрытия попапа клавишей Esc.
Содержит публичный метод setEventListeners, который добавляет слушатель клика иконке закрытия попапа. 
Модальное окно также закрывается при клике на затемнённую область вокруг формы.*/

export default class Popup {
  constructor(selectorPopup) {
    this._popup = selectorPopup;
  }

  setEventListeners() {
    this._buttonExitPopup = this._popup.querySelector(".pop-up__exit");

    this._buttonExitPopup.addEventListener("click", () => {
      this.close();
    });
    document.addEventListener("keydown", (event) => {
      this._handleEscClose(event);
    });
    this._popup.addEventListener("click", (event) => {
      this._handleOverlayClose(event);
    });
  }

  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }

  _handleOverlayClose(event) {
    if (event.target.classList.contains("pop-up_opened")) {
      this.close();
    }
  }

  open() {
    this._popup.classList.add("pop-up_opened");

    //this.setEventListeners();
  }

  close() {
    this._popup.classList.remove("pop-up_opened");

    this._buttonExitPopup.removeEventListener("click", () => {
      this.close();
    });
    document.removeEventListener("keydown", (event) => {
      this._handleEscClose(event);
    });
    this._popup.removeEventListener("click", (event) => {
      this._handleOverlayClose(event);
    });
  }
}

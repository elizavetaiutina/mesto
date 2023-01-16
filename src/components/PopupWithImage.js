/*Создайте класс PopupWithImage, который наследует от Popup. 
Этот класс должен перезаписывать родительский метод open. 
В методе open класса PopupWithImage нужно вставлять в попап картинку 
с src изображения и подписью к картинке.*/
import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
    this._imagePopup = this._popup.querySelector(".open-card__image");
    this._namePopup = this._popup.querySelector(".open-card__name");
  }
  open(data) {
    super.open();

    this._imagePopup.src = data.link;
    this._imagePopup.alt = data.name;
    this._namePopup.textContent = data.name;
  }
}

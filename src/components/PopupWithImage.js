/*Создайте класс PopupWithImage, который наследует от Popup. 
Этот класс должен перезаписывать родительский метод open. 
В методе open класса PopupWithImage нужно вставлять в попап картинку 
с src изображения и подписью к картинке.*/
import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(selectorPopup) {
    super(selectorPopup);
  }
  open(data) {
    super.open();

    const imagePopup = this._popup.querySelector(".open-card__image");
    const namePopup = this._popup.querySelector(".open-card__name");
    imagePopup.src = data.link;
    imagePopup.alt = data.name;
    namePopup.textContent = data.name;
  }
}

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

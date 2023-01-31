import Popup from "./Popup.js";

export default class PopupWithDeleteCard extends Popup {
  constructor({ selectorPopup }) {
    super(selectorPopup);
    this._buttonDelete = this._popup.querySelector(".pop-up__button-delete");
  }

  callBackDeleteCardWithPopup(callback) {
    this._callBackDeleteCard = callback;
  }

  setEventListeners() {
    super.setEventListeners();
    this._buttonDelete.addEventListener("click", () => {
      this._callBackDeleteCard();
      this.close();
    });
  }
}

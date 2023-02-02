import Popup from "./Popup.js";

export default class PopupWithDeleteCard extends Popup {
  constructor({ selectorPopup }) {
    super(selectorPopup);
    this._buttonDelete = this._popup.querySelector(".pop-up__button-delete");
    this._buttonText = this._buttonDelete.textContent;
  }

  callBackDeleteCardWithPopup(callback) {
    this._callBackDeleteCard = callback;
  }

  // Отображение уведомления на кнопке пока происходит запрос
  renderLoading(isLoading, loadingText = "Удаление...") {
    if (isLoading) {
      this._buttonDelete.textContent = loadingText;
    } else {
      this._buttonDelete.textContent = this._buttonText;
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._buttonDelete.addEventListener("click", () => {
      this._callBackDeleteCard();
    });
  }
}

export default class Popup {
  constructor(selectorPopup) {
    this._popup = document.querySelector(selectorPopup);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  setEventListeners() {
    this._buttonExitPopup = this._popup.querySelector(".pop-up__exit");

    this._buttonExitPopup.addEventListener("click", () => {
      this.close();
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
    document.addEventListener("keydown", this._handleEscClose);
  }

  close() {
    this._popup.classList.remove("pop-up_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }
}

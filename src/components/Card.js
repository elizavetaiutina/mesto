export default class Card {
  constructor({ data, templateSelector, handleCardClick }) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  // Получение шаблона карты
  _getTemplate() {
    const newCard = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return newCard;
  }

  // Навешивание слушателей
  _setEventListeners() {
    this._buttonLike.addEventListener("click", () => {
      this._handleLikeCard();
    });
    this._buttonDelete.addEventListener("click", () => {
      this._handleDeleteCard();
    });
    this._imageCard.addEventListener("click", () => {
      this._handleCardClick();
    });
  }

  _handleLikeCard() {
    this._buttonLike.classList.toggle("card__button-like_status_active");
  }

  _handleDeleteCard() {
    this._element.remove();
    this._element = null;
  }

  // Вставит данные в разметку и подготовит карточку к публикации
  generateCard() {
    this._element = this._getTemplate();
    this._buttonLike = this._element.querySelector(".card__button-like");
    this._buttonDelete = this._element.querySelector(".card__button-delete");
    this._imageCard = this._element.querySelector(".card__image");
    this._titleCard = this._element.querySelector(".card__name");

    this._setEventListeners();

    this._imageCard.src = this._link;
    this._imageCard.alt = this._name;
    this._titleCard.textContent = this._name;

    return this._element;
  }
}

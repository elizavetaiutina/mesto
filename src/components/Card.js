export default class Card {
  constructor({
    data,
    userId,
    templateSelector,
    handleCardClick,
    sendIdCardToPopup,
    sendLikeCard,
    sendDislikeCard,
  }) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._arrayLikesCard = data.likes;
    this._ownerId = data.owner._id;
    this._userId = userId;
    this._templateSelector = templateSelector;

    this._handleCardClick = handleCardClick;
    this._sendIdCardToPopup = sendIdCardToPopup;
    this._sendLikeCard = sendLikeCard;
    this._sendDislikeCard = sendDislikeCard;
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
      this._sendIdCardToPopup(this._id); //прокидываем айди карты в попап удаления
    });
    this._imageCard.addEventListener("click", () => {
      this._handleCardClick();
    });
  }

  _handleLikeCard() {
    if (this.isLiked) {
      console.log("лайк не нужен, снимаем");
      this._sendDislikeCard(this._id); // отправляем запрос на удаление лайка на сервер
    } else {
      console.log("лайк нужен, ставим");
      this._sendLikeCard(this._id); // отправляем запрос на сервер
    }
  }

  likeButton() {
    this.isLiked = true;
    this._buttonLike.classList.add("card__button-like_status_active");
  }

  dislikeButton() {
    this.isLiked = false;
    this._buttonLike.classList.remove("card__button-like_status_active");
  }

  updateAmountLike(currentLikes) {
    this._amountLike.textContent = currentLikes;
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  //отображение лайка при загрузке
  _showButtonLike() {
    if (this._arrayLikesCard.some((like) => like._id == this._userId)) {
      this.likeButton(); //покажи что лайк стоит
    } else {
      this.dislikeButton(); //покажи что его нет
    }
  }

  //отображение корзины
  _showButtonDelete() {
    if (this._ownerId != this._userId) {
      this._buttonDelete.style.display = "none";
    } else {
      this._buttonDelete.style.display = "block";
    }
  }

  // Вставит данные в разметку и подготовит карточку к публикации
  generateCard() {
    this._element = this._getTemplate();
    this._buttonLike = this._element.querySelector(".card__button-like");
    this._amountLike = this._element.querySelector(".card__like-amount");
    this._buttonDelete = this._element.querySelector(".card__button-delete");
    this._imageCard = this._element.querySelector(".card__image");
    this._titleCard = this._element.querySelector(".card__name");

    this._setEventListeners();
    this._showButtonLike(); // отображение кнопки лайк
    this._showButtonDelete(); //кнопка удаления появится только у своих карты

    this._imageCard.src = this._link;
    this._imageCard.alt = this._name;
    this._titleCard.textContent = this._name;
    this._amountLike.textContent = this._arrayLikesCard.length;

    return this._element;
  }
}

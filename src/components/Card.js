export default class Card {
  constructor({ data, templateSelector, handleCardClick, handleDelete }) {
    this._data = data;
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._ownerId = data.owner._id;
    this._arrayLikes = data.likes;
    //this.isLiked = false;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDelete = handleDelete;
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
      this._handleDelete(this._id);
      //this._handleOpenPopup();
    });
    this._imageCard.addEventListener("click", () => {
      this._handleCardClick();
    });
  }
  /*
  _handleLikeCard() {
    console.log(this.isLiked);
    this.like();
    console.log(this.isLiked);
    //this._buttonLike.classList.toggle("card__button-like_status_active");
  }*/
  /*
  like() {
    this.isLiked = !this.isLiked;
    this._buttonLike.classList.toggle("card__button-like_status_active");
    if (this.isLiked === true) {
      //console.log("like");
      this._likes.push({});
      this._amountLike.textContent = this._likes.length;
      //console.log(this._likes.length);
      //console.log(typeof this._likes.length);
    } else {
      this._likes.pop();
      this._amountLike.textContent = this._likes.length;
    }
  }*/

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _showButtonDelete() {
    if (this._ownerId == "03fe094c9f59063be037d50c") {
      console.log(this._element);
      this._buttonDelete.style.display = "block";
    } else {
      this._buttonDelete.style.display = "none";
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
    //console.log(this._likes);
    //console.log("id", this._id);
    //console.log(this._arrayLikes);
    this._setEventListeners();
    this._showButtonDelete(); //кнопка удаления появится только у своих карты

    this._imageCard.src = this._link;
    this._imageCard.alt = this._name;
    this._titleCard.textContent = this._name;
    this._amountLike.textContent = this._arrayLikes.length;

    return this._element;
  }
}

/*
Создайте класс Card, который создаёт карточку с текстом и ссылкой на изображение:
принимает в конструктор её данные и селектор её template-элемента;
содержит приватные методы, которые работают с разметкой, устанавливают слушателей событий;
содержит приватные методы для каждого обработчика;
содержит один публичный метод, который возвращает полностью работоспособный и наполненный данными элемент карточки.
Для каждой карточки создайте экземпляр класса Card.*/

import { openPopup } from "./utility.js";
import { popupOpenCard } from "./consts.js";

class Card {
  constructor(data, templateSelector, openPopup, popupOpenCard) {
    this._name = data.name;
    this._link = data.link;
    this._templateSelector = templateSelector;
    this._openPopup = openPopup;
    this._popupOpenCard = popupOpenCard;
  }
  //методы

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
    this._element
      .querySelector(".card__button-like")
      .addEventListener("click", () => {
        this._handleLikeCard();
      });
    this._element
      .querySelector(".card__button-delete")
      .addEventListener("click", () => {
        this._handleDeleteCard();
      });
    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => {
        this._handlePopupCard();
      });
  }

  // Метод на открытие POP-UP карточки
  _handlePopupCard() {
    openPopup(popupOpenCard);
    popupOpenCard.querySelector(".open-card__image").src =
      this._element.querySelector(".card__image").src;
    popupOpenCard.querySelector(".open-card__image").alt =
      this._element.querySelector(".card__name").textContent;
    popupOpenCard.querySelector(".open-card__name").textContent =
      this._element.querySelector(".card__name").textContent;
  }

  // Метод поставить и убрать лайк
  _handleLikeCard() {
    this._element
      .querySelector(".card__button-like")
      .classList.toggle("card__button-like_status_active");
  }

  // Метод удаления карточки
  _handleDeleteCard() {
    this._element.remove();
    this._element = null;
    /*this._element
      .querySelector(".card__button-delete")
      .closest(".card")
      .remove();*/
  }

  // Вставит данные в разметку и подготовит карточку к публикации
  generateCard() {
    this._element = this._getTemplate();

    this._setEventListeners();

    this._element.querySelector(".card__image").src = this._link;
    this._element.querySelector(".card__image").alt = this._name;
    this._element.querySelector(".card__name").textContent = this._name;

    return this._element;
  }
}

export { Card };

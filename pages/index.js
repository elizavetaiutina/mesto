import { initialCards, objectValidation } from "../utils/constants.js";

import {
  popupOpenCard,
  cardContainer,
  profileName,
  profileProfession,
  buttonEditProfile,
  popupEditProfile,
  formEditProfile,
  nameInput,
  jobInput,
  buttonAddCard,
  popupAddCard,
  formAddCard,
} from "../utils/elements.js";

import Section from "../components/Section.js";
import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";

/* ---------- Popup "Изменение данных профиля" ---------- */
const userInfo = new UserInfo({
  name: profileName,
  about: profileProfession,
});

const newPopupProfile = new PopupWithForm({
  selectorPopup: popupEditProfile,
  handleFormSubmit: (formData) => {
    userInfo.setUserInfo(formData);
    newPopupProfile.close();
  },
});

newPopupProfile.setEventListeners();

buttonEditProfile.addEventListener("click", () => {
  newPopupProfile.open();
  nameInput.value = userInfo.getUserInfo().name;
  jobInput.value = userInfo.getUserInfo().about;
});

/* ---------- Popup "Добавление карточки" ---------- */
const newPopupAddCard = new PopupWithForm({
  selectorPopup: popupAddCard,
  handleFormSubmit: (formData) => {
    const newCard = new Card({
      data: formData,
      templateSelector: ".card-template",
      handleCardClick: () => {
        newPopupOpenCard.open(formData);
      },
    });
    console.log(newCard);
    cardContainer.prepend(newCard.generateCard());
    newPopupAddCard.close();
  },
});

newPopupAddCard.setEventListeners();

buttonAddCard.addEventListener("click", () => {
  newPopupAddCard.open();
});

/* ---------- Popup "Увеличеная карточка" ---------- */
const newPopupOpenCard = new PopupWithImage(popupOpenCard);
newPopupOpenCard.setEventListeners();

/* ---------- Отрисовываем карточки при загрузке страницы ---------- */

const cardListArray = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      const card = new Card({
        data: item,
        templateSelector: ".card-template",
        handleCardClick: () => {
          newPopupOpenCard.open(item);
        },
      });

      cardListArray.addItem(card.generateCard());
    },
  },
  cardContainer
);

cardListArray.renderItems();

/* ---------- Валидация 2х форм---------- */
const validationFormEditProfile = new FormValidator(
  objectValidation,
  formEditProfile
);
validationFormEditProfile.enableValidation();

const validationFormAddCard = new FormValidator(objectValidation, formAddCard);
validationFormAddCard.enableValidation();

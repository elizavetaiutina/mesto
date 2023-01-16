import "./index.css";

import { initialCards, objectValidation } from "../utils/constants.js";

import {
  selectorPopupOpenCard,
  cardContainer,
  profileName,
  profileProfession,
  buttonEditProfile,
  selectorPopupEditProfile,
  formEditProfile,
  nameInput,
  jobInput,
  buttonAddCard,
  selectorPopupAddCard,
  formAddCard,
} from "../utils/elements.js";

import Section from "../components/Section.js";
import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";

/* ---------- функция создания карточки ---------- */
function createCard(item) {
  const newCard = new Card({
    data: item,
    templateSelector: ".card-template",
    handleCardClick: () => {
      popupOpenCard.open(item);
    },
  });
  const cardElement = newCard.generateCard();
  return cardElement;
}

/* ---------- Popup "Изменение данных профиля" ---------- */
const userInfo = new UserInfo({
  name: profileName,
  about: profileProfession,
});

const popupProfile = new PopupWithForm({
  selectorPopup: selectorPopupEditProfile,
  handleFormSubmit: (formData) => {
    userInfo.setUserInfo(formData);
    popupProfile.close();
  },
});

popupProfile.setEventListeners();

buttonEditProfile.addEventListener("click", () => {
  popupProfile.open();
  const infoFromProfile = userInfo.getUserInfo();
  nameInput.value = infoFromProfile.name;
  jobInput.value = infoFromProfile.about;
});

/* ---------- Popup "Добавление карточки" ---------- */
const popupAddCard = new PopupWithForm({
  selectorPopup: selectorPopupAddCard,
  handleFormSubmit: (formData) => {
    const newCard = createCard(formData);
    console.log(newCard);
    cardListArray.addItem(newCard);
    popupAddCard.close();
  },
});

popupAddCard.setEventListeners();

buttonAddCard.addEventListener("click", () => {
  popupAddCard.open();
});

/* ---------- Popup "Увеличеная карточка" ---------- */
const popupOpenCard = new PopupWithImage(selectorPopupOpenCard);
popupOpenCard.setEventListeners();

/* ---------- Отрисовываем карточки при загрузке страницы ---------- */

const cardListArray = new Section(
  {
    data: initialCards,
    renderer: (item) => {
      const card = createCard(item);

      cardListArray.addItem(card);
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

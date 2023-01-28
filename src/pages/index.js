import "./index.css";

import { objectValidation } from "../utils/constants.js";

import {
  selectorPopupOpenCard,
  cardContainer,
  profileName,
  profileProfession,
  profileAvatar,
  editAvatar,
  formEditAvatar,
  selectorEditAvatar,
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

import Api from "../components/API.js";

/* ---------- Функция создания карточки ---------- */

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
/* ---------- Popup "Изменение аватара профиля" ---------- */

const popupAvatar = new PopupWithForm({
  selectorPopup: selectorEditAvatar,
  handleFormSubmit: (formData) => {
    profileAvatar.src = formData.link;
    popupAvatar.close();
  },
});

popupAvatar.setEventListeners();

editAvatar.addEventListener("click", () => {
  popupAvatar.open();
});

/* ---------- Popup "Изменение данных профиля" ---------- */

const userInfo = new UserInfo({
  name: profileName,
  about: profileProfession,
});

const popupProfile = new PopupWithForm({
  selectorPopup: selectorPopupEditProfile,
  handleFormSubmit: (formData) => {
    api.editUserInfo(formData).then((data) => {
      userInfo.setUserInfo(data);
    });
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
    api.createNewCard(formData).then((data) => {
      cardListArray.addItem(createCard(data));
    });
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

/* ---------- ЗАПРОС К СЕРВЕРУ ---------- */

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-58",
  headers: {
    authorization: "7e3924b3-772e-4fa2-891e-23590c362a18",
    "Content-Type": "application/json",
  },
});

/* ---------- CARD запрос с сервера ---------- */

const cardListArray = new Section(
  {
    renderer: (item) => {
      const card = createCard(item);
      cardListArray.addItem(card);
    },
  },
  cardContainer
);

api.getInitialCards().then((data) => {
  cardListArray.renderItems(data);
});

/* ---------- USER запрос с сервера при загрузке страницы ---------- */

api.getUserInfo().then((data) => {
  profileName.textContent = data.name;
  profileProfession.textContent = data.about;
  profileAvatar.src = data.avatar;
});

/* ---------- Валидация 3х форм---------- */

const validationFormEditAvatar = new FormValidator(
  objectValidation,
  formEditAvatar
);
validationFormEditAvatar.enableValidation();

const validationFormEditProfile = new FormValidator(
  objectValidation,
  formEditProfile
);
validationFormEditProfile.enableValidation();

const validationFormAddCard = new FormValidator(objectValidation, formAddCard);
validationFormAddCard.enableValidation();

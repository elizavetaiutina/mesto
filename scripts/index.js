import { initialCards, objectValidation } from "../utils/constants.js";

import {
  popupOpenCard,
  imagePopupOpenCard,
  namePopupOpenCard,
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
  inputNameCard,
  inputCardImage,
} from "../utils/elements.js";

import Section from "../components/Section.js";
import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";

/* ---------- Popup "Изменение данных профиля" ---------- */
const newPopupProfile = new PopupWithForm({
  selectorPopup: popupEditProfile,
  handleFormSubmit: () => {},
});

newPopupProfile.setEventListeners();

buttonEditProfile.addEventListener("click", () => {
  newPopupProfile.open();
});

/* ---------- Popup "Добавление карточки" ---------- */
const newPopupAddCard = new PopupWithForm({
  selectorPopup: popupAddCard,
  handleFormSubmit: (event) => {
    event.preventDefault();
    const objNewCard = newPopupAddCard._getInputValues();

    const newCard = new Card({
      data: objNewCard,
      templateSelector: ".card-template",
      handleCardClick: () => {
        newPopupOpenCard.open(item);
      },
    });
    cardContainer.prepend(newCard.generateCard());
    newPopupAddCard.close();
  },
});

newPopupAddCard.setEventListeners();

buttonAddCard.addEventListener("click", () => {
  newPopupAddCard.open();
});
/*
const newPopupAddCard = new PopupWithForm({
  selectorPopup: popupAddCard,
  handleFormSubmit: (formData) => {
    const card = new Section(
      {
        data: [formData],
        renderer: (item) => {
          const newCCard = new Card({
            data: item,
            templateSelector: ".card-template",
            handleCardClick: () => {
              newPopupOpenCard.open(item);
            },
          });
          console.log(newCCard);
          cardList.addItem(newCCard.generateCard());
        },
      },
      cardContainer
    );
  },
});
*/
/*
const newPopupAddCard = new PopupWithForm({
  selectorPopup: popupAddCard,
  handleFormSubmit: (formData) => {},
});
*/

/* ---------- Popup "Увеличеная карточка" ---------- */
const newPopupOpenCard = new PopupWithImage(popupOpenCard);
newPopupOpenCard.setEventListeners();
/*
// Функция-обработчик открытие попапа увеличенной картинки карты (колбэк при клике на картинку)
function handleOpenPopup(name, link) {
  imagePopupOpenCard.src = link;
  imagePopupOpenCard.alt = name;
  namePopupOpenCard.textContent = name;
  //openPopup(popupOpenCard);
  newPopupOpenCard.open();
}*/
/*
// POPUP "редактирование профиля" - слушатели на открытие и событие сабмит
buttonEditProfile.addEventListener("click", () => {
  //openPopup(popupEditProfile);
  newPopupProfile.open();
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
});*/
/*
const handleSubmitFormEditProfile = (form) => {
  form.preventDefault();

  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;

  //closePopup(popupEditProfile);
  newPopupProfile.close();
};

formEditProfile.addEventListener("submit", handleSubmitFormEditProfile);
*/

/* ---------- отрисовываем карточки при загрузке страницы ---------- */

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

/* ---------- Валидация ---------- */
const validationFormEditProfile = new FormValidator(
  objectValidation,
  formEditProfile
);
validationFormEditProfile.enableValidation();

const validationFormAddCard = new FormValidator(objectValidation, formAddCard);
validationFormAddCard.enableValidation();

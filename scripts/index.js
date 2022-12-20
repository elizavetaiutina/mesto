import {
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
  objectValidation,
} from "./consts.js";

import { initialCards } from "./initialCards.js"; //массив с карточками
import { openPopup, closePopup } from "./utility.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

// ПОП-АПЫ

// POPUP "редактирование профиля" - слушатели на открытие и событие сабмит
buttonEditProfile.addEventListener("click", () => {
  openPopup(popupEditProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
});

const handleSubmitFormEditProfile = (form) => {
  form.preventDefault();

  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;

  closePopup(popupEditProfile);
};

formEditProfile.addEventListener("submit", handleSubmitFormEditProfile);

// POPUP "добавления карточки" - слушатели на открытие и событие сабмит
buttonAddCard.addEventListener("click", () => {
  openPopup(popupAddCard);
});

const handleSubmitFormAddCard = (event) => {
  event.preventDefault();
  const newCard = new Card(
    { name: inputNameCard.value, link: inputCardImage.value },
    ".card-template"
  );
  cardContainer.prepend(newCard.generateCard());

  event.target.reset();
  closePopup(popupAddCard);
};

formAddCard.addEventListener("submit", handleSubmitFormAddCard);

// Проходим по массиву и создаем для каждого элемента добавление карточки при загрузке страницы
initialCards.forEach((item) => {
  const card = new Card(item, ".card-template", openPopup);
  cardContainer.prepend(card.generateCard());
});

//Валидация для 2х попапов
const validationFormEditProfile = new FormValidator(
  objectValidation,
  formEditProfile
);
validationFormEditProfile.enableValidation();

const validationFormAddCard = new FormValidator(objectValidation, formAddCard);
validationFormAddCard.enableValidation();

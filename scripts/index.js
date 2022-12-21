import { initialCards, objectValidation } from "./consts.js";

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
} from "./elements.js";

import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

// ПОП-АПЫ

// Функция ОТКРЫТИЯ попапа
const openPopup = (popup) => {
  popup.classList.add("pop-up_opened");
  popup.addEventListener("click", handleClosePopup);
  document.addEventListener("keydown", handleClosePopupEscape);
};

// Функция обрабочтик закрытия попапа по клику на крестик и оверлэй
function handleClosePopup(event) {
  const isOverlay = event.target.classList.contains("pop-up_opened");
  const isClose = event.target.classList.contains("pop-up__exit");
  if (isOverlay || isClose) {
    closePopup(event.currentTarget);
  }
}

// Функция обработчик закрытия поп-апа по клавише ESC
function handleClosePopupEscape(event) {
  if (event.key === "Escape") {
    const popup = document.querySelector(".pop-up_opened");
    closePopup(popup);
  }
}

// Функция ЗАКРЫТИЯ поп-апа
const closePopup = (popup) => {
  popup.classList.remove("pop-up_opened");
  document.removeEventListener("keydown", handleClosePopupEscape);
  popup.removeEventListener("click", handleClosePopup);
};

// Функция-обработчик открытие попапа увеличенной картинки карты (колбэк при клике на картинку)
function handleOpenPopup(name, link) {
  imagePopupOpenCard.src = link;
  imagePopupOpenCard.alt = name;
  namePopupOpenCard.textContent = name;
  openPopup(popupOpenCard);
}

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

// Создание и добавлление карты в ленту
const createCard = (item, selectorTemplate, handleOpenPopup) => {
  const newCard = new Card(item, selectorTemplate, handleOpenPopup);
  cardContainer.prepend(newCard.generateCard());
};


// Обработчик при событии submit кнопки(попапа)
const handleSubmitFormAddCard = (event) => {
  event.preventDefault();

  createCard(
    { name: inputNameCard.value, link: inputCardImage.value },
    ".card-template",
    handleOpenPopup
  );

  event.target.reset();
  closePopup(popupAddCard);
};

formAddCard.addEventListener("submit", handleSubmitFormAddCard);

// Проходим по массиву и создаем для каждого элемента добавление карточки при загрузке страницы
initialCards.forEach((item) => {
  createCard(item, ".card-template", handleOpenPopup);
});

//Валидация для 2х попапов
const validationFormEditProfile = new FormValidator(
  objectValidation,
  formEditProfile
);
validationFormEditProfile.enableValidation();

const validationFormAddCard = new FormValidator(objectValidation, formAddCard);
validationFormAddCard.enableValidation();

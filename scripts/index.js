//Массив 6 карточек, загрузку на страницу которых добавляет JavaScript
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const cardContainer = document.querySelector(".gallery__card-list"); //контейнер для карт
//const formAddCard = document.querySelector(".form"); //форма создания новой карточки
//const inputNameCard = formAddCard.querySelector(".form__input_info_name-place"); //поле ввода названия карточки
//const inputUrlCard = formAddCard.querySelector(".form__input_info_url-place"); //поле ввода ссылки
let popupOpenCard = document.querySelector(".pop-up_type_card-open");


//Шаблон template для карт
const cardTemplate = document.querySelector(".card-template").content;

// Функция удаления карточки
function handlerDeleteCard(event) {
  event.target.closest(".card").remove();
}

// Функция- поставить и убрать лайк
function handlerLikeCard(event) {
  event.target.classList.toggle("card__button-like_status_active");
}

// Создание карточки (template)

function generateCard(item) {
  const newCard = cardTemplate.cloneNode(true);

  const nameCard = newCard.querySelector(".card__name");
  nameCard.textContent = item.name;

  const urlCard = newCard.querySelector(".card__image");
  urlCard.src = item.link;
  urlCard.alt = item.name;

  urlCard.addEventListener("click", () => {
    openPopup(popupOpenCard);
    let imageOpenCard = document.querySelector(".open-card__image");
    let nameOpenCard = document.querySelector(".open-card__name");
    imageOpenCard.src = urlCard.src;
    imageOpenCard.alt = nameCard.textContent;
    nameOpenCard.textContent = nameCard.textContent;    
  });

  let buttonDeleteCard = newCard.querySelector(".card__button-delete");
  buttonDeleteCard.addEventListener("click", handlerDeleteCard);

  let buttonLikeCard = newCard.querySelector(".card__button-like");
  buttonLikeCard.addEventListener("click", handlerLikeCard);

  return newCard;
}

// Добавление карточки
function renderCard(item) {
  cardContainer.prepend(generateCard(item));
}

// Проходим по массиву и создаем для каждого элемента добавление карточки
initialCards.forEach(function (item) {
  renderCard(item);
});

// POP-UP
// Находим кнопки открытия и закрытия поп-апа
let profileEditButton = document.querySelector(".profile__button-edit");
let cardAddButton = document.querySelector(".profile__button-add");
let popupEditProfile = document.querySelector(".pop-up_type_edit-profile");
let exitPopupEditProfile = popupEditProfile.querySelector(".pop-up__exit");
let popupAddCard = document.querySelector(".pop-up_type_add-card");
let exitPopupAddCard = popupAddCard.querySelector(".pop-up__exit");

// Находим поля профиля на гл странице
let profileName = document.querySelector(".profile__name");
let profileProfession = document.querySelector(".profile__profession");

// Находим форму и поля формы редактирования профиля
let formElement = document.querySelector(".form");
let nameInput = document.querySelector(".form__input_info_name");
let jobInput = document.querySelector(".form__input_info_profession");
let saveButton = document.querySelector(".form__button-save");

// Функция открытия поп-апа
const openPopup = (popup) => {
  popup.classList.add("pop-up_opened");
};

// Функция закрытия поп-апа
const closePopup = (popup) => {
  popup.classList.remove("pop-up_opened");
};

// Обработчики событии (кликов) для открытия и закрытия поп-апа "редактирование профиля"
profileEditButton.addEventListener("click", () => {
  openPopup(popupEditProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
});
exitPopupEditProfile.addEventListener("click", () => {
  closePopup(popupEditProfile);
});

// Обработчик «отправки» формы поп-апа "редактирования профиля", хотя пока она никуда отправляться не будет
const formEditProfileSubmitHandler = (form) => {
  form.preventDefault();

  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;

  closePopup(popupEditProfile);
};
// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", formEditProfileSubmitHandler);

// Обработчики событии (кликов) для открытия и закрытия поп-апа "добавления карточек"
cardAddButton.addEventListener("click", () => {
  openPopup(popupAddCard);
});
exitPopupAddCard.addEventListener("click", () => {
  closePopup(popupAddCard);
});

// Обработчики событии (кликов) для закрытия поп-апа "открытие карточки"
let exitPopupOpenCard = popupOpenCard.querySelector(".open-card__exit");
exitPopupOpenCard.addEventListener("click", () => {
  closePopup(popupOpenCard);
});

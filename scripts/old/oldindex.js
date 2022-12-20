const cardContainer = document.querySelector(".gallery__card-list");
const popupOpenCard = document.querySelector(".pop-up_type_card-open");
const imageOpenCard = document.querySelector(".open-card__image");
const nameOpenCard = document.querySelector(".open-card__name");

//Шаблон template для карт
const cardTemplate = document.querySelector(".card-template").content;

// Функция удаления карточки
function handleDeleteCard(event) {
  event.target.closest(".card").remove();
}

// Функция- поставить и убрать лайк
function handleLikeCard(event) {
  event.target.classList.toggle("card__button-like_status_active");
}

// Создание карточки (template)

function generateCard(item) {
  const newCard = cardTemplate.cloneNode(true);

  const nameCard = newCard.querySelector(".card__name");
  nameCard.textContent = item.name;

  const cardImage = newCard.querySelector(".card__image");
  cardImage.src = item.link;
  cardImage.alt = item.name;

  cardImage.addEventListener("click", () => {
    openPopup(popupOpenCard);
    imageOpenCard.src = cardImage.src;
    imageOpenCard.alt = nameCard.textContent;
    nameOpenCard.textContent = nameCard.textContent;
  });

  const buttonDeleteCard = newCard.querySelector(".card__button-delete");
  buttonDeleteCard.addEventListener("click", handleDeleteCard);

  const buttonLikeCard = newCard.querySelector(".card__button-like");
  buttonLikeCard.addEventListener("click", handleLikeCard);

  return newCard;
}

// Проходим по массиву и создаем для каждого элемента добавление карточки
function renderCard(item) {
  cardContainer.prepend(generateCard(item));
}
initialCards.forEach(renderCard);

// POP-UP
// Находим кнопки открытия и закрытия поп-апа
const buttonEditProfile = document.querySelector(".profile__button-edit");
const buttonAddCard = document.querySelector(".profile__button-add");
const popupEditProfile = document.querySelector(".pop-up_type_edit-profile");
const popupAddCard = document.querySelector(".pop-up_type_add-card");
const buttonExitPopupAddCard = popupAddCard.querySelector(".pop-up__exit");

// Находим поля профиля на гл странице
const profileName = document.querySelector(".profile__name");
const profileProfession = document.querySelector(".profile__profession");

// Находим форму и поля формы редактирования профиля
const formEditProfile = document.forms["form-edit-profile"];
const nameInput = formEditProfile.querySelector(".form__input_info_name");
const jobInput = formEditProfile.querySelector(".form__input_info_profession");

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

// Функция открытия поп-апа
const openPopup = (popup) => {
  popup.classList.add("pop-up_opened");
  popup.addEventListener("click", handleClosePopup);
  document.addEventListener("keydown", handleClosePopupEscape);
};

// Функция закрытия поп-апа
const closePopup = (popup) => {
  popup.classList.remove("pop-up_opened");
  document.removeEventListener("keydown", handleClosePopupEscape);
  popup.removeEventListener("click", handleClosePopup);
};

// Обработчики событии (кликов) для открытия поп-апа "редактирование профиля"
buttonEditProfile.addEventListener("click", () => {
  openPopup(popupEditProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
});

// Обработчик «отправки» формы поп-апа "редактирования профиля", хотя пока она никуда отправляться не будет
const handleSubmitFormEditProfile = (form) => {
  form.preventDefault();

  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;

  closePopup(popupEditProfile);
};
// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
formEditProfile.addEventListener("submit", handleSubmitFormEditProfile);

// Находим форму и поля формы добавление картинки
const formAddCard = document.forms["form-add-card"];
const inputNameCard = formAddCard.querySelector(".form__input_info_name-place");
const inputCardImage = formAddCard.querySelector(".form__input_info_url-place");

// Обработчики событии (кликов) для открытия поп-апа "добавления карточки"
buttonAddCard.addEventListener("click", () => {
  openPopup(popupAddCard);
});

// Обработчик «отправки» формы поп-апа "добавления карточки"
const handleSubmitFormAddCard = (event) => {
  event.preventDefault();
  renderCard({ name: inputNameCard.value, link: inputCardImage.value });
  event.target.reset();
  closePopup(popupAddCard);
};

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
formAddCard.addEventListener("submit", handleSubmitFormAddCard);
// Находим кнопки открытия и закрытия поп-апа
let profileEditButton = document.querySelector(".profile__button-edit");
let cardAddButton = document.querySelector(".profile__button-add");
let popupEditProfile = document.querySelector(".pop-up_type_edit-profile");
let exitPopupEditProfile = popupEditProfile.querySelector(".pop-up__exit");
let popupAddCard = document.querySelector(".pop-up_type_add-card");
let exitPopupAddCard = popupAddCard.querySelector(".pop-up__exit");

// Находим поля профиля
let profileName = document.querySelector(".profile__name");
let profileProfession = document.querySelector(".profile__profession");

// Находим форму и поля формы
let formElement = document.querySelector(".form");
let nameInput = document.querySelector(".form__input_info_name");
let jobInput = document.querySelector(".form__input_info_profession");
let saveButton = document.querySelector(".form__button-save");

// Функция открытия поп-апа
function openPopup(popup) {
  popup.classList.add("pop-up_opened");
}

// Функция закрытия поп-апа
function closePopup(popup) {
  popup.classList.remove("pop-up_opened");
}

// Обработчики событии (кликов) для открытия и закрытия поп-апа "редактирования профиля"
profileEditButton.addEventListener("click", () => {
  openPopup(popupEditProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
});
exitPopupEditProfile.addEventListener("click",() => {closePopup(popupEditProfile)});

// Обработчики событии (кликов) для открытия и закрытия поп-апа "добавления карточек"
cardAddButton.addEventListener("click", () => {openPopup(popupAddCard)});
exitPopupAddCard.addEventListener("click", () => {closePopup(popupAddCard)});

// Обработчик «отправки» формы поп-апа "редактирования профиля", хотя пока она никуда отправляться не будет
function formSubmitHandler(form) {
  form.preventDefault();

  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;

  closePopup();
}

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", formSubmitHandler);

// Находим кнопки открытия и закрытия поп-апа
let profileEditButton = document.querySelector(".profile__button-edit");
let popupCloseButton = document.querySelector(".pop-up__exit");
let popup = document.querySelector(".pop-up");

// Находим поля профиля
let profileName = document.querySelector(".profile__name");
let profileProfession = document.querySelector(".profile__profession");

// Находим форму и поля формы
let formElement = document.querySelector(".form");
let nameInput = document.querySelector(".form__input_info_name");
let jobInput = document.querySelector(".form__input_info_profession");
let saveButton = document.querySelector(".form__button-save");

// Функция для того, чтобы поля были заполнены теми значениями, которые отображаются на странице
function addValueInput() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
}

// Функция открытия поп-апа
function openPopup() {
  popup.classList.add("pop-up_opened");
  addValueInput();
}

// Функция закрытия поп-апа
function closePopup() {
  popup.classList.remove("pop-up_opened");
}

// Обработчики событии (кликов) для открытия и закрытия поп-апа
profileEditButton.addEventListener("click", openPopup);
popupCloseButton.addEventListener("click", closePopup);

// Обработчик «отправки» формы, хотя пока она никуда отправляться не будет
function formSubmitHandler (form) {
  form.preventDefault();

  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;

  closePopup();
}

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

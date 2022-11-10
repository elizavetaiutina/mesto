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
const formAddCard = document.querySelector(".form"); //форма создания новой карточки
const inputNameCard = formAddCard.querySelector(".form__input_info_name-place"); //поле ввода названия карточки
const inputUrlCard = formAddCard.querySelector(".form__input_info_url-place"); //поле ввода ссылки


//Шаблон template для карт
const cardTemplate = document.querySelector("#card-template").content.querySelector(".card");

//Генерации карточки
const generateCard = (initialCards) =>{
  const newCard = cardTemplate.cloneNode(true);

  const nameCard = newCard.querySelector(".card__name");
  nameCard.textContent = initialCards.name;

  const urlCard = newCard.querySelector(".card__image");
  urlCard.src = initialCards.link;
  urlCard.alt = initialCards.name;

  return mewCard;

}

// Обработчики событии 
const formAddCardSubmitHandler = (form) => {
  form.preventDefault();
  renderCar({name: inputNameCard.value,
    link: inputUrlCard.value})
    inputNameCard.value = '';
    inputUrlCard.value = '';
};


// Обработчик «отправки» формы - Добавление карточки

const renderCard = (initialCards) =>{
  cardContainer.prepend(generateCard(initialCards));
}

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
form.addEventListener("submit", formAddCardSubmitHandler);

todoList.forEach((initialCards) =>{
  renderCard(initialCards)
})
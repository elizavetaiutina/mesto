//validity
const objectValidation = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button-save",
  inactiveButtonClass: "form__button-save_disabled",
  inputErrorClass: "form__input_type_error-bottom-red",
  errorClass: "form__span-error_active",
};

//index
const cardContainer = document.querySelector(".gallery__card-list");
// Поля профиля на гл странице
const profileName = document.querySelector(".profile__name");
const profileProfession = document.querySelector(".profile__profession");

// ПОП-АПЫ
const popupOpenCard = document.querySelector(".pop-up_type_card-open");
//POP-UP EDIT PROFILE
const buttonEditProfile = document.querySelector(".profile__button-edit");
const popupEditProfile = document.querySelector(".pop-up_type_edit-profile");
const formEditProfile = document.forms["form-edit-profile"]; // Форма редактирования профиля
const nameInput = formEditProfile.querySelector(".form__input_info_name");
const jobInput = formEditProfile.querySelector(".form__input_info_profession");

//POP-UP ADD CARD
const buttonAddCard = document.querySelector(".profile__button-add");
const popupAddCard = document.querySelector(".pop-up_type_add-card");
const formAddCard = document.forms["form-add-card"]; // Форма добавление картинки
const inputNameCard = formAddCard.querySelector(".form__input_info_name-place");
const inputCardImage = formAddCard.querySelector(".form__input_info_url-place");

export {
  objectValidation,
  popupOpenCard,
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
};

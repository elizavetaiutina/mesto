// Контейнер под карточки
export const cardContainer = document.querySelector(".gallery__card-list");
// Поля профиля на гл странице
export const profileName = document.querySelector(".profile__name");
export const profileProfession = document.querySelector(".profile__profession");
export const profileAvatar = document.querySelector(".profile__avatar");
export const editAvatar = document.querySelector(".profile__avatar-overlay");

// POP-UP EDIT AVATAR
export const selectorEditAvatar = document.querySelector(
  ".pop-up_type_edit-avatar"
);
export const formEditAvatar = document.forms["form-edit-avatar"];

// POP-UP OPEN CARD
export const selectorPopupOpenCard = document.querySelector(
  ".pop-up_type_card-open"
);

//POP-UP EDIT PROFILE
export const buttonEditProfile = document.querySelector(
  ".profile__button-edit"
);
export const selectorPopupEditProfile = document.querySelector(
  ".pop-up_type_edit-profile"
);
// Форма редактирования профиля в попапе
export const formEditProfile = document.forms["form-edit-profile"];

export const nameInput = formEditProfile.querySelector(
  ".form__input_info_name"
);
export const jobInput = formEditProfile.querySelector(
  ".form__input_info_profession"
);

//POP-UP ADD CARD
export const buttonAddCard = document.querySelector(".profile__button-add");
export const selectorPopupAddCard = document.querySelector(
  ".pop-up_type_add-card"
);
// Форма добавление картинки
export const formAddCard = document.forms["form-add-card"];

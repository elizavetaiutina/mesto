// Контейнер под карточки
export const cardContainer = document.querySelector(".gallery__card-list");

// Поля профиля на гл странице
export const buttonEditAvatar = document.querySelector(
  ".profile__avatar-overlay"
);

// Форма редактирования аватара в попапе
export const formEditAvatar = document.forms["form-edit-avatar"];

//POP-UP EDIT PROFILE
export const buttonEditProfile = document.querySelector(
  ".profile__button-edit"
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

// Форма добавление картинки
export const formAddCard = document.forms["form-add-card"];

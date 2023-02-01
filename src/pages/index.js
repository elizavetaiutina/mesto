import "./index.css";

import { objectValidation, token } from "../utils/constants.js";

import {
  cardContainer,
  profileName,
  profileAbout,
  profileAvatar,
  buttonEditAvatar,
  formEditAvatar,
  buttonEditProfile,
  formEditProfile,
  nameInput,
  jobInput,
  buttonAddCard,
  formAddCard,
} from "../utils/elements.js";

import Section from "../components/Section.js";
import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithDeleteCard from "../components/PopupWithDeleteCard.js";
import UserInfo from "../components/UserInfo.js";
import FormValidator from "../components/FormValidator.js";

import Api from "../components/API.js";

/* ---------- Функция создания карточки ---------- */
function createCard(item) {
  const newCard = new Card({
    data: item,
    userId: userId,
    templateSelector: ".card-template",
    handleCardClick: () => {
      popupOpenCard.open(item);
    },
    sendIdCardToPopup: (id) => {
      popupDeleteCard.open();
      popupDeleteCard.callBackDeleteCardWithPopup(() => {
        popupDeleteCard.renderLoading(true);
        api
          .deleteCard(id)
          .then(() => {
            newCard.deleteCard();
            console.log("удалили !");
          })
          .then(() => popupDeleteCard.close())
          .catch((err) => {
            console.log(`Ошибка: ${err}.`);
          })
          .finally(() => {
            popupDeleteCard.renderLoading(false);
          });
      });
    },
    sendLikeCard: (id) => {
      api
        .likeCard(id)
        .then((data) => {
          newCard.likeButton();
          newCard.updateAmountLike(data.likes.length);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}.`);
        });
    },
    sendDislikeCard: (id) => {
      api
        .dislikeCard(id)
        .then((data) => {
          newCard.dislikeButton();
          newCard.updateAmountLike(data.likes.length);
        })
        .catch((err) => {
          console.log(`Ошибка: ${err}.`);
        });
    },
  });
  return newCard.generateCard();
}

/* ---------- Popup "Удаление карточки" ---------- */

const popupDeleteCard = new PopupWithDeleteCard({
  selectorPopup: ".pop-up_type_delete-card",
});

popupDeleteCard.setEventListeners();

/* ---------- Popup "Изменение аватара профиля" ---------- */

const popupAvatar = new PopupWithForm({
  selectorPopup: ".pop-up_type_edit-avatar",
  handleFormSubmit: (formData) => {
    return api.editUserAvatar(formData).then((data) => {
      profileAvatar.src = data.avatar;
    });
  },
});

popupAvatar.setEventListeners();

buttonEditAvatar.addEventListener("click", () => {
  popupAvatar.open();
  validationFormEditAvatar.resetValidation();
});

/* ---------- Popup "Изменение данных профиля" ---------- */

const userInfo = new UserInfo({
  name: profileName,
  about: profileAbout,
});

const popupProfile = new PopupWithForm({
  selectorPopup: ".pop-up_type_edit-profile",
  handleFormSubmit: (formData) => {
    return api.editUserInfo(formData).then((data) => {
      userInfo.setUserInfo(data);
    });
  },
});

popupProfile.setEventListeners();

buttonEditProfile.addEventListener("click", () => {
  popupProfile.open();

  validationFormEditProfile.resetValidation();

  const infoFromProfile = userInfo.getUserInfo(); //////////////
  popupProfile.setInputValues(infoFromProfile);
});

/* ---------- Popup "Добавление карточки" ---------- */

const popupAddCard = new PopupWithForm({
  selectorPopup: ".pop-up_type_add-card",
  handleFormSubmit: (formData) => {
    return api.createNewCard(formData).then((data) => {
      cardList.addItemPrepend(createCard(data));
    });
  },
});

popupAddCard.setEventListeners();

buttonAddCard.addEventListener("click", () => {
  popupAddCard.open();

  validationFormAddCard.resetValidation();
});

/* ---------- Popup "Увеличеная карточка" ---------- */

const popupOpenCard = new PopupWithImage(".pop-up_type_card-open");
popupOpenCard.setEventListeners();

/* ---------- ЗАПРОС К СЕРВЕРУ ---------- */

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-58",
  headers: {
    authorization: token,
    "Content-Type": "application/json",
  },
});

/* ---------- CARD запрос с сервера ---------- */

const cardList = new Section(
  {
    renderer: (item) => {
      const card = createCard(item);
      cardList.addItem(card);
    },
  },
  cardContainer
);

/* ---------- Запросы данных User и массива карт с сервера при загрузке страницы ---------- */

let userId;
Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([cards, user]) => {
    userId = user._id;
    console.log(cards);
    cardList.renderItems(cards);
    profileName.textContent = user.name;
    profileAbout.textContent = user.about;
    profileAvatar.src = user.avatar;
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}.`);
  });

/* ---------- Валидация 3х форм---------- */

const validationFormEditAvatar = new FormValidator(
  objectValidation,
  formEditAvatar
);
validationFormEditAvatar.enableValidation();

const validationFormEditProfile = new FormValidator(
  objectValidation,
  formEditProfile
);
validationFormEditProfile.enableValidation();

const validationFormAddCard = new FormValidator(objectValidation, formAddCard);
validationFormAddCard.enableValidation();

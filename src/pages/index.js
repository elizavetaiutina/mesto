/* Спасибо за Ваш подход к ревью !! Всегда радуюсь, когда попадаю к Вам, 
потому что знаю, что сейчас я не только исправлю ошибки в своей работе,
но и получу много крутой и полезной информации для себя ! Спасибо Вам!*/

import "./index.css";

import { objectValidation, token } from "../utils/constants.js";

import {
  buttonEditAvatar,
  buttonEditProfile,
  buttonAddCard,
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
      userInfo.setUserInfo(data);
    });
  },
});

popupAvatar.setEventListeners();

buttonEditAvatar.addEventListener("click", () => {
  popupAvatar.open();
  formValidators["form-edit-avatar"].resetValidation();
});

/* ---------- Popup "Изменение данных профиля" ---------- */

const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  aboutSelector: ".profile__profession",
  avatarSelector: ".profile__avatar",
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
  formValidators["form-edit-profile"].resetValidation();

  const infoFromProfileForForm = userInfo.getUserInfo();
  popupProfile.setInputValues(infoFromProfileForForm);
});

/* ---------- Popup "Добавление карточки" ---------- */

const popupAddCard = new PopupWithForm({
  selectorPopup: ".pop-up_type_add-card",
  handleFormSubmit: (formData) => {
    return api.createNewCard(formData).then((data) => {
      cardContainer.addItemPrepend(data);
    });
  },
});

popupAddCard.setEventListeners();

buttonAddCard.addEventListener("click", () => {
  popupAddCard.open();
  formValidators["form-add-card"].resetValidation();
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

const cardContainer = new Section({
  renderer: (item) => createCard(item),
  selectorContainer: ".gallery__card-list",
});

/* ---------- Запросы данных User и массива карт с сервера при загрузке страницы ---------- */

let userId;
Promise.all([api.getInitialCards(), api.getUserInfo()])
  .then(([cards, user]) => {
    userId = user._id;
    console.log(cards);
    cardContainer.renderItems(cards);
    userInfo.setUserInfo(user);
  })
  .catch((err) => {
    console.log(`Ошибка: ${err}.`);
  });

/* ---------- Валидация 3х форм---------- */

const formValidators = {};

// Включение валидации
const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((formElement) => {
    const validation = new FormValidator(config, formElement);
    const formName = formElement.getAttribute("name"); // получаем данные из атрибута `name` у формы

    formValidators[formName] = validation;
    validation.enableValidation();
  });
};

enableValidation(objectValidation);

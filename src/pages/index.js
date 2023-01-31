import "./index.css";

import { objectValidation } from "../utils/constants.js";

import {
  cardContainer,
  profileName,
  profileAbout,
  profileAvatar,
  editAvatar,
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
    /* удаление без попапа
    handleDelete: (id) => {
      api.deleteCard(id).then(() => {
        newCard.deleteCard();
      }); 
    },*/
    sendIdCardToPopup: (id) => {
      popupDeleteCard.open();
      popupDeleteCard.callBackDeleteCardWithPopup(() => {
        api.deleteCard(id).then(() => {
          newCard.deleteCard();
          console.log("удалили !");
        });
      });
    },
    sendLikeCard: (id) => {
      api.likeCard(id).then((data) => {
        newCard.likeButton();
        newCard.updateAmountLike(data.likes.length);
      });
    },
    sendDislikeCard: (id) => {
      api.dislikeCard(id).then((data) => {
        newCard.dislikeButton();
        newCard.updateAmountLike(data.likes.length);
      });
    },
  });
  return newCard.generateCard();
}

/* -- Отображение уведомления на кнопке пока данные загружаются --*/
function renderLoading(isLoading, button, text) {
  if (isLoading) {
    button.textContent = "Сохранение...";
  } else {
    button.textContent = text;
  }
}

/* ---------- Popup "Удаление карточки" ---------- */

const popupDeleteCard = new PopupWithDeleteCard({
  selectorPopup: ".pop-up_type_delete-card",
});

popupDeleteCard.setEventListeners();

/* ---------- Popup "Изменение аватара профиля" ---------- */

const popupAvatar = new PopupWithForm({
  selectorPopup: ".pop-up_type_edit-avatar",
  handleFormSubmit: (formData, button, text) => {
    renderLoading(true, button, text);
    api
      .editUserAvatar(formData)
      .then((data) => {
        profileAvatar.src = data.avatar;
      })
      .finally(() => {
        popupAvatar.close();
        renderLoading(false, button, text);
      });
  },
});

popupAvatar.setEventListeners();

editAvatar.addEventListener("click", () => {
  popupAvatar.open();
});

/* ---------- Popup "Изменение данных профиля" ---------- */

const userInfo = new UserInfo({
  name: profileName,
  about: profileAbout,
});

const popupProfile = new PopupWithForm({
  selectorPopup: ".pop-up_type_edit-profile",
  handleFormSubmit: (formData, button, text) => {
    renderLoading(true, button, text);
    api
      .editUserInfo(formData)
      .then((data) => {
        userInfo.setUserInfo(data);
      })
      .finally(() => {
        popupProfile.close();
        renderLoading(false, button, text);
      });
  },
});

popupProfile.setEventListeners();

buttonEditProfile.addEventListener("click", () => {
  popupProfile.open();
  const infoFromProfile = userInfo.getUserInfo();
  nameInput.value = infoFromProfile.name;
  jobInput.value = infoFromProfile.about;
});

/* ---------- Popup "Добавление карточки" ---------- */

const popupAddCard = new PopupWithForm({
  selectorPopup: ".pop-up_type_add-card",
  handleFormSubmit: (formData, button, text) => {
    renderLoading(true, button, text);
    api
      .createNewCard(formData)
      .then((data) => {
        cardList.addItemPrepend(createCard(data));
      })
      .finally(() => {
        popupAddCard.close();
        renderLoading(false, button, text);
      });
  },
});

popupAddCard.setEventListeners();

buttonAddCard.addEventListener("click", () => {
  popupAddCard.open();
});

/* ---------- Popup "Увеличеная карточка" ---------- */

const popupOpenCard = new PopupWithImage(".pop-up_type_card-open");
popupOpenCard.setEventListeners();

/* ---------- ЗАПРОС К СЕРВЕРУ ---------- */

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-58",
  headers: {
    authorization: "7e3924b3-772e-4fa2-891e-23590c362a18",
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
Promise.all([api.getInitialCards(), api.getUserInfo()]).then(
  ([cards, user]) => {
    userId = user._id;
    console.log(cards);
    cardList.renderItems(cards);
    profileName.textContent = user.name;
    profileAbout.textContent = user.about;
    profileAvatar.src = user.avatar;
  }
);

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

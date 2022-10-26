let profileEditButton = document.querySelector(".profile__button-edit");
let popupCloseButton = document.querySelector(".pop-up__exit");
let popup = document.querySelector(".pop-up");

let profileName = document.querySelector(".profile__name");
let profileProfession = document.querySelector(".profile__profession");
let inputName = document.querySelector(".form__input_info_name");
let inputProfession = document.querySelector(".form__input_info_profession");

function addValueInput() {
  inputName.value = profileName.textContent;
  inputProfession.value = profileProfession.textContent;
}

function openPopup() {
  popup.classList.add("popup_opened");
  addValueInput();
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

profileEditButton.addEventListener("click", openPopup);

popupCloseButton.addEventListener("click", closePopup);

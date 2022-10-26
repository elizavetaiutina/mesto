let profileEditButton = document.querySelector(".profile__button-edit");
let popupCloseButton = document.querySelector(".pop-up__exit");
let popup = document.querySelector(".pop-up");


function openPopup() {
  popup.classList.add("popup_opened");
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

profileEditButton.addEventListener("click", openPopup);

popupCloseButton.addEventListener("click", closePopup);

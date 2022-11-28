// объект параметров для валидации
const objectValidation = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__button-save",
  inactiveButtonClass: "form__button-save_disabled",
  inputErrorClass: "form__input_type_error-bottom-red",
  errorClass: "form__span-error_active",
};

//Функции, первая отвечают за показ ошибки, если поле не проходит валидацию и вторая наоборот, ее скроет
const showInputError = (
  formElement,
  inputElement,
  errorMessage,
  objectValidation
) => {
  // Находим спан поле для ошибки
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(objectValidation.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(objectValidation.errorClass);
};

const hideInputError = (formElement, inputElement, objectValidation) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(objectValidation.inputErrorClass);
  errorElement.classList.remove(objectValidation.errorClass);
  errorElement.textContent = "";
};

// Функция, которая проверяет валидность поля
const isValid = (formElement, inputElement, objectValidation) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      objectValidation
    );
  } else {
    hideInputError(formElement, inputElement, objectValidation);
  }
};

const setEventListeners = (formElement, objectValidation) => {
  const inputList = Array.from(
    formElement.querySelectorAll(objectValidation.inputSelector)
  );
  const buttonForm = formElement.querySelector(
    objectValidation.submitButtonSelector
  );
  toggleButtonState(inputList, buttonForm, objectValidation);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      isValid(formElement, inputElement, objectValidation);

      toggleButtonState(inputList, buttonForm, objectValidation);
    });
  });
};

//Кнопка
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    // Если поле не валидно, колбэк вернёт true и обход массива прекратится
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonForm, objectValidation) => {
  // Если есть хотя бы один невалидный инпут делаем кнопку неактивной иначе активной
  if (hasInvalidInput(inputList)) {
    buttonForm.classList.add(objectValidation.inactiveButtonClass);
    buttonForm.setAttribute("disabled", true);
  } else {
    buttonForm.classList.remove(objectValidation.inactiveButtonClass);
    buttonForm.removeAttribute("disabled", true);
  }
};

const enableValidation = (objectValidation) => {
  const formList = Array.from(
    document.querySelectorAll(objectValidation.formSelector)
  );
  formList.forEach((formElement) => {
    setEventListeners(formElement, objectValidation);
  });
};

// Принимает на вход объект параметров
enableValidation(objectValidation);

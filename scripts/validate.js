
//Функция, которая добавляет класс с ошибкой — показывает элемент ошибки;
const showInputError = (formElement, inputElement, errorMessage) => {
  // Находим элемент ошибки внутри самой функции
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add("form__input_type_error");
  // Заменим содержимое span с ошибкой на переданный параметр
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
};

//Функция, которая удаляет класс с ошибкой
const hideInputError = (formElement, inputElement) => {
  // Находим элемент ошибки
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove("form__input_type_error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
};

// Функция, которая проверяет валидность поля, внутри вызывает showInputError или hideInputError
const isValid = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    // showInputError теперь получает параметром форму, в которой находится проверяемое поле, и само это поле
    showInputError(formElement, inputElement, inputElement.validationMessage); // Если поле не проходит валидацию, покажем ошибку
  } else {
    // hideInputError теперь получает параметром форму, в которой находится проверяемое поле, и само это поле
    hideInputError(formElement, inputElement); // Если проходит, скроем ошибку
  }
};

// Принимает параметром элемент формы и добавляет её инпутам нужные обработчики
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.form__input'));
  const buttonForm = formElement.querySelector('.form__button-save');
  toggleButtonState(inputList, buttonForm);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(formElement, inputElement);

      // Вызовем toggleButtonState и передадим ей массив полей и кнопку
      toggleButtonState(inputList, buttonForm);
    });
  });
};

// массив полей перебираем методом some
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    // Если поле не валидно, колбэк вернёт true и обход массива прекратится
    return !inputElement.validity.valid;
  })
};

// Функция принимает массив полей ввода и элемент кнопки, состояние которой нужно менять
const toggleButtonState = (inputList, buttonForm) => {
  // Если есть хотя бы один невалидный инпут делаем кнопку неактивной иначе активной
  if (hasInvalidInput(inputList)) {
    buttonForm.classList.add('form__button-save_disabled');
    buttonForm.setAttribute('disabled', true);
  } else {
    buttonForm.classList.remove('form__button-save_disabled');
    buttonForm.removeAttribute('disabled', true);
  }
};

// Находим и перебераем все формы черед метод массива, вызывая для каждой формы функцию setEventListeners
const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.form'));
  formList.forEach((formElement) => {
    setEventListeners(formElement);
    });
};

// объект параметров для валидации
const objectValidation = {
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button-save',
  inactiveButtonClass: '.form__buttonsave_disabled',
  inputErrorClass: 'form__input-error',
  errorClass: 'form__input-error_active'
}

// функция enableValidation , которая включает валидацию, принимает на вход объект параметров
enableValidation(objectValidation);
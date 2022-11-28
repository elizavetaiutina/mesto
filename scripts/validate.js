
// Вынесем все необходимые элементы формы в константы
//const formElement = document.querySelector(".form");
//const formInput = formElement.querySelector(".form__input");

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
    // showInputError теперь получает параметром форму, в которой
    // находится проверяемое поле, и само это поле
    showInputError(formElement, inputElement, inputElement.validationMessage); // Если поле не проходит валидацию, покажем ошибку
  } else {
    // hideInputError теперь получает параметром форму, в которой
    // находится проверяемое поле, и само это поле
    hideInputError(formElement, inputElement); // Если проходит, скроем ошибку
  }
};

// Принимает параметром элемент формы и добавляет её полям нужные обработчики
const setEventListeners = (formElement) => {
  // Находим все поля внутри формы,
  // сделаем из них массив методом Array.from
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

// Функция принимает массив полей

const hasInvalidInput = (inputList) => {
  // проходим по этому массиву методом some
  return inputList.some((inputElement) => {
    // Если поле не валидно, колбэк вернёт true
    // Обход массива прекратится и вся функция
    // hasInvalidInput вернёт true

    return !inputElement.validity.valid;
  })
};

// Функция принимает массив полей ввода
// и элемент кнопки, состояние которой нужно менять
const toggleButtonState = (inputList, buttonForm) => {
  // Если есть хотя бы один невалидный инпут
  if (hasInvalidInput(inputList)) {
    // сделай кнопку неактивной
    buttonForm.classList.add('form__button-save_disabled');
    buttonForm.setAttribute('disabled', true);
  } else {
    // иначе сделай кнопку активной
    buttonForm.classList.remove('form__button-save_disabled');
    buttonForm.removeAttribute('disabled', true);
  }
};


// Находит и переберает все формы
const enableValidation = () => {
  // Находим все формы и делаем из них массив
  const formList = Array.from(document.querySelectorAll('.form'));
  // Перебераем массив, вызывая для каждой формы функцию setEventListeners
  formList.forEach((formElement) => {
    setEventListeners(formElement);
    });
};

// Вызовем функцию
enableValidation({
  formSelector: '.form',
  inputSelector: '.form__input',
  submitButtonSelector: '.form__button-save',
  inactiveButtonClass: '.form__buttonsave_disabled',
  inputErrorClass: 'form__input-error',
  errorClass: 'form__input-error_active'
});
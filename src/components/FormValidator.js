export default class FormValidator {
  constructor(data, form) {
    this._formSelector = data.formSelector;
    this._inputSelector = data.inputSelector;
    this._submitButtonSelector = data.submitButtonSelector;
    this._inactiveButtonClass = data.inactiveButtonClass;
    this._inputErrorClass = data.inputErrorClass;
    this._errorClass = data.errorClass;
    this._form = form;
  }

  // Методы, первый отвечают за показ ошибки, если поле не проходит валидацию и второй наоборот, ее скроет
  _showInputError = (inputElement, errorMessage) => {
    this._errorElement = this._form.querySelector(`.${inputElement.id}-error`); // Находим спан поле для ошибки
    inputElement.classList.add(this._inputErrorClass);
    this._errorElement.textContent = errorMessage;
    this._errorElement.classList.add(this._errorClass);
  };

  _hideInputError = (inputElement) => {
    this._errorElement = this._form.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    this._errorElement.classList.remove(this._errorClass);
    this._errorElement.textContent = "";
  };

  // Метод, который проверяет валидность поля и управляет состоянием поля с ошибкой
  _toggleInputErrorState = (inputElement) => {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  };

  // Кнопка
  _hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {
      // Если поле не валидно, колбэк вернёт true и обход массива прекратится
      return !inputElement.validity.valid;
    });
  };

  _toggleButtonState = () => {
    // Если есть хотя бы один невалидный инпут делаем кнопку неактивной иначе активной
    if (this._hasInvalidInput()) {
      this._buttonForm.classList.add(this._inactiveButtonClass);
      this._buttonForm.setAttribute("disabled", true);
    } else {
      this._buttonForm.classList.remove(this._inactiveButtonClass);
      this._buttonForm.removeAttribute("disabled", true);
    }
  };

  // Слушатель событий добавится всем полям ввода внутри формы
  _setEventListeners = () => {
    this._inputList = Array.from(
      this._form.querySelectorAll(this._inputSelector)
    );

    this._buttonForm = this._form.querySelector(this._submitButtonSelector);
    this._toggleButtonState();
    // кнопка после самбита (точнее сбора данных в полях)
    this._form.addEventListener("reset", () => {
      setTimeout(() => {
        this._toggleButtonState();
      }, 0);
    });

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._toggleInputErrorState(inputElement);
        this._toggleButtonState();
      });
    });
  };

  // Включение валидации формы
  enableValidation = () => {
    this._setEventListeners();
  };
}

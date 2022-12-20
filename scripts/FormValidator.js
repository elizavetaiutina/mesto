/*Создайте класс FormValidator, который настраивает валидацию полей формы:
принимает в конструктор объект настроек с селекторами и классами формы;
принимает вторым параметром элемент той формы, которая валидируется;
имеет приватные методы, которые обрабатывают форму: проверяют валидность поля, изменяют состояние кнопки сабмита, устанавливают все обработчики;
имеет публичный метод enableValidation, который включает валидацию формы.
Для каждой проверяемой формы создайте экземпляр класса FormValidator.*/

class FormValidator {
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

  // Метод, который проверяет валидность поля
  _isValid = (inputElement) => {
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
    if (this._hasInvalidInput(this._inputList)) {
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
    this._toggleButtonState(this._inputList, this._buttonForm);
    // кнопка после самбита (точнее сбора данных в полях)
    this._form.addEventListener("reset", () => {
      setTimeout(() => {
        this._toggleButtonState(this._inputList, this._buttonForm);
      }, 0);
    });

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._isValid(inputElement);
        this._toggleButtonState(this._inputList, this._buttonForm);
      });
    });
  };
  
  // Включение валидации формы
  enableValidation = () => {
    this._setEventListeners();
  };
}

export { FormValidator };

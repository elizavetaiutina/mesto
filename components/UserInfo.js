/*Класс UserInfo отвечает за управление отображением информации 
о пользователе на странице. Этот класс:
Принимает в конструктор объект с селекторами двух элементов: элемента 
имени пользователя и элемента информации о себе.
Содержит публичный метод getUserInfo, который возвращает объект с 
данными пользователя. Этот метод пригодится когда 
данные пользователя нужно будет подставить в форму при открытии.
Содержит публичный метод setUserInfo, который принимает новые данные 
пользователя и добавляет их на страницу.*/

export default class UserInfo {
  constructor({ name, about }) {
    this._nameUser = name;
    this._aboutUser = about;
  }

  getUserInfo() {
    // подставить данные в форму при её открытии
    return (this._infoUserFromProfile = {
      name: this._nameUser.textContent,
      about: this._aboutUser.textContent,
    });
  }

  setUserInfo(newUserInfoFromForm) {
    // данные полученные из формы присваиваются профилю
    this._nameUser.textContent = newUserInfoFromForm.name;
    this._aboutUser.textContent = newUserInfoFromForm.profession;
  }
}

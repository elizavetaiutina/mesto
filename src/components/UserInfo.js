export default class UserInfo {
  constructor({ nameSelector, aboutSelector, avatarSelector }) {
    this._nameUser = document.querySelector(nameSelector);
    this._aboutUser = document.querySelector(aboutSelector);
    this._avatarUser = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    // объект из данных в профиле для подстановки в форму
    return (this._infoUserFromProfile = {
      name: this._nameUser.textContent,
      about: this._aboutUser.textContent,
    });
  }

  setUserInfo({ name, about, avatar }) {
    // получаемые данные присваиваются профилю
    this._nameUser.textContent = name;
    this._aboutUser.textContent = about;
    this._avatarUser.src = avatar;
  }
}

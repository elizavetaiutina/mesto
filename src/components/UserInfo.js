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
    this._aboutUser.textContent = newUserInfoFromForm.about;
  }
}

export default class Api {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _returnJson() {
    return (result) => {
      if (result.ok) {
        return result.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`); // если ошибка, отклоняем промис
    };
  }

  getUserInfo() {
    return fetch(`https://nomoreparties.co/v1/cohort-58/users/me`, {
      headers: this._headers,
    }).then(this._returnJson());
  }

  editUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._returnJson());
  }

  editUserAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._returnJson());
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
    }).then(this._returnJson());
  }

  createNewCard(data) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._returnJson());
  }

  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._returnJson());
  }

  likeCard(id) {
    return fetch(`${this._url}/cards/${id}//likes`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._returnJson());
  }

  dislikeCard(id) {
    return fetch(`${this._url}/cards/${id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._returnJson());
  }
}

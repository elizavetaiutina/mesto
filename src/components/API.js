export default class Api {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  getUserInfo() {
    return fetch(`https://nomoreparties.co/v1/cohort-58/users/me`, {
      headers: this._headers,
    }).then((result) => {
      if (result.ok) {
        return result.json();
      }
    });
  }

  editUserInfo(data) {
    return fetch(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then((result) => {
      if (result.ok) {
        return result.json();
      }
    });
  }

  editUserAvatar(data) {
    return fetch(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then((result) => {
      if (result.ok) {
        return result.json();
      }
    });
  }

  getInitialCards() {
    return fetch(`${this._url}/cards`, {
      headers: this._headers,
    }).then((result) => {
      if (result.ok) {
        return result.json();
      }
      /*
      // если ошибка, отклоняем промис
      return Promise.reject(`Ошибка: ${res.status}`);*/
    });
  }

  createNewCard(data) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then((result) => {
      if (result.ok) {
        return result.json();
      }
    });
  }

  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then((result) => {
      if (result.ok) {
        return result.json();
      }
    });
  }

  likeCard(id) {
    return fetch(`${this._url}/cards/${id}//likes`, {
      method: "PUT",
      headers: this._headers,
    }).then((result) => {
      if (result.ok) {
        return result.json();
      }
    });
  }
  /*
  dislikeCard(data, id) {
    return fetch(`${this._url}/cards/${id}/likes`, {
      method: "DELETE",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then((result) => {
      if (result.ok) {
        return result.json();
      }
    });
  }*/
  // другие методы работы с API
}

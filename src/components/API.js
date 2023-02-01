export default class Api {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _checkResponse(result) {
    if (result.ok) {
      return result.json();
    }
    return Promise.reject(`Ошибка: ${result.status}`); // если ошибка, отклоняем промис
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }

  getUserInfo() {
    return fetch(`${this._url}/users/me`, {
      headers: this._headers,
    }).then(this._checkResponse);
  }

  editUserInfo(data) {
    return this._request(`${this._url}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data),
    });
  }

  editUserAvatar(data) {
    return this._request(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(data),
    });
  }

  getInitialCards() {
    return this._request(`${this._url}/cards`, {
      headers: this._headers,
    });
  }

  createNewCard(data) {
    return fetch(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    }).then(this._checkResponse);
  }

  deleteCard(id) {
    return this._request(`${this._url}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    });
  }

  likeCard(id) {
    return this._request(`${this._url}/cards/${id}//likes`, {
      method: "PUT",
      headers: this._headers,
    });
  }

  dislikeCard(id) {
    return this._request(`${this._url}/cards/${id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    });
  }
}

(()=>{"use strict";var t={formSelector:".form",inputSelector:".form__input",submitButtonSelector:".form__button-save",inactiveButtonClass:"form__button-save_disabled",inputErrorClass:"form__input_type_error-bottom-red",errorClass:"form__span-error_active"},e=document.querySelector(".gallery__card-list"),r=document.querySelector(".profile__name"),n=document.querySelector(".profile__profession"),o=document.querySelector(".profile__avatar"),i=document.querySelector(".profile__avatar-overlay"),u=document.forms["form-edit-avatar"],a=document.querySelector(".profile__button-edit"),l=document.forms["form-edit-profile"],c=l.querySelector(".form__input_info_name"),s=l.querySelector(".form__input_info_profession"),f=document.querySelector(".profile__button-add"),p=document.forms["form-add-card"];function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function d(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==y(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==y(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===y(o)?o:String(o)),n)}var o}var h=function(){function t(e,r){var n=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._renderer=n,this._container=r}var e,r;return e=t,(r=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"addItemPrepend",value:function(t){this._container.prepend(t)}},{key:"addItem",value:function(t){this._container.append(t)}}])&&d(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function b(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==m(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===m(o)?o:String(o)),n)}var o}var _=function(){function t(e){var r=e.data,n=e.userId,o=e.templateSelector,i=e.handleCardClick,u=e.sendIdCardToPopup,a=e.likeCard,l=e.dislikeCard;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=r,this._name=r.name,this._link=r.link,this._id=r._id,this._ownerId=r.owner._id,this._userId=n,this._templateSelector=o,this._handleCardClick=i,this._sendIdCardToPopup=u,this._arrayLikes=r.likes,this._likeCard=a,this._dislikeCard=l}var e,r;return e=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"_setEventListeners",value:function(){var t=this;this._buttonLike.addEventListener("click",(function(){t._toggleLikeCard()})),this._buttonDelete.addEventListener("click",(function(){t._sendIdCardToPopup(t._id)})),this._imageCard.addEventListener("click",(function(){t._handleCardClick()}))}},{key:"_toggleLikeCard",value:function(){0==this.isLiked?(this.isLiked=!this.isLiked,this._likeCard(this._id),this._buttonLike.classList.add("card__button-like_status_active"),console.log("поставили лайк",this._arrayLikes.length)):(this.isLiked=!this.isLiked,this._dislikeCard(this._id),this._buttonLike.classList.remove("card__button-like_status_active"),console.log("убрали лайк",this._arrayLikes.length))}},{key:"amountLike",value:function(){console.log("this._amountLike",this._amountLike),console.log("this._arrayLikes.length",this._arrayLikes.length),this._amountLike.textContent=this._arrayLikes.length,console.log("длина массива с лайками после лайка",this._arrayLikes.length)}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_showButtonDelete",value:function(){this._ownerId!=this._userId?this._buttonDelete.style.display="none":this._buttonDelete.style.display="block"}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._buttonLike=this._element.querySelector(".card__button-like"),this._amountLike=this._element.querySelector(".card__like-amount"),this._buttonDelete=this._element.querySelector(".card__button-delete"),this._imageCard=this._element.querySelector(".card__image"),this._titleCard=this._element.querySelector(".card__name"),this.isLiked=!1,this._setEventListeners(),this._showButtonDelete(),this._imageCard.src=this._link,this._imageCard.alt=this._name,this._titleCard.textContent=this._name,this._amountLike.textContent=this._arrayLikes.length,this._element}}])&&b(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function g(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==v(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==v(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===v(o)?o:String(o)),n)}var o}var S=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(e),this._handleEscClose=this._handleEscClose.bind(this)}var e,r;return e=t,(r=[{key:"setEventListeners",value:function(){var t=this;this._buttonExitPopup=this._popup.querySelector(".pop-up__exit"),this._buttonExitPopup.addEventListener("click",(function(){t.close()})),this._popup.addEventListener("click",(function(e){t._handleOverlayClose(e)}))}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"_handleOverlayClose",value:function(t){t.target.classList.contains("pop-up_opened")&&this.close()}},{key:"open",value:function(){this._popup.classList.add("pop-up_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("pop-up_opened"),document.removeEventListener("keydown",this._handleEscClose)}}])&&g(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function w(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==k(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==k(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===k(o)?o:String(o)),n)}var o}function C(){return C="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=P(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},C.apply(this,arguments)}function P(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=O(t)););return t}function E(t,e){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},E(t,e)}function j(t,e){if(e&&("object"===k(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function O(t){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},O(t)}var L=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=O(n);if(o){var r=O(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return j(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._imagePopup=e._popup.querySelector(".open-card__image"),e._namePopup=e._popup.querySelector(".open-card__name"),e}return e=u,(r=[{key:"open",value:function(t){C(O(u.prototype),"open",this).call(this),this._imagePopup.src=t.link,this._imagePopup.alt=t.name,this._namePopup.textContent=t.name}}])&&w(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(S);function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function T(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==I(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==I(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===I(o)?o:String(o)),n)}var o}function q(){return q="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=R(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},q.apply(this,arguments)}function R(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=D(t)););return t}function B(t,e){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},B(t,e)}function x(t,e){if(e&&("object"===I(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function D(t){return D=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},D(t)}var U=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&B(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=D(n);if(o){var r=D(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return x(this,t)});function u(t){var e,r=t.selectorPopup,n=t.handleFormSubmit;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,r))._form=e._popup.querySelector(".form"),e._buttonDelete=e._popup.querySelector(".form__button-delete"),e._inputList=e._form.querySelectorAll(".form__input"),e._handleFormSubmit=n,e}return e=u,(r=[{key:"_getInputValues",value:function(){var t=this;return this._formValues={},this._inputList.forEach((function(e){t._formValues[e.name]=e.value})),this._formValues}},{key:"setEventListeners",value:function(){var t=this;q(D(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleFormSubmit(t._getInputValues()),t.close()}))}},{key:"close",value:function(){q(D(u.prototype),"close",this).call(this),this._form.reset()}}])&&T(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(S);function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function F(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==A(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==A(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===A(o)?o:String(o)),n)}var o}function V(){return V="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=N(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},V.apply(this,arguments)}function N(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=M(t)););return t}function J(t,e){return J=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},J(t,e)}function H(t,e){if(e&&("object"===A(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function M(t){return M=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},M(t)}var W=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&J(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=M(n);if(o){var r=M(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return H(this,t)});function u(t){var e,r=t.selectorPopup;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,r))._buttonDelete=e._popup.querySelector(".form__button-delete"),e}return e=u,(r=[{key:"callBackDeleteCardWithPopup",value:function(t){this._callBackDeleteCard=t}},{key:"setEventListeners",value:function(){var t=this;V(M(u.prototype),"setEventListeners",this).call(this),this._buttonDelete.addEventListener("click",(function(){t._callBackDeleteCard(),t.close()}))}}])&&F(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(S);function z(t){return z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},z(t)}function $(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==z(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==z(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===z(o)?o:String(o)),n)}var o}var G=function(){function t(e){var r=e.name,n=e.about;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._nameUser=r,this._aboutUser=n}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return this._infoUserFromProfile={name:this._nameUser.textContent,about:this._aboutUser.textContent}}},{key:"setUserInfo",value:function(t){this._nameUser.textContent=t.name,this._aboutUser.textContent=t.about}}])&&$(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function K(t){return K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},K(t)}function Q(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,Z(n.key),n)}}function X(t,e,r){return e&&Q(t.prototype,e),r&&Q(t,r),Object.defineProperty(t,"prototype",{writable:!1}),t}function Y(t,e,r){return(e=Z(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function Z(t){var e=function(t,e){if("object"!==K(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==K(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"===K(e)?e:String(e)}var tt=X((function t(e,r){var n=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),Y(this,"_showInputError",(function(t,e){n._errorElement=n._form.querySelector(".".concat(t.id,"-error")),t.classList.add(n._inputErrorClass),n._errorElement.textContent=e,n._errorElement.classList.add(n._errorClass)})),Y(this,"_hideInputError",(function(t){n._errorElement=n._form.querySelector(".".concat(t.id,"-error")),t.classList.remove(n._inputErrorClass),n._errorElement.classList.remove(n._errorClass),n._errorElement.textContent=""})),Y(this,"_toggleInputErrorState",(function(t){t.validity.valid?n._hideInputError(t):n._showInputError(t,t.validationMessage)})),Y(this,"_hasInvalidInput",(function(){return n._inputList.some((function(t){return!t.validity.valid}))})),Y(this,"_toggleButtonState",(function(){n._hasInvalidInput()?(n._buttonForm.classList.add(n._inactiveButtonClass),n._buttonForm.setAttribute("disabled",!0)):(n._buttonForm.classList.remove(n._inactiveButtonClass),n._buttonForm.removeAttribute("disabled",!0))})),Y(this,"_setEventListeners",(function(){n._inputList=Array.from(n._form.querySelectorAll(n._inputSelector)),n._buttonForm=n._form.querySelector(n._submitButtonSelector),n._toggleButtonState(),n._form.addEventListener("reset",(function(){setTimeout((function(){n._toggleButtonState()}),0)})),n._inputList.forEach((function(t){t.addEventListener("input",(function(){n._toggleInputErrorState(t),n._toggleButtonState()}))}))})),Y(this,"enableValidation",(function(){n._setEventListeners()})),this._formSelector=e.formSelector,this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._inactiveButtonClass=e.inactiveButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._form=r}));function et(t){return et="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},et(t)}function rt(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==et(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==et(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===et(o)?o:String(o)),n)}var o}var nt=function(){function t(e){var r=e.baseUrl,n=e.headers;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._url=r,this._headers=n}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return fetch("https://nomoreparties.co/v1/cohort-58/users/me",{headers:this._headers}).then((function(t){if(t.ok)return t.json()}))}},{key:"editUserInfo",value:function(t){return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify(t)}).then((function(t){if(t.ok)return t.json()}))}},{key:"editUserAvatar",value:function(t){return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify(t)}).then((function(t){if(t.ok)return t.json()}))}},{key:"getInitialCards",value:function(){return fetch("".concat(this._url,"/cards"),{headers:this._headers}).then((function(t){if(t.ok)return t.json()}))}},{key:"createNewCard",value:function(t){return fetch("".concat(this._url,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify(t)}).then((function(t){if(t.ok)return t.json()}))}},{key:"deleteCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t),{method:"DELETE",headers:this._headers}).then((function(t){if(t.ok)return t.json()}))}},{key:"likeCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"//likes"),{method:"PUT",headers:this._headers}).then((function(t){if(t.ok)return t.json()}))}},{key:"dislikeCard",value:function(t){return fetch("".concat(this._url,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers}).then((function(t){if(t.ok)return t.json()}))}}])&&rt(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function ot(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function it(t){var e=new _({data:t,userId:pt,templateSelector:".card-template",handleCardClick:function(){ft.open(t)},sendIdCardToPopup:function(t){ut.open(),ut.callBackDeleteCardWithPopup((function(){yt.deleteCard(t).then((function(){e.deleteCard(),console.log("удалили !")}))}))},likeCard:function(t){yt.likeCard(t).then((function(t){console.log("теперь после лайка",t.likes.length),e.amountLike(t.likes.length)})),console.log("а теперь",t.likes),e.amountLike()},dislikeCard:function(t){yt.dislikeCard(t).then((function(t){console.log("теперь после дизлайка",t.likes.length)})),console.log("а теперь",t.likes),e.amountLike()}});return e.generateCard()}var ut=new W({selectorPopup:".pop-up_type_delete-card"});ut.setEventListeners();var at=new U({selectorPopup:".pop-up_type_edit-avatar",handleFormSubmit:function(t){yt.editUserAvatar(t).then((function(t){o.src=t.avatar}))}});at.setEventListeners(),i.addEventListener("click",(function(){at.open()}));var lt=new G({name:r,about:n}),ct=new U({selectorPopup:".pop-up_type_edit-profile",handleFormSubmit:function(t){yt.editUserInfo(t).then((function(t){lt.setUserInfo(t)}))}});ct.setEventListeners(),a.addEventListener("click",(function(){ct.open();var t=lt.getUserInfo();c.value=t.name,s.value=t.about}));var st=new U({selectorPopup:".pop-up_type_add-card",handleFormSubmit:function(t){yt.createNewCard(t).then((function(t){dt.addItemPrepend(it(t))}))}});st.setEventListeners(),f.addEventListener("click",(function(){st.open()}));var ft=new L(".pop-up_type_card-open");ft.setEventListeners();var pt,yt=new nt({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-58",headers:{authorization:"7e3924b3-772e-4fa2-891e-23590c362a18","Content-Type":"application/json"}}),dt=new h({renderer:function(t){var e=it(t);dt.addItem(e)}},e);Promise.all([yt.getInitialCards(),yt.getUserInfo()]).then((function(t){var e,i,u=(i=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,a=[],l=!0,c=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(a.push(n.value),a.length!==e);l=!0);}catch(t){c=!0,o=t}finally{try{if(!l&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(c)throw o}}return a}}(e,i)||function(t,e){if(t){if("string"==typeof t)return ot(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?ot(t,e):void 0}}(e,i)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=u[0],l=u[1];pt=l._id,console.log(a),dt.renderItems(a),r.textContent=l.name,n.textContent=l.about,o.src=l.avatar})),new tt(t,u).enableValidation(),new tt(t,l).enableValidation(),new tt(t,p).enableValidation()})();
var link = document.querySelector(".contacts-button");

var popup = document.querySelector(".modal-feedback");

var overlay = document.querySelector(".feedback-overlay");

var close = popup.querySelector(".modal-close");

var form = popup.querySelector(".feedback-form");
var username = popup.querySelector("[name=feedback-name]");
var email = popup.querySelector("[name=feedback-mail]");
var comment = popup.querySelector("[name=feedback-text]");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  overlay.classList.add("feedback-overlay-show");
  name.focus();
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  overlay.classList.remove("feedback-overlay-show");
});

form.addEventListener("submit", function (evt) {
  if (!username.value || !email.value) {
    evt.preventDefault();
    console.log("Для отправки сообщения неободимо заполнить все поля");
  }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
    }
  }
});

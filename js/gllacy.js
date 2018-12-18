var link = document.querySelector(".contacts-button");

var popup = document.querySelector(".modal-feedback");

var overlay = document.querySelector(".feedback-overlay");

var close = popup.querySelector(".modal-close");

var form = popup.querySelector(".feedback-form");
var username = popup.querySelector("[name=feedback-name]");
var email = popup.querySelector("[name=feedback-mail]");
var comment = popup.querySelector("[name=feedback-text]");
var isStorageSupport = true;
var storageName = "";
var storageMail = "";

try {
  storageName = localStorage.getItem("login");
  storageMail = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  overlay.classList.add("feedback-overlay-show");
  if (storage) {
      username.value = storageName;
      email.value = storageMail;
      comment.focus();
    } else {
      username.focus();
    }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
  overlay.classList.remove("feedback-overlay-show");
});

form.addEventListener("submit", function (evt) {
  if (!username.value || !email.value || !comment.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    console.log("Для отправки сообщения необходимо заполнить все поля");
  } else {
      if (isStorageSupport) {
        localStorage.setItem("login", username.value);
        localStorage.setItem("email", email.value);
      }
    }
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal-show")) {
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

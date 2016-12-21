var btnOrder = document.querySelector(".btn--to-order");
var overlay = document.querySelector(".overlay");

btnOrder.addEventListener("click", function (event) {
  event.preventDefault();
  overlay.classList.toggle("overlay--show");
});

window.addEventListener("keydown", function (event) {
  if (event.keyCode == 27) {
    if (overlay.classList.contains("overlay--show")) {
      overlay.classList.remove("overlay--show"); }
  }
});

overlay.addEventListener("click", function (event) {
  if (event.target === this) {
    if (overlay.classList.contains("overlay--show")) {
      overlay.classList.remove("overlay--show");
    }
  }
});

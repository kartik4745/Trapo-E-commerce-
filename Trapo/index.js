document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.querySelectorAll(".popup-only");

  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      alert("This product is just for showcase.");
    });
  });
});

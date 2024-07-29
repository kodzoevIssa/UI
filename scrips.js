const link = document.getElementById("dropdown__drop--toggle");
const menu = document.getElementById("dropdown__drop--active");

link.addEventListener("click", function () {
  menu.classList.toggle("dropdown__drop--active");
});

document.addEventListener("mouseout", function (event) {
  if (
    !link.contains(event.relatedTarget) &&
    !menu.contains(event.relatedTarget)
  ) {
    menu.classList.remove("dropdown__drop--active");
  }
});

///////////////

const modal = document.getElementById("modal");
const modalBtn = document.getElementById("modalBTN");
const modalBtn2 = document.getElementById("modalBTN2");

modalBtn.addEventListener("click", function () {
  modal.classList.toggle("modal--active");
  document.body.style.overflow = "hidden";
});
modalBtn2.addEventListener("click", function () {
  modal.classList.toggle("modal--active");
  document.body.style.overflow = "";
});

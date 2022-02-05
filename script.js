const modalOne = document.querySelector(".modalOne");
const modalTwo = document.querySelector(".modalTwo");
const modalThree = document.querySelector(".modalThree");

document.querySelector(".html").addEventListener("click", function () {
  modalOne.classList.remove("hidden");
});

document.querySelector(".css").addEventListener("click", function () {
  modalTwo.classList.remove("hidden");
});

document.querySelector(".js").addEventListener("click", function () {
  modalThree.classList.remove("hidden");
});

document.querySelector(".closeOne").addEventListener("click", function () {
  modalOne.classList.add("hidden");
});

document.querySelector(".closeTwo").addEventListener("click", function () {
  modalTwo.classList.add("hidden");
});

document.querySelector(".closeThree").addEventListener("click", function () {
  modalThree.classList.add("hidden");
});

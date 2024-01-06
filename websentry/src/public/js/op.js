// script.js

document.addEventListener("DOMContentLoaded", function () {
  const openModalBtn = document.getElementById("openModalBtn");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const modal = document.getElementById("modal");

  openModalBtn.addEventListener("click", function () {
    modal.classList.remove("hidden");
  });

  closeModalBtn.addEventListener("click", function () {
    modal.classList.add("hidden");
  });
});

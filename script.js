const current = document.querySelector("#current");
let enlargeMessages = document.querySelectorAll(".photo-overlay h1");
const modal = document.getElementById("modal");
const overlay = document.querySelectorAll(".photo-overlay");
const modalContainer = document.querySelector(".modal-container");

for (let i = 0; i < enlargeMessages.length; i++) {
  enlargeMessages[i].addEventListener("click", imgClick);
}

window.addEventListener("click", clickOutside);

function imgClick(e) {
  modal.style.display = "block";
  current.src = e.target.parentNode.previousElementSibling.src;
}

function clickOutside(e) {
  if (e.target == modal || e.target == modalContainer) {
    modal.style.display = "none";
  }
}

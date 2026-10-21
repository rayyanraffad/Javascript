'use strict';
let showModel = document.querySelectorAll(".show-modal")
let closeModel = document.querySelector(".close-modal")
let modal = document.querySelector(".modal ")
let overlay = document.querySelector(".overlay")

let open = function () {
modal.classList.remove("hidden")
overlay.classList.remove("hidden")
}
let close = function () {
  modal.classList.add("hidden")
  overlay.classList.add("hidden")
}

for (let i = 0; i < showModel.length; i++) {
  showModel[i].addEventListener("click", open);
}
closeModel.addEventListener("click", close);
overlay.addEventListener("click",close);

document.addEventListener("keydown", function(e) {
  if (e.key === 'Escape') {
    if (!modal.classList.contains("hidden")) {
      close(); 
    }
  }
})
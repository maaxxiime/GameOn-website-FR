function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.getElementById("close-btn");
const content = document.getElementById("content");
const form = document.getElementById("reserve");
const modalBody = document.getElementById("modal-body");

const first = document.getElementById("first");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.classList.remove("closemodal");
  modalbg.style.display = "block";
}

//remove modal event
closeBtn.addEventListener("click", closeModal);

//function remove modal
function closeModal() {
  modalbg.classList.add("closemodal");

  setTimeout(() => {
    modalbg.style.display = "none";
  }, 700);
}

//fonction validation de formulaire
form.addEventListener("submit", function validate(e) {
  e.preventDefault();
  const formData = document.querySelectorAll(".formData");
  console.log(formData)

  formData[0].dataset.errorVisible = true

});

//modalBody.innerHTML = "Merci ! Votre réservation a été reçue."

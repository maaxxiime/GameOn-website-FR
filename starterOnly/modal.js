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
const formData = document.querySelectorAll(".formData");
const closeBtn = document.getElementById('close-btn');
const content = document.getElementById('content');

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.classList.remove("closemodal")
  modalbg.style.display = "block";

}

//remove modal event
closeBtn.addEventListener("click", closeModal);

//function remove modal
function closeModal() {
  modalbg.classList.add("closemodal");

  setTimeout(() => {
    modalbg.style.display = "none";
  },700)
}



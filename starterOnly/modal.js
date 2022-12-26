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
const formData = document.querySelectorAll(".formData");
const modalSuccess = document.getElementById("modal-success");
const btnFermer = document.getElementById("btn-fermer");

//input
const first = document.getElementById("first");
const last = document.getElementById("last");
const email = document.getElementById("email");
const birthDate = document.getElementById("birthdate");
const quantity = document.getElementById("quantity");
const locationUn = document.getElementById("location1");
const locationDeux = document.getElementById("location2");
const locationTrois = document.getElementById("location3");
const locationQuatre = document.getElementById("location4");
const locationCinq = document.getElementById("location5");
const locationSix = document.getElementById("location6");
const checkboxUn = document.getElementById("checkbox1");

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

  const firstLength = first.value.length;
  const lastLength = last.value.length;
  const emailValue = email.value;
  const birthDateLength = birthDate.value.length;
  const quantityValue = quantity.value;
  const locationUnChecked = locationUn.checked;
  const locationDeuxChecked = locationDeux.checked;
  const locationTroisChecked = locationTrois.checked;
  const locationQuatreChecked = locationQuatre.checked;
  const locationCinqChecked = locationCinq.checked;
  const locationSixChecked = locationSix.checked;
  const checkboxUnChecked = checkboxUn.checked;

  //verifie les conditions de chaque input
  if (firstLength <= 1) {
    formData[0].dataset.errorVisible = true;
  } else {
    console.log("Prenom à deux");
    formData[0].dataset.errorVisible = false;
  }

  if (lastLength <= 1) {
    formData[1].dataset.errorVisible = true;
  } else {
    console.log("Nom à deux");
    formData[1].dataset.errorVisible = false;
  }

  if (
    emailValue.includes("@") &&
    emailValue.includes(".") &&
    emailValue.length >= 6
  ) {
    console.log("Email valide");
    formData[2].dataset.errorVisible = false;
  } else {
    formData[2].dataset.errorVisible = true;
  }

  if (birthDateLength == 10) {
    formData[3].dataset.errorVisible = false;
    console.log("Date valide");
  } else {
    formData[3].dataset.errorVisible = true;
  }

  if (
    quantityValue >= 0 &&
    quantityValue <= 99 &&
    quantityValue != quantityValue.includes("a")
  ) {
    formData[4].dataset.errorVisible = false;
    console.log("Quantité valide");
  } else {
    formData[4].dataset.errorVisible = true;
  }

  if (
    locationUnChecked === true ||
    locationDeuxChecked === true ||
    locationTroisChecked === true ||
    locationQuatreChecked === true ||
    locationCinqChecked === true ||
    locationSixChecked === true
  ) {
    formData[5].dataset.errorVisible = false;
    console.log("Location valide");
  } else {
    formData[5].dataset.errorVisible = true;
  }

  if (checkboxUnChecked === true) {
    formData[6].dataset.errorVisible = false;
    console.log("Conditions valide");
  } else {
    formData[6].dataset.errorVisible = true;
  }

  // affiche le message de succé si toutes les conditions sont valide
  if (
    (firstLength >= 2 &&
      lastLength >= 2 &&
      emailValue.includes("@") &&
      emailValue.includes(".") &&
      emailValue.length >= 6 &&
      birthDateLength == 10 &&
      quantityValue >= 0 &&
      quantityValue <= 99 &&
      quantityValue != quantityValue.includes("a") &&
      locationUnChecked === true) ||
    locationDeuxChecked === true ||
    locationTroisChecked === true ||
    locationQuatreChecked === true ||
    locationCinqChecked === true ||
    (locationSixChecked === true && checkboxUnChecked === true)
  ) {
    console.log("Tous les inputs sont corrects");

    modalBody.style.display = "none";
    modalSuccess.style.display = "flex";

    setTimeout(() => {
      modalBody.style.display = "block";
      modalSuccess.style.display = "none";
    }, 5000);
  } else {
    console.log("Erreur dans un ou plusieurs inputs");
  }
});


// fermer modal event
btnFermer.addEventListener("click", fermerModal);

//function fermer modal
function fermerModal() {
  modalBody.style.display = "none";
}

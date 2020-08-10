

// -------Verification Input --------

// Variable, recupération de l'ID de chaque input
const form = document.getElementById('form');
const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const email = document.getElementById('email');
const adress = document.getElementById('adress');
const city = document.getElementById('city');
let button = form.querySelector('button[type=submit');
const yourCart = localStorage.getItem("teddies")
let yourCartParse = JSON.parse(localStorage.getItem("teddies"))
let products = [];

//  Object true or false
let test = {}

//  Compression des conditions 
const testForms = (isTest, value, input, name, errorMessage) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');

  if (isTest.test(value) && value !== '') {
    formControl.className = 'form-control sucess';
    test[name] = true
  } else {
    small.innerText = errorMessage
    formControl.className = 'form-control error';
    test[name] = false
  }
}

// Test donnée dans les inputs
let isNormal = /^[a-zA-Z- ]+$/u
let isEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
let isAdress = /^[0-9]{1,5}( [-a-zA-Zàâäéèêëïîôöùûüç ]+)+$/


// Test firstName
form.firstName.addEventListener('change', e =>
  testForms(
    isNormal,
    e.target.value,
    firstName,
    "prenom",
    "Desolé, vous ne pouvez pas avoir de caractères spéciaux dans votre prénom"
  ),
);
// Test Nickname
form.lastName.addEventListener('change', e =>
  testForms(
    isNormal,
    e.target.value,
    lastName,
    "Nom",
    "Desolé, vous ne pouvez pas avoir de caractères spéciaux dans votre Nom"
  ),
);
// Test Email
form.email.addEventListener('change', e =>
  testForms(
    isEmail,
    e.target.value,
    email,
    "email",
    "Desolé, votre email n'est pas valide"
  ),
);
// Test Adress
form.adress.addEventListener('change', e =>
  testForms(
    isAdress,
    e.target.value,
    adress,
    "Adresse",
    "Desolé, votre adresse n'est pas valide"
  ),
);
// Test Ville
form.city.addEventListener('change', e =>
  testForms(
    isNormal,
    e.target.value,
    city,
    "Ville",
    "Desolé, votre ville n'est pas valide"
  ),
);

// ----X----Verification Input ----X-----



// ---- Methode POST ENVOI -----

const urlApi = "http://localhost:3000/api/teddies/order"
let contact;
let orderToSend;



form.addEventListener('submit', (e) => {
  e.preventDefault();
  let result = true

  for (let key in test) {
    if (test[key] === false) {
      result = false
    }
  }

  if (result) {
    contact = {
      lastName: lastName.value,
      firstName: firstName.value,
      email: email.value,
      city: city.value,
      address: adress.value
    }
  }

// Creation d'orderToSend pour l'envoi
  orderToSend = { contact, products }

// Reglage de fetch avant appel
  let settingsFetch = {
    method: "POST",
    body: JSON.stringify(orderToSend),
    headers: { 'Content-type': "application/json" }
  };

  fetch(urlApi, settingsFetch)
    .then(response => response.json())
    .then(function (order) {
      let client = {
        prenom: contact.lastName,
        nom: contact.firstName,
        email: contact.email,
        adress: contact.address,
        adressMore: adressMore.value,
        city: contact.city,
        order: order.orderId 
      }
      localStorage.setItem('client', JSON.stringify(client));
      window.location = "confirm.html?orderId="+ client.order
    }).catch((error) => {
      form.innerHTML = " <h2 class=error><b><i>Desolé le serveur a rencontré une erreur, essayez à nouveau plus tard</h2>"
    })
})
const form = document.getElementById('form');
const username = document.getElementById('username');
const nickname = document.getElementById('nickname');
const email = document.getElementById('email');
const adress = document.getElementById('adress');
const adressMore = document.getElementById('adressMore');
const city = document.getElementById('city');



let button = form.querySelector('button[type=submit');



    form.addEventListener('submit', (e) => {

        
      });

let products = [];
JSON.parse(localStorage.getItem('teddies')).forEach((produit) => {
    products.push(produit._id);  
});


  // recupere les valeurs des forms
  // const usernameValue = username.value.trim();
  // const nicknameValue = nickname.value.trim();
  // const emailValue = email.value.trim();
  // const adressValue = adress.value.trim();
  // const adressMoreValue = adressMore.value.trim();
  // const cityValue = city.value.trim();

  // let clientObject = {
  //   prenom: usernameValue,
  //   nom: nicknameValue,
  //   email: emailValue,
  //   adress: adressValue,
  //   adressMore: adressMoreValue,
  //   city: cityValue,
  // };

//  Object true or false
let test = {}

//  Compression des conditions 
const testForms = (isTest, value, input, name, errorMessage) => {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    if (isTest.test(value) && value !==''){
      small.innerText = "valid input"
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


  // Test Username
  form.username.addEventListener('change', e=> 
    testForms(
      isNormal,
      e.target.value,
      username,
      "prenom",
      "Desolé, vous ne pouvez pas avoir de caractères spéciaux dans votre prénom"
    ), 
  );
  // Test Nickname
  form.nickname.addEventListener('change', e=> 
    testForms(
      isNormal,
      e.target.value,
      nickname,
      "Nom",
      "Desolé, vous ne pouvez pas avoir de caractères spéciaux dans votre Nom"
    ), 
  );
  // Test Email
  form.email.addEventListener('change', e=> 
    testForms(
      isEmail,
      e.target.value,
      email,
      "email",
      "Desolé, votre email n'est pas valide"
    ), 
  );
// Test Adress
  form.adress.addEventListener('change', e=> 
  testForms(
    isAdress,
    e.target.value,
    adress,
    "Adresse",
    "Desolé, votre adresse n'est pas valide"
  ), 
);
// Test Ville
form.city.addEventListener('change', e=> 
testForms(
  isNormal,
  e.target.value,
  city,
  "Ville",
  "Desolé, votre ville n'est pas valide"
), 
);
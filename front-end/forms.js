const form = document.getElementById('form');
const username = document.getElementById('username');
const nickname = document.getElementById('nickname');
const email = document.getElementById('email');
const adress = document.getElementById('adress');
const adressMore = document.getElementById('adressMore');
const city = document.getElementById('city');
const orders_id = strRandom();


let button = form.querySelector('button[type=submit');



    form.addEventListener('submit', (e) => {

        button.disabled = true
        e.preventDefault();
        checkInputs();
      });




let products = [];
JSON.parse(localStorage.getItem('teddies')).forEach((produit) => {
    products.push(produit._id);  
});

let data = {
    products
};


function checkInputs() {

  // recupere les valeurs des forms
  const usernameValue = username.value.trim();
  const nicknameValue = nickname.value.trim();
  const emailValue = email.value.trim();
  const adressValue = adress.value.trim();
  const adressMoreValue = adressMore.value.trim();
  const cityValue = city.value.trim();

  let clientObject = {
    prenom: usernameValue,
    nom: nicknameValue,
    email: emailValue,
    adress: adressValue,
    adressMore: adressMoreValue,
    city: cityValue,
    order_id: orders_id
  };

  
  var allIsOK = 0;

  if (usernameValue === '') {
    // affichage erreur
    setErrorFor(username, 'Prenom ne peut être vide');
  } else if (!isNormal(usernameValue)){
    setErrorFor(username, 'Prenom ne peut etre valider')
  }
   else {
    // affichage sucess
    setSucessFor(username);
    allIsOK++;
  }
  if (nicknameValue === '') {
    setErrorFor(nickname, 'Nom ne peut être vide');
  } else if(!isNormal(nicknameValue)){
    setErrorFor(nickname, 'Nom ne peut etre valider')
  } 
  else {
    // affichage sucess
    setSucessFor(nickname);
    allIsOK++;
  }
  if (emailValue === '') {
    setErrorFor(email, 'Email ne peut être vide');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Email n"est pas valide');
  } else {
    setSucessFor(email);
    allIsOK++;
  }
  if (adressValue === '') {
    setErrorFor(adress, 'Adresse ne peut être vide');
  } else if (!isAdress(adressValue)){
    setErrorFor(adress, 'Adress n"est pas valide')
  } 
  else {
    // affichage sucess
    setSucessFor(adress);
    allIsOK++;
  }
  if (cityValue === '') {
    setErrorFor(city, 'Ville ne peut être vide');
  } else if (!isNormal(cityValue)){
    setErrorFor(city, 'Ville n"est pas valide')
  } 
  else {
    // affichage sucess
    setSucessFor(city);
    allIsOK++;
  }


  // Condition confirmation commande
  if ((allIsOK == 5)) {  
    localStorage.setItem('client', JSON.stringify(clientObject));
    confirmPage();

    
  }
  else {  alert("Le serveur ne répond plus \n Nous ne sommes pas en mesure de confirmer votre commande \n Veuillez réessayer plus tard, nous sommes désolées");}
  
}
// Function Erreur
function setErrorFor(input, message) {
  const formControl = input.parentElement; // .form-control
  const small = formControl.querySelector('small');
  // Ajout message d'erreur dans le small
  small.innerText = message;
  // Ajout de la classe error
  formControl.className = 'form-control error';
}
// function sucess
function setSucessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control sucess';
}
//  function verification mail
function isEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isNormal(normal) {
  return /^[a-zA-Z- ]+$/u.test(normal);
}

function isAdress(normal) {
  return /^[0-9]{1,5}( [-a-zA-Zàâäéèêëïîôöùûüç ]+)+$/.test(normal)
}
// function confirm Page
function confirmPage(){
  document.location.href="confirm.html?order="+ orders_id
}

// Function Creation identifiant random
function strRandom(o) {
  var a = 8,
      b = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
      c = '',
      d = 0,
      e = ''+b;
  if (o) {
    if (o.startsWithLowerCase) {
      c = b[Math.floor(Math.random() * b.length)];
      d = 1;
    }
    if (o.length) {
      a = o.length;
    }
    if (o.includeUpperCase) {
      e += b.toUpperCase();
    }
    if (o.includeNumbers) {
      e += '1234567890';
    }
  }
  for (; d < a; d++) {
    c += e[Math.floor(Math.random() * e.length)];
  }
  return c;
}


// Appel des fonctions
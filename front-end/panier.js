

var panier = localStorage.getItem('teddies');
var totalCost = localStorage.getItem('totalCost');

// Creation des elements a repeter
function displayCart() {
  let cartItems = localStorage.getItem("teddies");
  cartItems = JSON.parse(cartItems);

  // Structure Panier 
  function structureCart(item) {
    let divCol = createElement("Tbody")
    divCol.classList.add("row")
    appendChild(productContainer, divCol)

    let divP = createElement("div")
    divP.classList.add("col")
    divP.innerHTML += item.name
    appendChild(divCol, divP)


    let divCol2 = createElement("div")
    divCol2.classList.add("col-6")
    divCol2.innerHTML += item.price
    appendChild(divCol, divCol2)

    let divCol3 = createElement("div")
    divCol3.classList.add("col")
    appendChild(divCol, divCol3)

    let divImg = createElement("img")
    divImg.classList.add("teddiesImages")
    divImg.src += item.image
    divImg.style.width = "60%"
    divImg.style.margin = "auto"
    appendChild(divCol3, divImg)

  }

  let productContainer = document.querySelector(".cart-tablebody");
  if (cartItems && productContainer) {
    productContainer.innerHTML = '';
    Object.values(cartItems).map(

      // Function Structure du body
      item => {
        structureCart(item);
      });

  }
}


//Function Cout Total
function totalCart() {
  let containerProduct = document.querySelector("#cart-tablebody")
  let subTotal = document.querySelector("#subtotal")

  let divTitle = createElement("h5")
  divTitle.classList.add("card-title")
  divTitle.innerHTML = panier
  appendChild(containerProduct, divTitle)


  let divPrice = createElement("h3")
  divPrice.classList.add("price")
  divPrice.innerHTML = totalCost + "€"
  appendChild(subTotal, divPrice)
}

const form = document.getElementById('form');
const username = document.getElementById('username');
const nickname = document.getElementById('nickname');
const email = document.getElementById('email');
const adress = document.getElementById('adress');
const adressMore = document.getElementById('adressMore');
const city = document.getElementById('city');

form.addEventListener('submit', (e) => {

  e.preventDefault();
  checkInputs();
});

function checkInputs() {
  // recupere les valeurs des forms
  const usernameValue = username.value.trim();
  const nicknameValue = nickname.value.trim();
  const emailValue = email.value.trim();
  const adressValue = adress.value.trim();
  const adressMoreValue = adressMore.value.trim();
  const cityValue = city.value.trim();

  const clientObject = {
    prenom: usernameValue,
    nom: nicknameValue,
    email: emailValue,
    adress: adressValue,
    city: cityValue
  };

  var allIsOK = 0;

  if (usernameValue === '') {
    // affichage erreur
    setErrorFor(username, 'Prenom ne peut être vide');
  } else {
    // affichage sucess
    setSucessFor(username);
    allIsOK++;
  }
  if (nicknameValue === '') {
    setErrorFor(nickname, 'Nom ne peut être vide');
  } else {
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
  } else {
    // affichage sucess
    setSucessFor(adress);
    allIsOK++;
  }
  if (cityValue === '') {
    setErrorFor(city, 'Ville ne peut être vide');
  } else {
    // affichage sucess
    setSucessFor(city);
    allIsOK++;
  }
  if (allIsOK == 5) {  
    localStorage.setItem('client', JSON.stringify(clientObject));
    confirmPage();
    
  }
  else {  console.log('erreur');}
  
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; // .form-control
  const small = formControl.querySelector('small');
  // Ajout message d'erreur dans le small
  small.innerText = message;
  // Ajout de la classe error
  formControl.className = 'form-control error';
}

function setSucessFor(input) {
  const formControl = input.parentElement;
  formControl.className = 'form-control sucess';
}

function isEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function confirmPage(){
  document.location.href="confirm.html"
}


// Appel des fonctions

totalCart();
displayCart();
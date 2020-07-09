// Recuperation de l'id dans l'url
const urlParams = new URLSearchParams(window.location.search)
let idProduct = urlParams.get("id")
console.log(idProduct);


// Creation des elements a repeter
function createElement(element) {
  return document.createElement(element);
}

function appendChild(parent, element) {
  return parent.appendChild(element);
}

var productArray = []
var panierArray = []

let containerProduct = document.querySelector("#cardProduct")

fetch('http://localhost:3000/api/teddies/' + idProduct)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {

    var productJSON = { 
      "id" : data._id,
      "nom": data.name,
      "prix": data.price,
      "image": data.imageUrl
     };

    let divColLeft = createElement("div")
    divColLeft.classList.add("col-md-4")
    divColLeft.classList.add("order-md-1")

    let divColRight = createElement("div")
    divColRight.classList.add("col-md-8")
    divColRight.classList.add("order-md-2")

    let divCardImg = createElement("img")
    divCardImg.classList.add("TeddiesPicture")
    divCardImg.src = data.imageUrl
    divCardImg.setAttribute("alt", "Ours en peluche")
    divCardImg.style.width = "100%"
    divCardImg.style.margin = "auto"
    appendChild(divColLeft, divCardImg)

    let divTitle = createElement("h5")
    divTitle.classList.add("card-title")
    divTitle.innerHTML = data.name
    appendChild(divColRight, divTitle)

    // boucle color en fonction array 
    data.colors.forEach(element => {
      let divColor = createElement("button")
      divColor.classList.add("btn")
      divColor.classList.add('btn-secondary')
      divColor.innerHTML = element
      divColor.id = element
      appendChild(divColRight, divColor)
    });

    let divDescription = createElement("p")
    divDescription.classList.add("texte")
    divDescription.innerHTML = "Description : " + "\n" + data.description
    appendChild(divColRight, divDescription)

    let divPrice = createElement("p")
    divPrice.classList.add("texte")
    divPrice.innerHTML = "Prix : " + data.price + " €"
    appendChild(divColRight, divPrice)

    let btnCart = createElement("button")
    btnCart.classList.add("add-cart")
    btnCart.classList.add("btn")
    btnCart.classList.add("btn-primary")
    btnCart.textContent = "Ajouter au Panier"


    btnCart.addEventListener("click", function (data) {
      data.preventDefault();
      console.log('item added');
      let productNumbers = localStorage.getItem('carNumbers');
      productNumbers = parseInt(productNumbers);

      if(localStorage.getObj('carNumbers') !==null) {
        localStorage.setItem('carNumbers', productNumbers+1);
        document.querySelector('.btn-success span').textContent = productNumbers + 1;
        
      }else{
        localStorage.setItem('carNumbers', 1);
        document.querySelector('btn-success span').textContent = 1;
      };

      if (localStorage.getObj('teddies') !== null) {
        productArray = localStorage.getObj('teddies');
        productArray.push(productJSON);
        localStorage.setObj('teddies', productArray);
      }
      else {
        productArray.push(productJSON);
        localStorage.setObj('teddies', productArray);
      }
    });

    Storage.prototype.setObj = function (key, value) {
      this.setItem(key, JSON.stringify(value));
    }
    Storage.prototype.getObj = function (key) {
      var value = this.getItem(key);
      return value && JSON.parse(value);
    }
    


    appendChild(divColRight, btnCart)
    appendChild(containerProduct, divColRight)
    appendChild(containerProduct, divColLeft)
  })
  // Affiche l'erreur
  .catch(function (error) {
    console.log(error)
  });


// Recuperation de l'id dans l'url
const urlParams = new URLSearchParams(window.location.search)
let idProduct = urlParams.get("id")
console.log(idProduct);

var productArray = []
var panierArray = []

let containerProduct = document.querySelector("#cardProduct")

fetch('http://localhost:3000/api/teddies/' + idProduct)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {

    var productJSON = {
      id: data._id,
      name: data.name,
      price: data.price,
      image: data.imageUrl,
    };
    // Structure Product
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

    const btnCart = document.querySelector(".btn-primary")
    btnCart.addEventListener("click",

      // Function chargement dans le localStorage
      function loadData(data) {
        console.log('item added');

        if (localStorage.getObj('teddies') !== null) {
          productArray = localStorage.getObj('teddies');
          productArray.push(productJSON);
          localStorage.setObj('teddies', productArray);
        }
        else {
          productArray.push(productJSON);
          localStorage.setObj('teddies', productArray);
        }
        totalCost(productJSON);
      });

    Storage.prototype.setObj = function (Key, Value) {
      this.setItem(Key, JSON.stringify(Value));
    }
    Storage.prototype.getObj = function (Key) {
      var Value = this.getItem(Key);
      return Value && JSON.parse(Value);
    }


    // Function Total panier
    function totalCost(product) {
      let cartCost = localStorage.getItem('totalCost');
      if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
      } else {
        localStorage.setItem("totalCost", product.price);
      }

    }
    appendChild(divColRight, btnCart)
    appendChild(containerProduct, divColRight)
    appendChild(containerProduct, divColLeft)
  })
  // Affiche l'erreur
  .catch(function (error) {
    structureError(error)
  });

// function animation btn


$(function () {

  function RippleStyle(width, height, posX, posY) {
    this.width = (width <= height) ? height : width;
    this.height = (width <= height) ? height : width;
    this.top = posY - (this.height * 0.5);
    this.left = posX - (this.width * 0.5);
  }

  $('.btn-primary').on('mousedown', function (e) {
    //ajout de la classe btn-ripple
    var rippleEl = $('<span class="btn-ripple"></span>').appendTo(this);

    // Position
    var pos = $(this).offset();

    var width = $(this).outerWidth();
    var height = $(this).outerHeight();

    // Position du curseur
    var posX = e.pageX - pos.left;
    var posY = e.pageY - pos.top;

    // Effet Ripple
    var rippleStyle = new RippleStyle(width, height, posX, posY);
    rippleEl.css(rippleStyle);
  });
  $('.btn-primary').on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', '.btn-ripple', function () {
    $(this).remove();
  });
});




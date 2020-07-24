

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

// Appel des fonctions

totalCart();
displayCart();
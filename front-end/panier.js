var panier = localStorage.getItem('teddies');
var totalCost = localStorage.getItem('totalCost');
console.log(totalCost)
console.log(panier)

// Creation des elements a repeter
function createElement(element) {
    return document.createElement(element);
  }
  
  function appendChild(parent, element) {
    return parent.appendChild(element);
  }

  let containerProduct = document.querySelector("#cart-tablebody")
  let subTotal = document.querySelector("#subtotal")

  let divTitle = createElement("h5")
    divTitle.classList.add("card-title")
    divTitle.innerHTML = panier
    appendChild(containerProduct, divTitle)


    let divPrice = createElement("p")
    divPrice.classList.add("price")
    divPrice.innerHTML = totalCost
    appendChild(subTotal, divPrice)

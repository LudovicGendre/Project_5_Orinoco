

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
  function displayCart(){
      let cartItems = localStorage.getItem("teddies");
      cartItems = JSON.parse(cartItems);
      
      console.log(cartItems)
      let productContainer = document.querySelector (".cart-tablebody");
      if(cartItems && productContainer) {
          productContainer.innerHTML = '';
          Object.values(cartItems).map(item => {

            let divCol = createElement("div")
            divCol.classList.add("col")
            appendChild(productContainer, divCol)

            let divP = createElement("p")
            divP.classList.add("texte")
            divP.innerHTML += item.name
            appendChild(divCol, divP)


            let divCol2 = createElement("p")
            divCol2.classList.add("texte")
            divCol2.innerHTML += item.price
            appendChild(divCol, divCol2)
           
            
            
          });

      }
  }

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

displayCart();
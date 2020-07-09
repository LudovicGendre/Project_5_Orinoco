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

let containerProduct= document.querySelector("#cardProduct")

fetch('http://localhost:3000/api/teddies/' + idProduct)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {

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

    data.colors.forEach(element => {
      let divColor = createElement("button")
      divColor.classList.add("btn")
      divColor.classList.add('btn-primary')
      divColor.innerHTML = element
      appendChild(divColRight, divColor)
    });
    
    let divDescription = createElement("p")
    divDescription.classList.add("texte")
    divDescription.innerHTML = data.description
    appendChild(divColRight, divDescription)

    
    appendChild(containerProduct, divColRight)
    appendChild(containerProduct, divColLeft)
      console.log(data);
  })
  // Affiche l'erreur
  .catch(function (error) {
    console.log(error)
  });

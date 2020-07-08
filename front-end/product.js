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

    let divCol = createElement("div")
    divCol.classList.add("col-6")
    
    let divTitle = createElement("h5")
      divTitle.classList.add("card-title")
      divTitle.innerHTML = data.name
    appendChild(divCol, divTitle)
    

    appendChild(containerProduct, divCol)
      console.log(data);
  })
  // Affiche l'erreur
  .catch(function (error) {
    console.log(error)
  });

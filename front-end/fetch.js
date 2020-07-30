let containerCard = document.querySelector("#cardContainer")


function structurFetch (datas) {
  // Creation div col 
  let divCol = createElement("div")
  divCol.classList.add("col-6")


  // Creation div card 
  let divCardDeck = createElement("div")
  divCardDeck.classList.add("card")
  appendChild(divCol, divCardDeck)
  console.log(divCardDeck)

  // Creation div card img top
  let divCardImg = createElement("img")
  divCardImg.classList.add("card-img-top")
  divCardImg.src = datas.imageUrl
  divCardImg.setAttribute("alt", "Ours en peluche")
  divCardImg.style.width = "80%"
  divCardImg.style.margin = "auto"
  appendChild(divCardDeck, divCardImg)

  // Creation div title
  let divTitle = createElement("h5")
  divTitle.classList.add("card-title")
  divTitle.innerHTML = datas.name
  appendChild(divCardDeck, divTitle)

  // Creation div description
  let divDescription = createElement("p")
  divDescription.classList.add("card-text")
  divDescription.innerHTML = datas.description
  appendChild(divCardDeck, divDescription)

  // Creation div prix
  let divPrice = createElement("p")
  divPrice.classList.add("card-text")
  divPrice.classList.add("card-price")
  divPrice.innerHTML = "Prix: " + datas.price + "€"
  appendChild(divCardDeck, divPrice)

  // Creation bouton 
  let buttonMore = createElement("button")
  buttonMore.classList.add("btn")
  buttonMore.classList.add("btn-outline-primary")
  buttonMore.innerHTML = "Voir plus"
  buttonMore.id = datas._id
  buttonMore.addEventListener("click", 
  
  // Function creation url personnalisé à l'objet selectionné
  function(stockId){
    let id = datas._id
    document.location.href = "product.html?id="+ id
  })
  appendChild(divCardDeck, buttonMore)

  // Balise principal en entrée html
  appendChild(containerCard, divCol)


}



// Fetch
fetch('http://localhost:3000/api/teddies')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {

    for (let datas of data) {
      //appel structure de la page
      structurFetch(datas);
    }
  })
  // Affiche l'erreur
  .catch(function (error) {
    console.log(error)
    console.log("cheh")
    structureError(error)
  });


  
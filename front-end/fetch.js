// Creation des elements a repeter
function createElement(element){
  return document.createElement(element);
}

function appendChild (parent,element){
  return parent.appendChild(element);
}

let containerCard = document.querySelector("#cardContainer")


  fetch('http://localhost:3001/api/teddies')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {

    let teddies = data

    for (let datas of data){

      // Creation div card 
      let divCardDeck = createElement("div")
      divCardDeck.classList.add("card")
      console.log(divCardDeck)

      // Creation div card img top
      let divCardImg = createElement("img")
      divCardImg.classList.add("card-img-top")
      divCardImg.src = datas.imageUrl
      divCardImg.setAttribute("alt","Ours en peluche")
      appendChild(divCardDeck, divCardImg)

      // Creation div title
      let divTitle = createElement("h5")
      divTitle.classList.add("card-title")
      divTitle.innerHTML = datas.name
      appendChild(divCardDeck, divTitle)

      // Creation div description
      let divDescription =  createElement("p")
      divDescription.classList.add("card-text")
      divDescription.innerHTML = datas.description
      appendChild(divCardDeck, divDescription)

      appendChild(containerCard,divCardDeck)

      console.log(data);
    }

    
  })
  // Affiche l'erreur
  .catch(function(error){
      console.log(error)
  });


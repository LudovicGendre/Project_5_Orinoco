// Creation des elements a repeter
function createElement(element){
  return document.createElement(element);
}


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
    }

      console.log(data);
  })
  // Affiche l'erreur
  .catch(function(error){
      console.log(error)
  });


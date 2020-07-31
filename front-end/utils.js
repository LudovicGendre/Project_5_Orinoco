let container = document.querySelector(".container")


// Creation des elements a repeter
function createElement(element) {
    return document.createElement(element);
  }
  
  function appendChild(parent, element) {
    return parent.appendChild(element);
  }


  function fullCart(){
    let teddies = localStorage.getItem('teddies');
    if(teddies){
      setAddItem();
    }
  }

  // Function changement nom class
  function setAddItem() {
    const addItem = document.querySelector('.check_cart');
    addItem.className = "btn btn-success ml-auto mr-2 check_cart add"
  }

  // Function structure du message erreur
  function structureError(error){

    let divTexte = createElement("h5")
    divTexte.innerHTML = "Erreur serveur " + "("+ error +")"
    appendChild(container, divTexte)

    let divDescription = createElement("p")
    divDescription.classList.add("text")
    divDescription.innerHTML = "Veuillez réessayez plus tard, le site est actuellement hors-ligne "
    appendChild(container, divDescription)
  }
  fullCart();
var client = localStorage.getItem('client');
var totalCost = localStorage.getItem('totalCost');

function displayConfirm(){
    let confirmClient = localStorage.getItem('client');
    confirmClient = JSON.parse(confirmClient);

    let confirmContainer = document.querySelector("#confirmContainer");

    let divCol = createElement("div")
    divCol.classList.add("col")
    divCol.innerHTML = confirmClient.prenom
    appendChild(confirmContainer, divCol )

    console.log(confirmClient)
    console.log(confirmClient.adress)
}

displayConfirm();
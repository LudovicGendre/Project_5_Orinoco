const urlParams = new URLSearchParams(window.location.search)
let id_order = urlParams.get("id_order")

var client = localStorage.getItem('client');
var totalCost = localStorage.getItem('totalCost');

//  Recuperation de la date actuel
var now = new Date();

var heure = now.getHours();
var minutes = now.getMinutes();

//  function Affichage et recuperation des elements
function displayConfirm(){
    let confirmClient = localStorage.getItem('client');
    confirmClient = JSON.parse(confirmClient);


    let confirmContainer = document.querySelector("#confirmContainer");
    let emailContainer =  document.querySelector("#emailContainer");
    let recapContainer = document.querySelector('#recapContainer');


    let h2Username = createElement("h2")
    h2Username.classList.add("username")
    h2Username.innerHTML = "Merci de votre commande " + confirmClient.prenom +" " +confirmClient.nom
    appendChild(confirmContainer, h2Username )



    let pAdresse = createElement("p")
    pAdresse.classList.add("lead")
    pAdresse.innerHTML = "Elle sera livré au " + confirmClient.adress+ " " +confirmClient.adressMore+", " + confirmClient.city
    appendChild(emailContainer, pAdresse) 

    let pEmail = createElement("p")
    pEmail.classList.add("lead")
    pEmail.innerHTML = "Un e-mail de confirmation a été envoyé à " + confirmClient.email.bold()
    appendChild(emailContainer, pEmail)

    let pHour = createElement("p")
    pHour.classList.add("lead")
    pHour.innerHTML = "Votre commande a été effectuée à " + heure + "h" + minutes + ", le numéro de votre commande : " + confirmClient.order.bold()
    appendChild(emailContainer, pHour)

    let pTotal = createElement("p")
    pTotal.classList.add("lead")
    pTotal.innerHTML = "Votre carte bancaire vient d'être utilisé pour un achat de " + totalCost.bold() +" €".bold()
    appendChild(emailContainer, pTotal)

}

//  Function affichage du panier

function recapCart(){
    let recapCart = localStorage.getItem('teddies');
    recapCart = JSON.parse(recapCart);
    if(recapCart && recapContainer) {
        recapContainer.innerHTML = '';
        Object.values(recapCart).map(
            item => {

                let divCard = createElement("div")
                divCard.classList.add("card")
                appendChild(recapContainer, divCard)

                let divCardImg = createElement("img")
                divCardImg.classList.add("card-img-top")
                divCardImg.src += item.image
                divCardImg.setAttribute("alt", "Ours en peluche")
                divCardImg.style.width = "80%"
                divCardImg.style.margin = "auto"
                appendChild(divCard, divCardImg)
                
                let divBody = createElement("div")
                divBody.classList.add("card-body")
                appendChild(divCard, divBody)

                let divTitle = createElement("h5")
                divTitle.classList.add("card-title")
                divTitle.innerHTML+= item.name
                appendChild(divBody, divTitle)

                let divText = createElement("p")
                divText.classList.add("card-text")
                divText.innerHTML+= item.price + "€" 
                appendChild(divBody, divText)


            });
    }
}

// Function vider localStorage et retour home
function okConfirm(){
    localStorage.clear();
    document.location.href="index.html"
}

// Appel des fonctions
recapCart();
displayConfirm();
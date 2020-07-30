var client = localStorage.getItem('client');
var totalCost = localStorage.getItem('totalCost');

var now = new Date();

var heure = now.getHours();
var minutes = now.getMinutes();

function displayConfirm(){
    let confirmClient = localStorage.getItem('client');
    confirmClient = JSON.parse(confirmClient);


    let confirmContainer = document.querySelector("#confirmContainer");
    let emailContainer =  document.querySelector("#emailContainer");


    let h2Username = createElement("h2")
    h2Username.classList.add("username")
    h2Username.innerHTML = "Merci de votre commande " + confirmClient.prenom
    appendChild(confirmContainer, h2Username )



    let pAdresse = createElement("p")
    pAdresse.classList.add("lead")
    pAdresse.innerHTML = "Elle sera livré au " + confirmClient.adress+ " " +confirmClient.adressMore+", " + confirmClient.city
    appendChild(emailContainer, pAdresse) 

    let pEmail = createElement("p")
    pEmail.classList.add("lead")
    pEmail.innerHTML = "Un e-mail de confirmation a été envoyé à " + confirmClient.email
    appendChild(emailContainer, pEmail)

    let pHour = createElement("p")
    pHour.classList.add("lead")
    pHour.innerHTML = "Votre commande a été effectuée à " + heure + "h" + minutes + ", le numéro de votre commande : " + confirmClient.id
    appendChild(emailContainer, pHour)

    let pTotal = createElement("p")
    pTotal.classList.add("lead")
    pTotal.innerHTML = "Votre carte bancaire vient d'être utilisé pour un achat de " + totalCost +" €"
    appendChild(emailContainer, pTotal)

}

// Function vider localStorage et retour home
function okConfirm(){
    localStorage.clear();
    document.location.href="index.html"
}


displayConfirm();
// Recuperation de l'id dans l'url
const urlParams = new URLSearchParams(window.location.search)
let idProduct = urlParams.get("id")
console.log(idProduct);



fetch('http://localhost:3000/api/teddies/' + idProduct)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
      console.log(data);
  })
  // Affiche l'erreur
  .catch(function (error) {
    console.log(error)
  });

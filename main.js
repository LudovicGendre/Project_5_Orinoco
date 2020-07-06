const myImage = document.querySelector('img');

fetch('http://localhost:3001/api/teddies')
.then(function(response) {
  return response;
})
.then(function(data) {
    console.log(data);
    console.log(data.json());
})
.catch(function(error){
    console.log(error)
});

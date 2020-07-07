function test(){
  const myImage = document.querySelector('img');

  fetch('http://localhost:3001/api/teddies')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
      console.log(data);
  })
  .catch(function(error){
      console.log(error)
  });

};


test();

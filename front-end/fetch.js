function test(){
  const myImage = document.querySelector('img');

  fetch('http://localhost:3001/api/teddies')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
      console.log(data);
      document.getElementById("monDiv").innerHTML=data[2].name;
      document.getElementById("maDescription").innerHTML=data[2].description;
      document.getElementById("monImage").setAttribute("src",data[2].imageUrl);
      document.getElementById("monPrix").innerHTML=data[2].price + ' €';

      for(let datas of data ){
        console.log('Nom: ' + datas.name + "\n" + "Description :" + datas.description + "\n" + "Prix : " + datas.price + " €");
      };
  })
  .catch(function(error){
      console.log(error)
  });

};


test();

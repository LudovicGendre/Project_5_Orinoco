fetch('http://localhost:3000/api/teddies')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
      console.log(data);
  });

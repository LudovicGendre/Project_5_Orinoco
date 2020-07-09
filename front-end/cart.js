let carNumbers = localStorage.getItem('carNumbers');
carNumbers = parseInt(carNumbers);
console.log(carNumbers)

function onLoadCarNumbers() {
    let carNumbers = localStorage.getItem('carNumbers');

    if(carNumbers){
        document.querySelector('.btn-success span').textContent = carNumbers;
    }
}
onLoadCarNumbers()
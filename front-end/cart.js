let carts = document.querySelectorAll('.add-cart');



for (let i=0; i < carts.length; i++) {
    carts[i].addEventListener('click', () => {
        panierNumber();
    })
}


function panierNumber(){
    let productNumbers = localStorage.getItem('panierNumbers');
    productNumbers = parseInt(productNumbers);
    
    if(productNumbers) {
        localStorage.setItem('panierNumber', productNumbers + 1);
    } else {
        localStorage.setItem('panierNumber', 1);
    }
    
}

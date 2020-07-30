// Creation des elements a repeter
function createElement(element) {
    return document.createElement(element);
  }
  
  function appendChild(parent, element) {
    return parent.appendChild(element);
  }


  function fullCart(){
    let teddies = localStorage.getItem('teddies');
    if(teddies){
      setAddItem();
    }
  }

  // Function changement nom class
  function setAddItem() {
    const addItem = document.querySelector('.check_cart');
    addItem.className = "btn btn-success ml-auto mr-2 check_cart add"
  }

  fullCart();
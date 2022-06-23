const cart = [];


//const listProducts = document.getElementsByClassName("products-list");

const listProducts = document.querySelector(".products-list")
const cartButtonRemove = document.querySelector(".products-selection");
listProducts.addEventListener("click", addToCart);
cartButtonRemove.addEventListener("click",removeFromCart);

function addToCart(event){
    if (event.target.tagName === "BUTTON") {
        const id = event.target.id;
        for (let i = 0;  i  < products.length; i++){
            if(products[i].id === id){            


                cart.push(products[i]);
                }
        }
            console.log(cart);
}
    renderCart();

function renderCart() {
        const cartProducts = document.querySelector(".products-selection");
        cartProducts.innerHTML = "";
        for (let i = 0;  i  < cart.length; i++){
        createProduct(cart[i]);
        }
    }
  

function createProduct(product) {
    const cartProducts = document.querySelector(".products-selection");


    const productCart = document.createElement("li");    
    productCart.className = "flex";

    productCart.innerHTML = `
    
        <div class="products-image">
            <img src=${product.img} alt="Imagem do produto">
        </div>
        <div>
        <div class="flex">
        <h3 class="Title-2">${product.title}</h3>
            <button class="trash-btn oneClick">
                <img src="./Imagem/lixeira.png" alt="Icone lixeia">
            </button>
        </div>
        <div class="footer-cart">
                <p class="text-Caption">R$${product.price}</p>
            </div>
        </div>
        
        `
    
    
    cartProducts.appendChild(productCart); 
    

    }
}
function removeFromCart(event) {
   
    const productToRemove = event.target.closest("li");
    //aqui tenho que tirar o produto do array cart
    
    productToRemove.remove();


}
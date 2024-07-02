document.addEventListener("DOMContentLoaded", () => {
  const allAddToCartButtons = document.querySelectorAll(".btn.btn-primary");
  let buyThings = JSON.parse(localStorage.getItem('carrito')) || [];
  let zapatillasEnCarrito = buyThings.reduce((total, product) => total + product.amount, 0);
  
  // Actualiza el span al cargar la página
  updateCartQuantity(zapatillasEnCarrito);
  
  allAddToCartButtons.forEach((button) => {
      button.addEventListener("click", addProduct);
  });

  function addProduct(e) {
      e.preventDefault();
      const button = e.target; // El botón que se presionó
      const card = button.closest(".card"); // El contenedor .card asociado al botón
      const product = readTheContent(card); // Lee la información del producto
      console.log("Producto:", card);

      // Incrementa el contador de productos en el carrito
      zapatillasEnCarrito++;
      
      // Actualiza el span con el nuevo valor
      updateCartQuantity(zapatillasEnCarrito);
  }

  function readTheContent(productCard) {
      const productInfo = { 
          id: productCard.id,
          title: productCard.querySelector(".card-title").textContent,
          price: productCard.querySelector(".card-text").textContent,
          image: productCard.querySelector("img").src,
          amount: 1,
      };  
      
      let precioCopia = productInfo.price; 
      console.log(precioCopia + " precio copia");
      const exist = buyThings.some(productCard => productCard.title === productInfo.title);
      if (exist) {
          buyThings = buyThings.map(productCard => {
              if (productCard.title === productInfo.title) {
                  productCard.amount++; 
                  console.log(productCard.amount + " antes de multi");
                  if (productCard.amount > 1) {
                      productCard.price = parseFloat(productCard.price) + parseFloat(precioCopia);
                  }
              }
              return productCard;
          });
      } else {
          buyThings = [...buyThings, productInfo];
      }

      localStorage.setItem('carrito', JSON.stringify(buyThings));
  }
  
  function updateCartQuantity(quantity) {
      const quantitySpan = document.querySelector('#quantity');
      quantitySpan.innerText = quantity;
  }
});
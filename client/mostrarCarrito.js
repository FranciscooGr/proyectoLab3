document.addEventListener("DOMContentLoaded", () => {
  const carritoContainer = document.getElementById("carrito-container");
  let buyThings = JSON.parse(localStorage.getItem("carrito")) || [];
  function loadHtml() {
    //muestra el carrito
    carritoContainer.innerHTML = ""; // Limpia el contenido actual
    let totalPrecio = 5000; // Variable para almacenar el total de precios
   
    buyThings.forEach((productCard) => {
        const { id, title, price, image, amount } = productCard;
        const productoDiv = document.createElement("div");

        productoDiv.classList.add("producto");
        productoDiv.innerHTML = `
            <img src="${image}" alt="Imagen de ${title}">
            <p class="nombre-producto">${title}</p>
            <button class="bin-button" id="eliminarZapatilla" data-id="${id}">
                <svg class="bin-top" viewBox="0 0 39 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line y1="5" x2="39" y2="5" stroke="white" stroke-width="4"></line>
                    <line x1="12" y1="1.5" x2="26.0357" y2="1.5" stroke="white" stroke-width="3"></line>
                </svg>
                <svg class="bin-bottom" viewBox="0 0 33 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-inside-1_8_19" fill="white">
                        <path d="M0 0H33V35C33 37.2091 31.2091 39 29 39H4C1.79086 39 0 37.2091 0 35V0Z"></path>
                    </mask>
                    <path d="M0 0H33H0ZM37 35C37 39.4183 33.4183 43 29 43H4C-0.418278 43 -4 39.4183 -4 35H4H29H37ZM4 43C-0.418278 43 -4 39.4183 -4 35V0H4V35V43ZM37 0V35C37 39.4183 33.4183 43 29 43V35V0H37Z" fill="white" mask="url(#path-1-inside-1_8_19)"></path>
                    <path d="M12 6L12 29" stroke="white" stroke-width="4"></path>
                    <path d="M21 6V29" stroke="white" stroke-width="4"></path>
                </svg>
            </button>
            <button id="restarZapatilla" class="buttonCantidad">-</button>
            <span>${amount}</span>
            <button id="agregarZapatilla" class="buttonCantidad">+</button>
            <p class="precioProducto">$${parseFloat(price)}</p>
        `;

        carritoContainer.appendChild(productoDiv);

        // Agrega el precio de la zapatilla al totalPrecio
        totalPrecio += parseFloat(price);
        

        // Agrega el evento de clic al botón de eliminación
        const botonEliminar = productoDiv.querySelector(".bin-button");
        const botonAgregar = productoDiv.querySelector("#agregarZapatilla");
        const botonRestar = productoDiv.querySelector("#restarZapatilla");
        botonEliminar.addEventListener("click", () => {
            eliminarProducto(title);
        });
        botonAgregar.addEventListener("click", () => {
            agregarZapatilla(title);
            totalPrecio += parseFloat(price);
            amount = amount + 1; 
            console.log("valor parse "+amount);
            actualizarTotal(); // Actualizar el total después de agregar una zapatilla
        });
        botonRestar.addEventListener("click", () => {
            restarZapatilla(title, -1);
            totalPrecio -= parseFloat(price);
            amount = amount - 1; 
            actualizarTotal(); // Actualizar el total después de restar una zapatilla
        });
       // cuantasZapatillas += parseInt(amount);
    });

    // Función para actualizar el contenido del elemento Total con el totalPrecio
    function actualizarTotal() {
      
        const totalElement = document.getElementById("total");
        //const totalZapatillas = document.getElementById("totalZapatillas");
        totalElement.textContent = "$" + totalPrecio.toFixed(2); // Mostrar el total con dos decimales
        //totalZapatillas.textContent = parseInt(cuantasZapatillas);
    }

    // Llamar a actualizarTotal al cargar el HTML inicialmente
    actualizarTotal();
}
  function agregarZapatilla(title) {
    buyThings = buyThings.map((product) => {
      if (product.title === title) {
        console.log(product.price);
        product.amount += 1;
        product.price =
          (parseFloat(product.price) / parseFloat(product.amount - 1)) *
          parseFloat(product.amount);
      }
      console.log(product.price + " den");
      return product;
    });
    localStorage.setItem("carrito", JSON.stringify(buyThings));
    loadHtml();
  }

  function restarZapatilla(title, cantidad) {
    buyThings = buyThings.map((product) => {
      if (product.title === title) {
        product.amount += cantidad;
        if (product.amount < 1) {
          product.amount = 1; // Evitar cantidad negativa
        } else {
          product.price =
            (parseFloat(product.price) /
              parseFloat(product.amount - cantidad)) *
            parseFloat(product.amount);
        }
      }
      return product;
    });
    localStorage.setItem("carrito", JSON.stringify(buyThings));
    loadHtml();
  }

  function eliminarProducto(title) {
    buyThings = buyThings.filter((product) => product.title !== title);
    localStorage.setItem("carrito", JSON.stringify(buyThings));
    console.log("Producto eliminado, carrito actualizado:", buyThings);
    loadHtml();
  }

  loadHtml();
});


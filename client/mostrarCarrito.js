document.addEventListener("DOMContentLoaded", () => {
  const carritoContainer = document.getElementById("carrito-container");
  let buyThings = JSON.parse(localStorage.getItem("carrito")) || [];
  let totalPrecio = 0;

  function loadHtml() {
    carritoContainer.innerHTML = ""; // Limpia el contenido actual
    totalPrecio = 0; // Resetea el total de precios

    buyThings.forEach((productCard) => {
      const { id, title, price, image, amount } = productCard;
      const productoDiv = document.createElement("div");

      productoDiv.classList.add("producto");
      productoDiv.innerHTML = `
          <div class="producto">
            <img src="${image}" alt="Imagen de ${title}">
            <div class="producto-info">
                <p class="nombre-producto">${title}</p>
                <div class="precio-container">
                    <p class="precioProducto">$${parseFloat(price)}</p>
                </div>
                <div class="cantidad-container">
                    <button id="eliminarZapatilla" class="bin-button" data-id="${id}">
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
                    <span class="cantidad">${amount}</span>
                    <button id="agregarZapatilla" class="buttonCantidad">+</button>
                </div>
            </div>
          </div>
      `;

      carritoContainer.appendChild(productoDiv);

      // Agrega el precio de la zapatilla al totalPrecio
      totalPrecio += parseFloat(price) * amount;

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
          amount += 1;
          actualizarTotal(); // Actualizar el total después de agregar una zapatilla
      });
      botonRestar.addEventListener("click", () => {
          restarZapatilla(title, -1);
          totalPrecio -= parseFloat(price);
          amount -= 1;
          actualizarTotal(); // Actualizar el total después de restar una zapatilla
      });
    });

    // Función para actualizar el contenido del elemento Total con el totalPrecio
    function actualizarTotal() {
      const totalElement = document.getElementById("total");
      totalElement.textContent = "$" + totalPrecio.toFixed(2); // Mostrar el total con dos decimales
    }

    // Llamar a actualizarTotal al cargar el HTML inicialmente
    actualizarTotal();
  }

  function agregarZapatilla(title) {
    buyThings = buyThings.map((product) => {
      if (product.title === title) {
        product.amount += 1;
        product.price = (parseFloat(product.price) / (product.amount - 1)) * product.amount;
      }
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
          product.price = (parseFloat(product.price) / (product.amount - cantidad)) * product.amount;
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
    loadHtml();
  }

  loadHtml();

  const mercadopago = require('mercadopago');

mercadopago.configurations.setAccessToken('TEST-1e7f350d-5b57-4152-a172-4c71c50c7c7c');

  document.getElementById("checkout-button").addEventListener("click", () => {
    fetch('/create_preference', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        items: buyThings.map(product => ({
          title: product.title,
          unit_price: parseFloat(product.price),
          quantity: product.amount
        }))
      })
    })
    .then(response => response.json())
    .then(data => {
      window.location.href = `https://www.mercadopago.com/checkout/v1/redirect?pref_id=${data.id}`;
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
});
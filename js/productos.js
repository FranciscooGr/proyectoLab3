const productos = [
  {
    id: "urbano1",
    nombre: "Nike Court Legion",
    precio: 129999,
    img: "/assets-2/img-1-urbana.jpg",
    descripcion:
      "Con un estilo icónico y detalles de diseño innovadores, las zapatillas urbanas Nike son la elección perfecta para aquellos que buscan destacar en la jungla urbana.",
  },
  {
    id: "urbano2",
    nombre: "Nike Court Vision",
    precio: 70000,
    img: "/assets-2/img-2-urbana.jpg",
    descripcion:
      "Explora la ciudad con confianza con las zapatillas urbanas Nike, diseñadas para brindarte comodidad y estilo en cada paso que des.",
  },
  {
    id: "urbano3",
    nombre: "Nike Court Vision Mid",
    precio: 200000,
    img: "/assets-2/img-3-urbana.jpg",
    descripcion:
      "Las zapatillas urbanas Nike están diseñadas para proporcionarte un ajuste cómodo y un estilo inigualable, sin importar adónde te lleve la ciudad.",
  },
  {
    id: "urbano4",
    nombre: "Nike Air Force 1",
    precio: 97999,
    img: "/assets-2/img-4-urbana.jpg",
    descripcion:
      "Innovador sistema de cordones ajustables con cierre por contacto para un ajuste personalizado.",
  },
  {
    id: "urbano5",
    nombre: "Nike Air Force 1 07 SE Mujer",
    precio: 82000,
    img: "/assets-2/img-5-urbana.jpg",
    descripcion:
      "Con su combinación de estilo audaz y tecnología de vanguardia, las zapatillas urbanas Nike te permiten expresar tu individualidad mientras exploras la ciudad.",
  },
  {
    id: "urbano6",
    nombre: "Nike Air Max 97 Se Ncps Mujer",
    precio: 68999,
    img: "/assets-2/img-6-urbana.jpg",
    descripcion:
      "Construcción con materiales de alta calidad, incluyendo textil y gamuza para una apariencia elegante y resistente.",
  },
  {
    id: "urbano7",
    nombre: "Vans urban s1",
    precio: 68.0,
    img: "/assets-2/img-14-urbana.jpg",
    descripcion:
      " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
  },
  {
    id: "urbano8",
    nombre: "DC pure shark",
    precio: 107999,
    img: "/assets-2/img-19-urbana.jpg",
    descripcion:
      " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
  },
  {
    id: "urbano9",
    nombre: "Dc pure wtn",
    precio: 115000,
    img: "/assets-2/img-20-urbana.jpg",
    descripcion:
      " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
  },
  {
    id: "urbano10",
    nombre: "dc skyline",
    precio: 99000,
    img: "/assets-2/img-21-urbana.jpg",
    descripcion:
      " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
  },
  {
    id: "urbano11",
    nombre: "Nike Air max system",
    precio: 97.999,
    img: "/assets-2/img-22-urbana.jpg",
    descripcion:
      " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
  },
  {
    id: "urbano12",
    nombre: "nike air max excee",
    precio: 104999,
    img: "/assets-2/img-25-urbana.jpg",
    descripcion:
      " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
  },
  {
    id: "urbano13",
    nombre: "Nike air max gore-tex",
    precio: 95.0,
    img: "/assets-2/img-26-urbana.jpg",
    descripcion:
      " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
  },
  {
    id: "deportivo1",
    nombre: "Adidas Duramo One",
    precio: 74000,
    img: "/assets-2/img-7-deportivo.jpg",
    descripcion:
      "Suela tipo cupsole de caucho que proporciona tracción y estabilidad en diversas superficies.",
  },
  {
    id: "deportivo2",
    nombre: "Adidas Zero",
    precio: 140000,
    img: "/assets-2/img-8-deportivo.jpg",
    descripcion:
      "Suela de caucho tipo cupsole diseñada para ofrecer un excelente agarre y durabilidad en cada paso.",
  },
  {
    id: "deportivo3",
    nombre: "Adidas Adizero Boston",
    precio: 81000,
    img: "/assets-2/img-9-deportivo.jpg",
    descripcion:
      " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
  },
  {
    id: "deportivo4",
    nombre: "Adidas Run Falcon",
    precio: 93999,
    img: "/assets-2/img-12-deportivo.jpg",
    descripcion:
      " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
  },
  {
    id: "deportivo5",
    nombre: "Adidas Adistar 1.0",
    precio: 64999,
    img: "/assets-2/img-15-deportivo.jpg",
    descripcion:
      " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
  },
  {
    id: "deportivo6",
    nombre: "Adidas Switch Run",
    precio: 74999,
    img: "/assets-2/img-16-deportivo.jpg",
    descripcion:
      " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
  },
  {
    id: "deportivo7",
    nombre: "Adidas Deerupt runner",
    precio: 120999,
    img: "/assets-2/img-17-deportivo.jpg",
    descripcion:
      " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
  },
  {
    id: "deportivo8",
    nombre: "Nike air max TW",
    precio: 71000,
    img: "/assets-2/img-18-deportivo.jpg",
    descripcion:
      " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
  },
  {
    id: "deportivo9",
    nombre: "Nike Air max 90",
    precio: 84999,
    img: "/assets-2/img-23-deportivo.jpg",
    descripcion:
      " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
  },
  {
    id: "deportivo10",
    nombre: "Nike Air Max 12 Se",
    precio: 81000,
    img: "/assets-2/img-24-deportivo.jpg",
    descripcion:
      " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
  },
  {
    id: "deportivo11",
    nombre: "Nike air max ap",
    precio: 88000,
    img: "/assets-2/img-27-deportivo.jpg",
    descripcion:
      " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
  },
  {
    id: "formal1",
    nombre: "Zapato Bowen",
    precio: 109999,
    img: "/assets-2/img-10-formal.jpg",
    descripcion:
      " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
  },
  {
    id: "formal2",
    nombre: "Zapato cuero Zara",
    precio: 79000,
    img: "/assets-2/img-11-formal.jpg",
    descripcion:
      " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
  },
  {
    id: "formal3",
    nombre: "Zapato cuero Marron Zara",
    precio: 91999,
    img: "/assets-2/img-13-formal.jpg",
    descripcion:
      " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
  },
  {
    id: "ofertas1",
    nombre: "Air Jordan 1 Mid SE Craft",
    precio: 194999,
    descripcion:
      " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
  },
  {
    id: "ofertas2",
    nombre: "Air Jordan 1 Mid SE Deluxe",
    precio: 194999,
    descripcion:
      " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
  },
  {
    id: "ofertas3",
    nombre: "Air Jordan 3 High SE Raft",
    precio: 151999,
    descripcion:
      " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
  },
  {
    id: "ofertas4",
    nombre: "Jordan Nu Retro 1 Low t",
    precio: 194999,
    descripcion:
      " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
  },
  {
    id: "ofertas5",
    nombre: "Air Jordan 1 High OG Mauve",
    precio: 194999,
    descripcion:
      " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
  },
  {
    id: "ofertas6",
    nombre: "Adidas Daily 3.0 ",
    precio: 68799,
    descripcion:
      " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
  },
  {
    id: "ofertas7",
    nombre: "Zapatillas Rivalry Low ",
    precio: 104000,
    descripcion:
      " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
  },
  {
    id: "ofertas8",
    nombre: "Zapatillas Ultraboost 1.0 ",
    precio: 136500,
    descripcion:
      " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
  },
  {
    id: "ofertas9",
    nombre: "Adidas Daily 3.0",
    precio: 96000,
    descripcion:
      " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
  },
];

const productosSeleccionados = JSON.parse(localStorage.getItem('idsSeleccionados')) || [];
// Función para agregar un producto seleccionado
function agregarProductoSeleccionado(idSeleccionado) {
  const productoEncontrado = productos.find((producto) => producto.id === idSeleccionado);
  console.log(productoEncontrado);
  if (productoEncontrado) {
    productosSeleccionados.push(idSeleccionado);
    localStorage.setItem('idsSeleccionados', JSON.stringify(productosSeleccionados));
    actualizarCarrito();
  } 
  else {
    console.log(`Producto con ID ${idSeleccionado} no encontrado.`);
  }
  
  const exist = productosSeleccionados.some(productos)
}

// Función para eliminar un producto seleccionado
function eliminarProductoSeleccionado(idSeleccionado) {
  const index = productosSeleccionados.indexOf(idSeleccionado);
  if (index !== -1) {
    productosSeleccionados.splice(index, 1);
    localStorage.setItem('idsSeleccionados', JSON.stringify(productosSeleccionados));
    actualizarCarrito();
  }
}

// Función para mostrar los productos seleccionados en el carrito
function actualizarCarrito() {
  const carritoContainer = document.getElementById('carrito-container');
  carritoContainer.innerHTML = ''; // Limpia el contenido actual

  productosSeleccionados.forEach((idSeleccionado) => {
    
    const productoEncontrado = productos.find((producto) => producto.id === idSeleccionado);
    if (productoEncontrado) {
      const productoDiv = document.createElement('div');
      productoDiv.classList.add('producto');
      productoDiv.innerHTML = `
        <img src="${productoEncontrado.img}" alt="Imagen de ${productoEncontrado.nombre}">
        <p class="nombre-producto">${productoEncontrado.nombre}</p>
        <button class="bin-button" id="eliminarZapatilla" data-id="${productoEncontrado.id}">
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
                <span></span>
                <button id="agregarZapatilla" class="buttonCantidad">+</button>
        <p class="precioProducto">$${productoEncontrado.precio}</p>
        
      `;
      carritoContainer.appendChild(productoDiv);

      // Agrega el evento de clic al botón de eliminación
      const botonEliminar = productoDiv.querySelector('#eliminarZapatilla');
      const agregarZapatilla = productoDiv.querySelector('#agregarZapatilla')
      const restarZapatilla = productoDiv.querySelector('#restarZapatilla')
      botonEliminar.addEventListener('click', () => {
        eliminarProductoSeleccionado(productoEncontrado.id);
      });
      agregarZapatilla.addEventListener('click', () => {  
        console.log(productosSeleccionados);
      })
      restarZapatilla.addEventListener('click', () => {            
      })
    }
  });
}

// Inicialización del carrito con productos almacenados en localStorage
document.addEventListener('DOMContentLoaded', () => {
  actualizarCarrito();
});
document.addEventListener("DOMContentLoaded", function () {
  const urlImagen = localStorage.getItem("imagen"); // Recupera la URL de localStorage
  const idSelect = localStorage.getItem("id");
  // Establece la URL de la imagen en el elemento <img> con el ID específico
  document.querySelector("#urbano").src = urlImagen;
  const productos = [
    (zapatilla1 = {
      id: "urbano1",
      nombre: "Nike Court Legion",
      precio: 129999,
    }),
    (zapatilla2 = {
      id: "urbano2",
      nombre: "Nike Court Vision",
      precio: 70000,
    }),
    (zapatilla3 = {
      id: "urbano3",
      nombre: "Nike Court Vision Mid",
      precio: 200000,
    }),
    (zapatilla4 = {
      id: "urbano4",
      nombre: "Nike Air Force 1",
      precio: 97999,
    }),
    (zapatilla5 = {
      id: "urbano5",
      nombre: "Nike Air Force 1 07 SE Mujer",
      precio: 32000,
    }),
    (zapatilla6 = {
      id: "urbano6",
      nombre: "Nike Air Max 97 Se Ncps Mujer",
      precio: 68999,
    }),
    (zapatilla7 = {
      id: "deportivo1",
      nombre: "Adidas Duramo One",
      precio: 74000,
    }),
    (zapatilla8 = {
      id: "deportivo2",
      nombre: "Adidas Zero",
      precio: 14000,
    }),
    (zapatilla9 = {
      id: "deportivo3",
      nombre: "Adidas Adizero Boston",
      precio: 81000,
    }),
  ];
  function preDescripcion() {
    for (let x = 0; x < productos.length; x++) {
      if (idSelect === productos[x].id) {
        return {
          precio: productos[x].precio,
          nombre: productos[x].nombre,
        };
      }
    }
  }
  const informacionProducto = preDescripcion();
  const precio = informacionProducto.precio;
  const nombre = informacionProducto.nombre;
  document.getElementById("precio").textContent = precio;
  document.getElementById("tituloProducto").textContent = nombre; 
});

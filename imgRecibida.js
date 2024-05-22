document.addEventListener("DOMContentLoaded", function () {
  const urlImagen = localStorage.getItem("imagen"); // Recupera la URL de localStorage
  const idSelect = localStorage.getItem("id");
  // Establece la URL de la imagen en el elemento <img> con el ID específico
  document.querySelector("#urbano").src = urlImagen;
  
  const productos = [
    (zapatilla1 = {
      id: "urbano1",
      nombre: "Nike Court Legion",
      precio: "$129999",
      descripcion: "Con un estilo icónico y detalles de diseño innovadores, las zapatillas urbanas Nike son la elección perfecta para aquellos que buscan destacar en la jungla urbana.",
    }),
    (zapatilla2 = {
      id: "urbano2",
      nombre: "Nike Court Vision",
      precio: "$70000",
      descripcion: "Explora la ciudad con confianza con las zapatillas urbanas Nike, diseñadas para brindarte comodidad y estilo en cada paso que des.",
    }),
    (zapatilla3 = {
      id: "urbano3",
      nombre: "Nike Court Vision Mid",
      precio: "$200000",
      descripcion:"Las zapatillas urbanas Nike están diseñadas para proporcionarte un ajuste cómodo y un estilo inigualable, sin importar adónde te lleve la ciudad.",
    }),
    (zapatilla4 = {
      id: "urbano4",
      nombre: "Nike Air Force 1",
      precio: "$97999",
      descripcion: "Innovador sistema de cordones ajustables con cierre por contacto para un ajuste personalizado.",
    }),
    (zapatilla5 = {
      id: "urbano5",
      nombre: "Nike Air Force 1 07 SE Mujer",
      precio: "$32000",
      descripcion: "Con su combinación de estilo audaz y tecnología de vanguardia, las zapatillas urbanas Nike te permiten expresar tu individualidad mientras exploras la ciudad.",
    }),
    (zapatilla6 = {
      id: "urbano6",
      nombre: "Nike Air Max 97 Se Ncps Mujer",
      precio: "$68999",
      descripcion: "Construcción con materiales de alta calidad, incluyendo textil y gamuza para una apariencia elegante y resistente.",
    }),
    (zapatilla7 = {
      id: "deportivo1",
      nombre: "Adidas Duramo One",
      precio: "$74000",
      descripcion:"Suela tipo cupsole de caucho que proporciona tracción y estabilidad en diversas superficies.",
    }),
    (zapatilla8 = {
      id: "deportivo2",
      nombre: "Adidas Zero",
      precio: "$14000",
      descripcion: "Suela de caucho tipo cupsole diseñada para ofrecer un excelente agarre y durabilidad en cada paso.",
    }),
    (zapatilla9 = {
      id: "deportivo3",
      nombre: "Adidas Adizero Boston",
      precio: "$81000",
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
  ];
  function preDescripcion() {
    for (let x = 0; x < productos.length; x++) {
      if (idSelect === productos[x].id) {
        return {
          precio: productos[x].precio,
          nombre: productos[x].nombre,
          descripcion: productos[x].descripcion
        };
      }
    }
  }
  const informacionProducto = preDescripcion();
  console.log(" id selkeccionado", idSelect);
  const precio = informacionProducto.precio;
  const nombre = informacionProducto.nombre;
  const descripcion = informacionProducto.descripcion; 
  document.getElementById("precio").textContent = precio;
  document.getElementById("tituloProducto").textContent = nombre; 
  document.getElementById("descripcion").textContent = descripcion; 
});

document.addEventListener("DOMContentLoaded", function () {
  const urlImagen = localStorage.getItem("imagen"); // Recupera la URL de localStorage
  const idSelect = localStorage.getItem("id");
  // Establece la URL de la imagen en el elemento <img> con el ID específico
  document.querySelector("#urbano").src = urlImagen;
  
  const productos = [
    (zapatilla1 = {
      id: "urbano1",
      nombre: "Nike Court Legion",
      precio: "$129.999",
      descripcion: "Con un estilo icónico y detalles de diseño innovadores, las zapatillas urbanas Nike son la elección perfecta para aquellos que buscan destacar en la jungla urbana.",
    }),
    (zapatilla2 = {
      id: "urbano2",
      nombre: "Nike Court Vision",
      precio: "$70.000",
      descripcion: "Explora la ciudad con confianza con las zapatillas urbanas Nike, diseñadas para brindarte comodidad y estilo en cada paso que des.",
    }),
    (zapatilla3 = {
      id: "urbano3",
      nombre: "Nike Court Vision Mid",
      precio: "$200.000",
      descripcion:"Las zapatillas urbanas Nike están diseñadas para proporcionarte un ajuste cómodo y un estilo inigualable, sin importar adónde te lleve la ciudad.",
    }),
    (zapatilla4 = {
      id: "urbano4",
      nombre: "Nike Air Force 1",
      precio: "$97.999",
      descripcion: "Innovador sistema de cordones ajustables con cierre por contacto para un ajuste personalizado.",
    }),
    (zapatilla5 = {
      id: "urbano5",
      nombre: "Nike Air Force 1 07 SE Mujer",
      precio: "$82.000",
      descripcion: "Con su combinación de estilo audaz y tecnología de vanguardia, las zapatillas urbanas Nike te permiten expresar tu individualidad mientras exploras la ciudad.",
    }),
    (zapatilla6 = {
      id: "urbano6",
      nombre: "Nike Air Max 97 Se Ncps Mujer",
      precio: "$68.999",
      descripcion: "Construcción con materiales de alta calidad, incluyendo textil y gamuza para una apariencia elegante y resistente.",
    }),
    (zapatilla7 = {
      id: "urbano7",
      nombre: "Vans urban s1",
      precio: "$68.000",
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    (zapatilla8 = {
      id: "urbano8",
      nombre: "DC pure shark",
      precio: "$107.999",
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    (zapatilla9 = {
      id: "urbano9",
      nombre: "Dc pure wtn",
      precio: "$115.000",
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    (zapatilla10 = {
      id: "urbano10",
      nombre: "dc skyline",
      precio: "$99.000",
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    (zapatilla11 = {
      id: "urbano11",
      nombre: "Nike Air max system",
      precio: "$97.999",
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    (zapatilla12 = {
      id: "urbano12",
      nombre: "nike air max excee",
      precio: "$104.999",
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    (zapatilla13 = {
      id: "urbano13",
      nombre: "Nike air max gore-tex",
      precio: "$95.000",
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    (zapatilla14 = {
      id: "deportivo1",
      nombre: "Adidas Duramo One",
      precio: "$74.000",
      descripcion:"Suela tipo cupsole de caucho que proporciona tracción y estabilidad en diversas superficies.",
    }),
    (zapatilla15 = {
      id: "deportivo2",
      nombre: "Adidas Zero",
      precio: "$140.000",
      descripcion: "Suela de caucho tipo cupsole diseñada para ofrecer un excelente agarre y durabilidad en cada paso.",
    }),
    (zapatilla16 = {
      id: "deportivo3",
      nombre: "Adidas Adizero Boston",
      precio: "$81.000",
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    (zapatilla17 = {
      id: "deportivo4",
      nombre: "Adidas Run Falcon",
      precio: "$93.999",
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    (zapatilla18 = {
      id: "deportivo5",
      nombre: "Adidas Adistar 1.0",
      precio: "$64.999",
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    (zapatilla19 = {
      id: "deportivo6",
      nombre: "Adidas Switch Run",
      precio: "$74.999",
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    (zapatilla20 = {
      id: "deportivo7",
      nombre: "Adidas Deerupt runner",
      precio: "$120.999",
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    (zapatilla21 = {
      id: "deportivo8",
      nombre: "Nike air max TW",
      precio: "$71.000",
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    (zapatilla22 = {
      id: "deportivo9",
      nombre: "Nike Air max 90",
      precio: "$84.999",
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    (zapatilla23 = {
      id: "deportivo10",
      nombre: "Nike Air Max 12 Se",
      precio: "$81.000",
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    (zapatilla24 = {
      id: "deportivo11",
      nombre: "Nike air max ap",
      precio: "$88.000",
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    (zapatilla25 = {
      id: "formal1",
      nombre: "Zapato Bowen",
      precio: "$109.999",
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    (zapatilla26= {
      id: "formal2",
      nombre: "Zapato cuero Zara",
      precio: "$79.000",
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    (zapatilla27 = {
      id: "formal3",
      nombre: "Zapato cuero Marron Zara",
      precio: "$91.999",
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

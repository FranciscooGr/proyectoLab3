document.addEventListener("DOMContentLoaded", function () {
  const urlImagen = localStorage.getItem("imagen"); // Recupera la URL de localStorage
  const idSelect = localStorage.getItem("id");
  // Establece la URL de la imagen en el elemento <img> con el ID específico
  document.querySelector("#mainImg").src = urlImagen;
  
  const productos = [
    (zapatilla1 = {
      id: "urbano1",
      nombre: "Nike Court Legion",
      precio: 129999,
      descripcion: "Con un estilo icónico y detalles de diseño innovadores, las zapatillas urbanas Nike son la elección perfecta para aquellos que buscan destacar en la jungla urbana.",
    }),
    (zapatilla2 = {
      id: "urbano2",
      nombre: "Nike Court Vision",
      precio: 70000,
      descripcion: "Explora la ciudad con confianza con las zapatillas urbanas Nike, diseñadas para brindarte comodidad y estilo en cada paso que des.",
    }),
    (zapatilla3 = {
      id: "urbano3",
      nombre: "Nike Court Vision Mid",
      precio: 200000,
      descripcion:"Las zapatillas urbanas Nike están diseñadas para proporcionarte un ajuste cómodo y un estilo inigualable, sin importar adónde te lleve la ciudad.",
    }),
    (zapatilla4 = {
      id: "urbano4",
      nombre: "Nike Air Force 1",
      precio: 97999,
      descripcion: "Innovador sistema de cordones ajustables con cierre por contacto para un ajuste personalizado.",
    }),
    (zapatilla5 = {
      id: "urbano5",
      nombre: "Nike Air Force 1 07 SE Mujer",
      precio: 82000,
      descripcion: "Con su combinación de estilo audaz y tecnología de vanguardia, las zapatillas urbanas Nike te permiten expresar tu individualidad mientras exploras la ciudad.",
    }),
    (zapatilla6 = {
      id: "urbano6",
      nombre: "Nike Air Max 97 Se Ncps Mujer",
      precio: 68999,
      descripcion: "Construcción con materiales de alta calidad, incluyendo textil y gamuza para una apariencia elegante y resistente.",
    }),
    (zapatilla7 = {
      id: "urbano7",
      nombre: "Vans urban s1",
      precio: 68.000,
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    (zapatilla8 = {
      id: "urbano8",
      nombre: "DC pure shark",
      precio: 107999,
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    (zapatilla9 = {
      id: "urbano9",
      nombre: "Dc pure wtn",
      precio: 115.000,
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    (zapatilla10 = {
      id: "urbano10",
      nombre: "dc skyline",
      precio: 99000,
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    (zapatilla11 = {
      id: "urbano11",
      nombre: "Nike Air max system",
      precio: 97.999,
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    (zapatilla12 = {
      id: "urbano12",
      nombre: "nike air max excee",
      precio: 104999,
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    (zapatilla13 = {
      id: "urbano13",
      nombre: "Nike air max gore-tex",
      precio: 95.000,
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    (zapatilla14 = {
      id: "deportivo1",
      nombre: "Adidas Duramo One",
      precio: 74000,
      descripcion:"Suela tipo cupsole de caucho que proporciona tracción y estabilidad en diversas superficies.",
    }),
    (zapatilla15 = {
      id: "deportivo2",
      nombre: "Adidas Zero",
      precio: 140000,
      descripcion: "Suela de caucho tipo cupsole diseñada para ofrecer un excelente agarre y durabilidad en cada paso.",
    }),
    (zapatilla16 = {
      id: "deportivo3",
      nombre: "Adidas Adizero Boston",
      precio: 81000,
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    (zapatilla17 = {
      id: "deportivo4",
      nombre: "Adidas Run Falcon",
      precio: 93999,
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    (zapatilla18 = {
      id: "deportivo5",
      nombre: "Adidas Adistar 1.0",
      precio: 64999,
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    (zapatilla19 = {
      id: "deportivo6",
      nombre: "Adidas Switch Run",
      precio: 74999,
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    (zapatilla20 = {
      id: "deportivo7",
      nombre: "Adidas Deerupt runner",
      precio: 120999,
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    (zapatilla21 = {
      id: "deportivo8",
      nombre: "Nike air max TW",
      precio: 71000,
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    (zapatilla22 = {
      id: "deportivo9",
      nombre: "Nike Air max 90",
      precio: 84999,
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    (zapatilla23 = {
      id: "deportivo10",
      nombre: "Nike Air Max 12 Se",
      precio: 81000,
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    (zapatilla24 = {
      id: "deportivo11",
      nombre: "Nike air max ap",
      precio: 88000,
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    (zapatilla25 = {
      id: "formal1",
      nombre: "Zapato Bowen",
      precio: 109999,
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    (zapatilla26= {
      id: "formal2",
      nombre: "Zapato cuero Zara",
      precio: 79000,
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    (zapatilla27 = {
      id: "formal3",
      nombre: "Zapato cuero Marron Zara",
      precio: 91999,
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    (zapatilla28 = {
      id: "ofertas1",
      nombre: "Air Jordan 1 Mid SE Craft",
      precio: 194999,
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    (zapatilla29 = {
      id: "ofertas2",
      nombre: "Air Jordan 1 Mid SE Deluxe",
      precio: 194999,
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    (zapatilla30 = {
      id: "ofertas3",
      nombre: "Air Jordan 3 High SE Raft",
      precio: 151999,
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    (zapatilla31 = {
      id: "ofertas4",
      nombre: "Jordan Nu Retro 1 Low t",
      precio: 194999,
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    (zapatilla32 = {
      id: "ofertas5",
      nombre: "Air Jordan 1 High OG Mauve",
      precio: 194999,
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    (zapatilla33 = {
      id: "ofertas6",
      nombre: "Adidas Daily 3.0 ",
      precio: 68799,
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    (zapatilla34 = {
      id: "ofertas7",
      nombre: "Zapatillas Rivalry Low ",
      precio: 104000,
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    (zapatilla35 = {
      id: "ofertas8",
      nombre: "Zapatillas Ultraboost 1.0 ",
      precio: 136500,
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    (zapatilla36 = {
      id: "ofertas9",
      nombre: "Adidas Daily 3.0",
      precio: 96000,
      descripcion: " Sistema de atado de cordones con tira ajustable de cierre por contacto Exterior en material textil y gamuza  Forro interno textil Suela tipo cupsole de caucho",
    }),
    ];
    
  function preDescripcion() {
    for (let x = 0; x < productos.length; x++) {
      if (idSelect === productos[x].id) {
        localStorage.setItem("id", productos[x].id); // Almacena la URL en localStorage
        localStorage.setItem("precio", productos[x].precio);
        localStorage.setItem("imagen", urlImagen); // Almacena la URL en localStorage
        localStorage.setItem("nombre", productos[x].nombre);
        return {
          id: productos[x].id,
          precio: productos[x].precio,
          nombre: productos[x].nombre,
          descripcion: productos[x].descripcion
        };
      }
    }
  }
  function agregarAlCarrito(){
    for (let x = 0; x < productos.length; x++) {
      if (idSelect === productos[x].id) {
        localStorage.setItem("id", productos[x].id); // Almacena la URL en localStorage
        localStorage.setItem("precio", productos[x].precio);
        localStorage.setItem("imagen", urlImagen); // Almacena la URL en localStorage
        localStorage.setItem("nombre", productos[x].nombre);
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

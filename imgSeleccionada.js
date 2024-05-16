function guardarImagen(urlImagen, idSelect) {
  localStorage.setItem("imagen", urlImagen); // Almacena la URL en localStorage
  localStorage.setItem("id", idSelect); // Almacena el id en localStorage

  // Llamar a preDescripcion después de almacenar el id

  // Redirige a la segunda página
  window.location.href = "/despcripcionZapatillas.html";
}

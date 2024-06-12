function agregarAlCarrito(idselect) {
  const idsSeleccionados = JSON.parse(localStorage.getItem('idsSeleccionados')) || [];
  idsSeleccionados.push(idselect);
  localStorage.setItem('idsSeleccionados', JSON.stringify(idsSeleccionados));
  console.log(idsSeleccionados);
}
document.addEventListener("DOMContentLoaded", function () {
  const select = document.getElementById("filtroSelect");

  select.addEventListener("change", function (event) {
    const valorSeleccionado = event.target.value;
    console.log("Elección:", valorSeleccionado);
    const imagenesUrbanas = document.querySelectorAll("#urbano");
    const imagenesDeportivas = document.querySelectorAll("#deportivo");

    if (valorSeleccionado === "urbano") {
      // Ocultar todas las imágenes deportivas y sus figcaptions
      imagenesDeportivas.forEach(function (imagen) {
        imagen.style.display = "none";
        const figcaption = imagen.querySelector("#figcaption");
        if (figcaption) {
          figcaption.style.display = "none";
        }
      });

      // Mostrar todas las imágenes urbanas y sus figcaptions
      imagenesUrbanas.forEach(function (imagen) {
        imagen.style.display = "block";
        const figcaption = imagen.querySelector("#figcaption");
        if (figcaption) {
          figcaption.style.display = "block";
        }
      });
    } else if (valorSeleccionado === "deportivo") {
      // Ocultar todas las imágenes urbanas y sus figcaptions
      imagenesUrbanas.forEach(function (imagen) {
        imagen.style.display = "none";
        const figcaption = imagen.querySelector("#figcaption");
        if (figcaption) {
          figcaption.style.display = "none";
        }
      });

      // Mostrar todas las imágenes deportivas y sus figcaptions
      imagenesDeportivas.forEach(function (imagen) {
        imagen.style.display = "block";
        const figcaption = imagen.querySelector("#figcaption");
        if (figcaption) {
          figcaption.style.display = "block";
        }
      });
    } else if (
      valorSeleccionado === "filtro" ||
      valorSeleccionado === "restaurar"
    ) {
      // Mostrar todas las imágenes y sus figcaptions
      imagenesUrbanas.forEach(function (imagen) {
        imagen.style.display = "block";
        const figcaption = imagen.querySelector("figcaption");
        if (figcaption) {
          figcaption.style.display = "block";
        }
      });
      imagenesDeportivas.forEach(function (imagen) {
        imagen.style.display = "block";
        const figcaption = imagen.querySelector("figcaption");
        if (figcaption) {
          figcaption.style.display = "block";
        }
      });
    }
  });
});

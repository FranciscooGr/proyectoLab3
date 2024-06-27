document.addEventListener("DOMContentLoaded", function () {
    const select = document.getElementById("filtroSelect");
    const cards = document.querySelectorAll(".card");

    // Función para mostrar todas las tarjetas
    function mostrarTodasLasTarjetas() {
        cards.forEach(card => card.style.display = "block");
    }

    // Muestra todas las tarjetas al cargar la página
    mostrarTodasLasTarjetas();

    select.addEventListener("change", function (event) {
        const valorSeleccionado = event.target.value;

        if (valorSeleccionado === "restaurar" || valorSeleccionado === "filtro") {
            mostrarTodasLasTarjetas();
        } else {
            cards.forEach(card => {
                if (card.getAttribute("data-descuento") === valorSeleccionado) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        }
    });
});
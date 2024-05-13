// Espera a que el DOM se cargue completamente antes de ejecutar cualquier código
document.addEventListener("DOMContentLoaded", function() {
    // Código dentro de esta función se ejecutará cuando el DOM esté listo

    // Asignamos el objeto document a la variable d para abreviar su uso
    const d = document;

    // Definimos una función llamada searchFilters que toma dos argumentos: input y selector
    function searchFilters(input, selector) {
        // Agregamos un event listener al input especificado por input (por ejemplo, #busqueda)
        // para detectar cuando se suelta una tecla (keyup)
        d.querySelector(input).addEventListener("keyup", (e) => {
            // Obtenemos el valor del input y lo convertimos a minúsculas para realizar una búsqueda insensible a mayúsculas/minúsculas
            const searchTerm = e.target.value.toLowerCase();
            // Seleccionamos todos los elementos en el DOM que coinciden con el selector especificado por selector (por ejemplo, .figura)
            // y ejecutamos una función para cada uno de ellos
            d.querySelectorAll(selector).forEach((el) => {
                // Obtenemos el texto contenido en el elemento y lo convertimos a minúsculas para realizar una búsqueda insensible a mayúsculas/minúsculas
                const text = el.textContent.toLowerCase();
                // Verificamos si el texto del elemento incluye el término de búsqueda
                if (text.includes(searchTerm)) {
                    // Si el texto incluye el término de búsqueda, eliminamos la clase "filter" para mostrar el elemento
                    el.classList.remove("filter");
                } else {
                    // Si el texto no incluye el término de búsqueda, agregamos la clase "filter" para ocultar el elemento
                    el.classList.add("filter");
                }
            });
        });
    }

    // Llamamos a la función searchFilters con los selectores adecuados (por ejemplo, #busqueda para el input y .figura para los elementos que se filtrarán)
    searchFilters("#busqueda", ".figura");
});
document.addEventListener("DOMContentLoaded", function() {
    const d = document;

    function searchFilters(input, selector) {
        const searchTerm = d.querySelector(input);
        const items = Array.from(d.querySelectorAll(selector));

        searchTerm.addEventListener("keyup", (e) => {
            const term = e.target.value.trim().toLowerCase();

            items.forEach(el => {
                const text = el.textContent.trim().toLowerCase();
                const matches = text.includes(term);

                if (matches) {
                    el.classList.remove("filter");
                    if (!el.classList.contains("matched")) {
                        el.classList.add("matched");
                        el.parentNode.prepend(el); // Mover al principio del contenedor
                    }
                } else {
                    el.classList.add("filter");
                    el.classList.remove("matched");
                    // Restaurar el orden original solo si está movido y no coincide
                    if (el.nextSibling) {
                        el.parentNode.insertBefore(el, el.nextSibling);
                    } else {
                        el.parentNode.appendChild(el);
                    }
                }
            });

            // Revisar el orden después de la búsqueda y restablecer si es necesario
            items.forEach(el => {
                if (!el.classList.contains("matched")) {
                    el.parentNode.appendChild(el);
                }
            });
        });
    }

    searchFilters("#busqueda", ".card");
});
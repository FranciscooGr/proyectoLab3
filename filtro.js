document.addEventListener("DOMContentLoaded", function(){
    const select = document.getElementById("filtroSelect");
    
    select.addEventListener('change', function(event){
        const valorSeleccionado = event.target.value;
        console.log("Elección:", valorSeleccionado);
        const imagenesUrbanas = document.querySelectorAll("#urbano");
        const imagenesDeportivas = document.querySelectorAll("#deportivo");

            if(valorSeleccionado === "urbano"){
                imagenesDeportivas.forEach(function(imagen) {
                    imagen.style.display = "none";
                });
            
                // Mostrar todas las imágenes urbanas
                imagenesUrbanas.forEach(function(imagen) {
                    imagen.style.display = "block";
                });
                imagenesDeportivas.forEach(function(imagen) {
                    const figcaption = imagen.nextElementSibling;
                    if (figcaption.tagName === "FIGCAPTION") {
                        figcaption.style.display = "none";
                    }
                });
            }else if(valorSeleccionado === "deportivo"){
                imagenesDeportivas.forEach(function(imagen) {
                    imagen.style.display = "block";
                });
            
                // Mostrar todas las imágenes urbanas
                imagenesUrbanas.forEach(function(imagen) {
                    imagen.style.display = "none";
                });
                imagenesUrbanas.forEach(function(imagen) {
                    const figcaption = imagen.nextElementSibling;
                    if (figcaption.tagName === "FIGCAPTION") {
                        figcaption.style.display = "none";
                    }
                });
            }else if(valorSeleccionado === "filtro" || valorSeleccionado === "restaurar"){
                imagenesDeportivas.forEach(function(imagen) {
                    imagen.style.display = "block";
                });
            
                // Mostrar todas las imágenes urbanas
                imagenesUrbanas.forEach(function(imagen) {
                    imagen.style.display = "block";
                });
                imagenesUrbanas.forEach(function(imagen) {
                    const figcaption = imagen.nextElementSibling;
                    if (figcaption.tagName === "FIGCAPTION") {
                        figcaption.style.display = "block";
                    }
                });
                imagenesDeportivas.forEach(function(imagen) {
                    const figcaption = imagen.nextElementSibling;
                    if (figcaption.tagName === "FIGCAPTION") {
                        figcaption.style.display = "block";
                    }
                });
            }
    });
});
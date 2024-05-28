document.addEventListener("DOMContentLoaded", function () {
    const urlImagen = localStorage.getItem("imagen"); // Recupera la URL de localStorage
    const idSelect = localStorage.getItem("id");
    const precio = localStorage.getItem("precio");
    const nombre = localStorage.getItem("nombre");
    let contador = 1; 
    document.getElementById("precioProducto1").textContent = precio;
    document.getElementById("nombreProducto1").textContent = nombre; 
    document.querySelector("#imagenProducto1").src = urlImagen;
    
    const agregarZapatilla = document.getElementById("agregarZapatilla");
    const restarZapatilla = document.getElementById("restarZapatilla"); 
        agregarZapatilla.addEventListener("click", function(){
            contador = contador + 1; 
            let precioSuma = precioFinal(contador); 
            precioSuma = precioSuma.toString();  
            document.getElementById("precioProducto1").textContent = precioSuma;
            document.getElementById("data-quantity").textContent = contador; 
        });
        restarZapatilla.addEventListener("click", function(){
            contador = contador - 1; 
            if(contador >= 1){
            let precioResta = precioFinal(contador);
            precioResta = precioResta.toString();  
            document.getElementById("precioProducto1").textContent = precioResta;
            document.getElementById("cantidadZapatillas").textContent = contador; 
            }
            if(contador < 1){
                
            }
        });
        function precioFinal(contadorSuma){
            let precioFinal = precio * contadorSuma; 
            return precioFinal; 
        }
        function eliminarZapatilla() {
            const imagen = document.getElementById("imagenProducto1");
            const nombreProducto = document.getElementById("nombreProducto1");
            const precioProducto = document.getElementById("precioProducto1");
            contador = 1; 
            imagen.remove();
            nombreProducto.remove();
            precioProducto.remove();
        }
}); 
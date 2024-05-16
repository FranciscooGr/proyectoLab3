const idSelect = localStorage.getItem('id'); 
    // Establece la URL de la imagen en el elemento <img> con el ID específico
    preDescripcion();
    function preDescripcion(){
        console.log(idSelect);
        if(idSelect === "deportivo3"){
            console.log("Adidas");
        }else{
            console.log("Ata");
            
        }
    }
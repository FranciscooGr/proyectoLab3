<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SneakyWalks</title>
    <link rel="stylesheet" href="coleccion.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/738b60d149.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap">
    <style>
        /* Estilos adicionales */
        .container-img {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
        .grid-column {
            margin: 10px; /* Espacio entre columnas */
            text-align: center; /* Para centrar el texto */
        }
    </style>
</head>
<body>
    <header class="header">
        <nav class="navbar navbar-expand-lg navbar-light bg-custom custom-padding fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <span style="color: white; font-family: 'Bebas Neue'; font-size: 30px;">SneakyWalks</span>
                    <img src="/assets-2/imgLogo.png" style="width: 50px; height: 50px; color: white;">
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="/indexp.php" style="font-family:'Bebas Neue'; font-size: 20px">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/coleccion.php" style="font-family:'Bebas Neue'; font-size: 20px">Colección</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/ofertas.php" style="font-family:'Bebas Neue'; font-size: 20px">Ofertas</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/actualizarinfo.html">
                            <img src="/assets-2/cuent.png" height="30.52" alt="cuentiniciada">
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="/carrito.php">
                              <button id="data-quantity" data-quantity="0" class="btn-cart">
                                <svg class="icon-cart" viewBox="0 0 24.38 30.52" height="30.52" width="24.38" xmlns="http://www.w3.org/2000/svg">
                                  <title>icon-cart</title>
                                  <path transform="translate(-3.62 -0.85)" d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"></path>
                                </svg>
                                <span class="quantity"></span>
                              </button>
                            </a>
                          </li>     
                    </ul>
                </div>
                      
            </div>
        </nav>
    </header>
<!---------------!-->   
<main class="main">
    <article class="cards">
      <div id="catalogo" class="container-img" style="display: flex; justify-content: center;">
        <div class="grid-container">
            <div class="cuadro">
                <a href="verano24/verano24.html">    
                    <div class="figura">
                        <figure class="card">
                            <figcaption class="text-overlay" >VERANO</figcaption>
                            <a href="verano24/verano24.html"><img src="assestsColeccion/portadaColeccionVerano.jpg" alt="Imagen de colección" class="card-image" id="urbano"></a>
                        </figure>
                    </div>
                </a>
          </div>
        
        
          <div class="cuadro">
            <a href="sale/sale.html">    
                <div class="figura">
                    <figure class="card">
                        <figcaption class="text-overlay" >SALE</figcaption>
                        <a href="sale/sale.html"><img src="assestsColeccion/portadaColeccionSALE.jpg" alt="Imagen de colección" class="card-image" id="urbano"></a>
                    </figure>
                </div>
            </a>
            </div>
    
          
            <div class="cuadro">
                <a href="edicioneslimitadas/edicioneslimitadas.html">    
                    <div class="figura">
                        <figure class="card">
                            <figcaption class="text-overlay" >EDICIONES LIMITADAS</figcaption>
                            <a href="edicioneslimitadas/edicioneslimitadas.html"><img src="assestsColeccion/portadaColeccionLIMITADAS.jpg" alt="Imagen de colección" class="card-image" id="urbano"></a>
                        </figure>
                    </div>
                </a>
          </div>
        
        </div>
      </div>
    </article>
  </main>
  
<!---------------!-->
<main class="maincoleccion">
 
    <div class="navbar">
        <article class="cards">
            <a class="navbar-brand" href="#">
                <span style="color: rgb(247, 244, 244); font-family: 'Bebas Neue'; font-size: 30px;">VERANO 24</span>
            </a>
        </article>
        <div class="ver-mas" style="margin-right: 20px;"> 
            <a href="verano24/verano24.html" style="color: white; text-decoration: none;">Ver más</a>
        </div>
    </div>
</main>
<div class="container-img"> 
    <div id="catalogo" class="container-img">
        <div class="grid-container">
            <div class="grid-column">
                <div class="figura">
                    <figure class="card">
                        <a href="verano24/verano24.html">
                            <img src="assestsColeccion/imgColeccion1.jpg" class="card" id="urbano">
                        </a>
                        <figcaption>Zapatillas generica n1 80000$</figcaption>
                    </figure>
                </div>
            </div>
            <div class="grid-column">
                <div class="figura">
                    <figure class="card">
                        <img src="assestsColeccion/imgColeccion2.jpg" class="card" id="urbano">
                        <figcaption>sandalia generica n1 80000$</figcaption>
                    </figure>
                </div>
            </div>
            <div class="grid-column">
                <div class="figura">
                    <figure class="card">
                        <img src="assestsColeccion/imgColeccion3.jpg" class="card" id="urbano">
                        <figcaption>Zapatillas generica n2 80000$</figcaption>
                    </figure>
                </div>
            </div>
        </div>
    </div>
</div>   

<!---------------!-->
<main class="maincoleccion">
 
    <div class="navbar">
        <article class="cards">
            <a class="navbar-brand" href="#">
                <span style="color: rgb(247, 244, 244); font-family: 'Bebas Neue'; font-size: 30px;">SALE</span>
            </a>
        </article>
        <div class="ver-mas" style="margin-right: 20px;"> 
            <a href="sale/sale.html" style="color: white; text-decoration: none;">Ver más</a>
        </div>
    </div>
</main>
<div class="container-img"> 
    <div id="catalogo" class="container-img">
        <div class="grid-container">
            <div class="grid-column">
                <div class="figura">
                    <figure class="card">
                        <img src="assestsColeccion/imgColeccion1.jpg" class="card" id="urbano">
                        <figcaption>Zapatillas generica n1 80000$</figcaption>
                    </figure>
                </div>
            </div>
            <div class="grid-column">
                <div class="figura">
                    <figure class="card">
                        <img src="assestsColeccion/imgColeccion2.jpg" class="card" id="urbano">
                        <figcaption>sandalia generica n1 80000$</figcaption>
                    </figure>
                </div>
            </div>
            <div class="grid-column">
                <div class="figura">
                    <figure class="card">
                        <img src="assestsColeccion/imgColeccion3.jpg" class="card" id="urbano">
                        <figcaption>Zapatillas generica n2 80000$</figcaption>
                    </figure>
                </div>
            </div>
        </div>
    </div>
</div>   

<!---------------!-->
<main class="maincoleccion">
 
    <div class="navbar">
        <article class="cards">
            <a class="navbar-brand" href="#">
                <span style="color: rgb(247, 244, 244); font-family: 'Bebas Neue'; font-size: 30px;">EDICIONES LIMITADAS</span>
            </a>
        </article>
        <div class="ver-mas" style="margin-right: 20px;"> 
            <a href="edicioneslimitadas/edicioneslimitadas.html" style="color: white; text-decoration: none;">Ver más</a>
        </div>
    </div>
</main>
<div class="container-img"> 
    <div id="catalogo" class="container-img">
        <div class="grid-container">
            <div class="grid-column">
                <div class="figura">
                    <figure class="card">
                        <img src="assestsColeccion/imgColeccion1.jpg" class="card" id="urbano">
                        <figcaption>Zapatillas generica n1 80000$</figcaption>
                    </figure>
                </div>
            </div>
            <div class="grid-column">
                <div class="figura">
                    <figure class="card">
                        <img src="assestsColeccion/imgColeccion2.jpg" class="card" id="urbano">
                        <figcaption>sandalia generica n1 80000$</figcaption>
                    </figure>
                </div>
            </div>
            <div class="grid-column">
                <div class="figura">
                    <figure class="card">
                        <img src="assestsColeccion/imgColeccion3.jpg" class="card" id="urbano">
                        <figcaption>Zapatillas generica n2 80000$</figcaption>
                    </figure>
                </div>
            </div>
        </div>
    </div>
</div>   

<!---------------!-->
</body>
</html>

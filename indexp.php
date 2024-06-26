<!DOCTYPE html>
<html lang="en">
  <head>
    <link rel="stylesheet" href="style.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SneakyWalks</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/738b60d149.js" crossorigin="anonymous"></script>
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/5.3.0/css/bootstrap.min.css" rel="stylesheet">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>

<script src="/js/agregarCarrito.js"></script>
<script src="/filtro.js"></script>
<script src="/barraBusqueda.js"></script>

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
                            <button data-quantity="0" class="btn-cart">
                                <svg class="icon-cart" viewBox="0 0 24.38 30.52" height="30.52" width="24.38" xmlns="http://www.w3.org/2000/svg">
                                    <title>icon-cart </title>
                                    <path transform="translate(-3.62 -0.85)" d="M28,27.3,26.24,7.51a.75.75,0,0,0-.76-.69h-3.7a6,6,0,0,0-12,0H6.13a.76.76,0,0,0-.76.69L3.62,27.3v.07a4.29,4.29,0,0,0,4.52,4H23.48a4.29,4.29,0,0,0,4.52-4ZM15.81,2.37a4.47,4.47,0,0,1,4.46,4.45H11.35a4.47,4.47,0,0,1,4.46-4.45Zm7.67,27.48H8.13a2.79,2.79,0,0,1-3-2.45L6.83,8.34h3V11a.76.76,0,0,0,1.52,0V8.34h8.92V11a.76.76,0,0,0,1.52,0V8.34h3L26.48,27.4a2.79,2.79,0,0,1-3,2.44Zm0,0"></path>
                                </svg>
                                <span class="quantity"></span>
                            </button>
                        </a>
                    </li>      
                </ul>
            </div>
        </div>
      </div>
    </nav>
  </header>
  <div id="carouselExampleIndicators" class="carousel slide custom-carousel-container" data-bs-ride="carousel" data-bs-interval="4000">
    <div class="carousel-inner">
        <div class="carousel-item active custom-item-bg">
            <img src="/assets-2/carrousel-1-p.jpeg" class="d-block mx-auto img-fluid rounded" style="max-width: 100%; height: auto;" alt="...">
        </div>
        <div class="carousel-item custom-item-bg">
            <img src="/assets-2/carrousel-2.jpeg" class="d-block mx-auto img-fluid rounded" style="max-width: 100%; height: auto;" alt="...">
        </div>
        <div class="carousel-item custom-item-bg">
            <img src="/assets-2/carrousel-3-p.jpeg" class="d-block mx-auto img-fluid rounded" style="max-width: 100%; height: auto;" alt="...">
        </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>

  
  
  <main class="main">
    <!-- Barra busqueda -->
    <div class="container">
        <section id="section1" class="section">
            <div class="buscador"> 
                <input type="search" id="busqueda" placeholder="Buscar" class="card-filter">
                <button class="btn-buscar" onclick="searchFilters('.card-filter', '.cardsBusqueda')">Buscar</button>
            </div>
        </section>

    <!-- filtro -->
    <div class="custom-select">
      <select id="filtroSelect" class="estilo" aria-label="Default select example">
          <option value="filtro" selected>Filtro</option>
          <option value="urbano">Urbano</option>
          <option value="deportivo">Deportivo</option>
          <option value="formal">Formal</option>
          <option value= "restaurar">Restaurar</option>
      </select>
  </div>
  <article class="cards">
    <div class="container-cards">
        <div class="row" style="max-height: 40%; justify-content: flex-start;">
            <div class="col">
                <div class="card" style="width: 18rem;" id="urbano">
                    <figure class="cardsBusqueda">
                        <img src="/assets-2/img-1-urbana.jpg" class="card-img-top" alt="Imagen 1" id="urbano1">
                        <div class="card-body text-center">
                            <h5 class="card-title">Nike Court Legion</h5>
                            <p class="card-text">129.999$</p>
                            <boton onclick="agregarAlCarrito('urbano1')" id="agregarCarrito" class="btn btn-primary" > <span>agregar al carrito</span>
                            </boton>
                            
                        </div>
                    </figure>
                </div>
                <div class="card" style="width: 18rem;" id="urbano">
                    <figure class="cardsBusqueda">
                        <img src="/assets-2/img-2-urbana.jpg" class="card-img-top" alt="Imagen 2" id="urbano2">
                        <div class="card-body text-center">
                            <h5 class="card-title">Nike Court Vision</h5>
                            <p class="card-text">70.000$</p>
                            <boton onclick="agregarAlCarrito('urbano2')" id="agregarCarrito" class="btn btn-primary"><span>agregar al carrito</span> </boton>
                        </div>
                    </figure>
                </div>
                <div class="card" style="width: 18rem;" id="urbano">
                    <figure class="cardsBusqueda">
                        <img src="/assets-2/img-3-urbana.jpg" class="card-img-top" alt="Imagen 3" id="urbano3">
                        <div class="card-body text-center">
                            <h5 class="card-title">Nike Court Vision Mid</h5>
                            <p class="card-text">200.000$</p>
                            <boton onclick="agregarAlCarrito('urbano3')" id="agregarCarrito" class="btn btn-primary"><span>agregar al carrito</span> </boton>
                        </div>
                    </figure>
                </div>
            </div>
            <!-- Aquí empieza la segunda columna -->
            <div class="col">
                <div class="card" style="width: 18rem;" id="urbano">
                    <figure class="cardsBusqueda">
                        <img src="/assets-2/img-4-urbana.jpg" class="card-img-top" alt="Imagen 4" id="urbano4">
                        <div class="card-body text-center">
                            <h5 class="card-title">Nike Air Force 1</h5>
                            <p class="card-text">97.999$</p>
                            <boton onclick="agregarAlCarrito('urbano4')" id="agregarCarrito" class="btn btn-primary"><span>agregar al carrito</span> </boton>
                        </div>
                    </figure>
                </div>
                <div class="card" style="width: 18rem;" id="urbano">
                    <figure class="cardsBusqueda">
                        <img src="/assets-2/img-5-urbana.jpg" class="card-img-top" alt="Imagen 5" id="urbano5">
                        <div class="card-body text-center">
                            <h5 class="card-title">Nike Air Force 1 07 SE Mujer</h5>
                            <p class="card-text">82.000$</p>
                            <boton onclick="agregarAlCarrito('urbano5')" id="agregarCarrito" class="btn btn-primary"><span>agregar al carrito</span> </boton>
                        </div>
                    </figure>
                </div>
                <div class="card" style="width: 18rem;" id="urbano">
                    <figure class="cardsBusqueda">
                        <img src="/assets-2/img-6-urbana.jpg" class="card-img-top" alt="Imagen 6" id="urbano6">
                        <div class="card-body text-center">
                            <h5 class="card-title">Nike Air Max 97 Se Ncps Mujer</h5>
                            <p class="card-text">68.999$</p>
                            <boton onclick="agregarAlCarrito('urbano6')" id="agregarCarrito" class="btn btn-primary"><span>agregar al carrito</span> </boton>
                        </div>
                    </figure>
                </div>
            </div>
            <!-- Aquí empieza la tercera columna -->
            <div class="col">
                <div class="card" style="width: 18rem;" id="deportivo">
                    <figure class="cardsBusqueda">
                        <img src="/assets-2/img-7-deportivo.jpg" class="card-img-top" alt="Imagen 7" id="deportivo1">
                        <div class="card-body text-center">
                            <h5 class="card-title">Adidas Duramo One</h5>
                            <p class="card-text">74.000$</p>
                            <boton onclick="agregarAlCarrito('deportivo1')" id="agregarCarrito" class="btn btn-primary"><span>agregar al carrito</span> </boton>
                        </div>
                    </figure>
                </div>
                <div class="card" style="width: 18rem;" id="deportivo">
                    <figure class="cardsBusqueda">
                        <img src="/assets-2/img-8-deportivo.jpg" class="card-img-top" alt="Imagen 8" id="deportivo2">
                        <div class="card-body text-center">
                            <h5 class="card-title">Adidas Zero</h5>
                            <p class="card-text">140.000$</p>
                            <boton onclick="agregarAlCarrito('deportivo2')" id="agregarCarrito" class="btn btn-primary"><span>agregar al carrito</span> </boton>
                        </div>
                    </figure>
                </div>
                <div class="card" style="width: 18rem;" id="deportivo">
                    <figure class="cardsBusqueda" id="deportivo">
                        <img src="/assets-2/img-9-deportivo.jpg" class="card-img-top" alt="Imagen 9" id="deportivo3">
                        <div class="card-body text-center">
                            <h5 class="card-title">Adidas Adizero Boston</h5>
                            <p class="card-text"> 81.000$</p>
                            <boton onclick="agregarAlCarrito('deportivo3')" id="agregarCarrito" class="btn btn-primary"><span>agregar al carrito</span> </boton>
                    </figure>
                </div>
            </div>
        </div>
    </div>
</article>
<div class="paginas">
  <div class="btn-group me-2" role="group" aria-label="First group" style="display: flex; justify-content: center;">
      <a href="index.html" class="btn btn-custom" style="color: white;">1</a>
      <a href="index2.html" class="btn btn-custom"  style="color: white;">2</a>
      <a href="index3.html" class="btn btn-custom"  style="color: white;">3</a>
  </div>
</div>
</main>
<!-- En el cuerpo del documento -->


<footer class="footer">
    <div class="grupo-1">
        <div class="box">
            <figure>
                <a href="#">
                    <img src="/assets-2/imgLogo.png" alt="">
                </a>
            </figure>
        </div>
        <div class="box">
            <h2>Novedades SneakyWalks</h2>
            <a class="linkPaginas" href="/ofertas.html">Las mejores promos</a>
            <a class="linkPaginas" href="/coleccion/coleccion.html">Nuestra Coleccion</a>
            <a class="linkPaginas" href="/carrito.html">Mira tu carrito</a>

        </div>
        <div class="box">
            <!--iconos de las redes sociales-->
            <h2>SIGUENOS</h2>
            <div class="carts">
                <a class="socialContainer containerOne" href="#">
                  <svg viewBox="0 0 16 16" class="socialSvg instagramSvg"> <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path> </svg>
                </a>
                
                <a class="socialContainer containerTwo" href="#">
                  <svg viewBox="0 0 16 16" class="socialSvg twitterSvg"> <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"></path> </svg>              </a>
                  
                <a class="socialContainer containerThree" href="#">
                  <i class="fa-solid fa-location-dot"></i>
                </a>
                
                <a class="socialContainer containerFour" href="#">
                  <svg viewBox="0 0 16 16" class="socialSvg whatsappSvg"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"></path> </svg>
                </a>
              </div>                    
              
              
        </div>
    </div>
    <div class="grupo-2">
        <small>&copy;2024 <b>Slee down</b> -Todos Los Derechos Reservados.</small>
    </div>
</footer>
</body>
</html>
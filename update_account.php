<?php
    // Configurar la conexión a la base de datos
    $servidor = "localhost";
    $usuario = "root";
    $clave = "";
    $baseDeDatos = "formularios";

    // Conectar a la base de datos
    $enlace = mysqli_connect($servidor, $usuario, $clave, $baseDeDatos);

    if (!$enlace) {
        die("Error en la conexión con el servidor: " . mysqli_connect_error());
    }

    // Iniciar sesión
    session_start();

    // Verificar si el usuario está logueado
    if (!isset($_SESSION["usuario"])) {
        echo "Debe iniciar sesión primero.";
        exit();
    }

    // Obtener el nombre de usuario de la sesión
    $username = $_SESSION["usuario"];

    // Procesar el formulario de actualización
    $mensaje = ""; // Variable para almacenar el mensaje de éxito o error

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $newUsername = $_POST["username"];
        $newEmail = $_POST["email"];

        // Escapar los valores para prevenir inyecciones SQL
        $newUsername = mysqli_real_escape_string($enlace, $newUsername);
        $newEmail = mysqli_real_escape_string($enlace, $newEmail);

        // Consulta preparada SQL para actualizar el nombre de usuario y el correo electrónico
        $consulta = "UPDATE datos SET Nombre_usuario=?, Correo=? WHERE Nombre_usuario=?";
        
        // Preparar la consulta
        $stmt = mysqli_prepare($enlace, $consulta);

        // Vincular parámetros
        mysqli_stmt_bind_param($stmt, "sss", $newUsername, $newEmail, $username);

        // Ejecutar la consulta
        if (mysqli_stmt_execute($stmt)) {
            // Actualizar el nombre de usuario en la sesión
            $_SESSION["usuario"] = $newUsername;
            // Mensaje de éxito
            $mensaje = '<div class="alert alert-success" role="alert">Cuenta actualizada exitosamente.</div>';
        } else {
            // Mensaje de error
            $mensaje = '<div class="alert alert-danger" role="alert">Error al actualizar la cuenta: ' . mysqli_error($enlace) . '</div>';
        }

        // Cerrar la declaración
        mysqli_stmt_close($stmt);
    }

    // Cerrar la conexión
    mysqli_close($enlace);
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="styleCuenta.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <title>Cuenta</title>
    <style>
        body {
            margin-top: 20px; 
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            background: #858585;
        }
    </style>
</head>
<body>
    <header class="header">
        <nav class="navbar navbar-expand-lg navbar-light bg-custom custom-padding fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                    <span style="color: white; font-family: 'Bebas Neue'; font-size: 30px;">SneakyWalks</span>
                    <img src="assets-2/imgLogo.png" style="width: 50px; height: 45px; color: white;">
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
                            <a class="nav-link" href="/actualizarinfo.html" style="font-family:'Bebas Neue'; font-size: 20px">Cuenta</a>
                        </li>
                        <li class="nav-item">
                            <a href="/carrito.html">
                                <button data-quantity="0" class="btn-cart">
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
    <div class="formulario" style="font-family:'Bebas Neue'; font-size: 15px; width: 50%; margin-top: 100px;">
        <h1 class="imagen">
            <img src="assets-2/ICONOS-27.png" alt="Icono" style="width: 75px;">
        </h1>    
        <!-- Aquí se muestra el mensaje de éxito o error -->
        <?php echo $mensaje; ?>
        
        <form method="post" action="update_account.php" enctype="multipart/form-data">
            <div class="mb-3">
                <label for="username" class="form-label">Nombre de Usuario</label>
                <input type="text" class="form-control" id="username" name="username" placeholder="Nombre de usuario" required>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Correo Electrónico</label>
                <input type="email" class="form-control" id="email" name="email" placeholder="Correo Electrónico" required>
            </div>
            <button type="submit" class="btn btn-primary">Actualizar Cuenta</button>
        </form>

        <form method="post" action="/cuenta.html">
        <button type="submit" class="btn btn-primary">Cerrar Sesión</button>
        </form>
    </div>
</body>
</html>

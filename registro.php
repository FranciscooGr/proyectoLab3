<?php
    // Conectar a la base de datos
    $servidor = "localhost";
    $usuario = "root";
    $clave = "";
    $baseDeDatos = "formularios";

    $enlace = mysqli_connect($servidor, $usuario, $clave, $baseDeDatos);

    if (!$enlace) {
        die("Error en la conexión con el servidor: " . mysqli_connect_error());
    }

    // Procesar el formulario
    if (isset($_POST['registrarse'])) {
        $username = $_POST["username"];
        $email = $_POST["email"];
        $password = $_POST["password"];
        $confirmPassword = $_POST["confirm-password"];
        $id = rand(1, 2000);

        if ($password === $confirmPassword) {
            $insertarDatos = "INSERT INTO datos (Nombre_usuario, Correo, Contraseña, ID) VALUES ('$username', '$email', '$password', '$id')";
            $ejecutarInsertar = mysqli_query($enlace, $insertarDatos);

            if ($ejecutarInsertar) {
                echo "Registro exitoso";
            } else {
                echo "Error: " . mysqli_error($enlace);
            }
        } else {
            echo "Las contraseñas no coinciden.";
        }
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <title>Registro</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="styleCuenta.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/738b60d149.js" crossorigin="anonymous"></script>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {
            margin-top: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            background: #858585;
            font-family: Arial, sans-serif;
        }
        form {
            max-width: 400px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
            background-color: #ffffff00;
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
                            <a class="nav-link" aria-current="page" href="index.html" style="font-family:'Bebas Neue'; font-size: 20px">Inicio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/coleccion/coleccion.html" style="font-family:'Bebas Neue'; font-size: 20px">Colección</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/ofertas.html" style="font-family:'Bebas Neue'; font-size: 20px">Ofertas</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/cuenta.html" style="font-family:'Bebas Neue'; font-size: 20px">Cuenta</a>
                        </li>
                        <li class="nav-item">
                        <a href="/carrito.html">
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
        </nav>
    </header>
    <h1><img src="assets-2/imgLogo.png" style="height: 120px;"></h1>
    <form id="register-form" style="font-family:'Bebas Neue'; font-size: 15px" method="POST" action="registro.php">
        <h2 style="font-family:'Bebas Neue'; font-size: 50px">Registro</h2>
        <input type="text" name="username" id="username" placeholder="Nombre de usuario" required>
        <input type="email" name="email" id="email" placeholder="Correo electrónico" required>
        <input type="password" name="password" id="password" placeholder="Contraseña" required>
        <input type="password" id="confirm-password" name="confirm-password" placeholder="Confirmar contraseña" required>
        <input type="submit" name="registrarse" value="Registrarse">
    </form>

    <script>
        document.getElementById('register-form').addEventListener('submit', function(event) {
            var password = document.getElementById('password').value;
            var confirmPassword = document.getElementById('confirm-password').value;

            if (password !== confirmPassword) {
                alert('Las contraseñas no coinciden. Por favor, vuelva a ingresarlas.');
                event.preventDefault(); // Evita que se envíe el formulario
            }
        });
    </script>
</body>
</html>
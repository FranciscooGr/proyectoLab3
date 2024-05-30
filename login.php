<?php
    // Configurar la conexión a la base de datos remota
    $servidor = "localhost";
    $usuario = "root";
    $clave = "";
    $baseDeDatos = "formularios";
    
    // Conectar a la base de datos
    $enlace = mysqli_connect($servidor, $usuario, $clave, $baseDeDatos);

    if (!$enlace) {
        die("Error en la conexión con el servidor: " . mysqli_connect_error());
    }

    // Procesar el formulario de inicio de sesión
    if (isset($_POST["inicio"])) {
        $username = $_POST["username"];
        $password = $_POST["password"];

        // Escapar los valores para prevenir inyecciones SQL
        $username = mysqli_real_escape_string($enlace, $username);
        $password = mysqli_real_escape_string($enlace, $password);

        // Consultar la base de datos para verificar el usuario
        $consulta = "SELECT * FROM datos WHERE Nombre_usuario='$username' AND Contraseña='$password'";
        $resultado = mysqli_query($enlace, $consulta);

        if (mysqli_num_rows($resultado) == 1) {
            // El usuario está registrado y las credenciales son correctas
            session_start();
            $_SESSION["usuario"] = $username;
            header("Location: indexp.php"); // Redirigir al dashboard o página principal del usuario
            exit();
        } else {
            // Las credenciales son incorrectas
            echo "Nombre de usuario o contraseña incorrectos.";
        }
    }
?>

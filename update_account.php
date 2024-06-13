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
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $newUsername = $_POST["username"];
        $newEmail = $_POST["email"];

        // Escapar los valores para prevenir inyecciones SQL
        $newUsername = mysqli_real_escape_string($enlace, $newUsername);
        $newEmail = mysqli_real_escape_string($enlace, $newEmail);

        // Consulta SQL para actualizar el nombre de usuario y el correo electrónico
        $consulta = "UPDATE datos SET Nombre_usuario='$newUsername', Correo='$newEmail' WHERE Nombre_usuario='$username'";

        if (mysqli_query($enlace, $consulta)) {
            echo "Cuenta actualizada exitosamente.";
            // Actualizar el nombre de usuario en la sesión
            $_SESSION["usuario"] = $newUsername;
        } else {
            echo "Error al actualizar la cuenta: " . mysqli_error($enlace);
        }
    }

    // Cerrar la conexión
    mysqli_close($enlace);
?>

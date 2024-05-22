<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);
    $address = $_POST['address'];
    
    // Manejar la subida de la foto de perfil
    if (!empty($_FILES['profilePicture']['name'])) {
        $profilePicture = $_FILES['profilePicture']['name'];
        $target_dir = "uploads/";
        $target_file = $target_dir . basename($profilePicture);
        move_uploaded_file($_FILES['profilePicture']['tmp_name'], $target_file);
    }

    // Conectar a la base de datos y actualizar la información
    // Asume que hay una conexión a la base de datos llamada $conn
    $sql = "UPDATE users SET username='$username', password='$password', payment_method='$paymentMethod', address='$address', other_option='$otherOption' WHERE user_id='1'"; // Ajusta la condición WHERE según tus necesidades

    if (mysqli_query($conn, $sql)) {
        echo "Cuenta actualizada exitosamente.";
    } else {
        echo "Error al actualizar la cuenta: " . mysqli_error($conn);
    }

    mysqli_close($conn);
}
?>
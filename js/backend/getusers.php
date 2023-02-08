<?php

$connect = include_once("./config.php");

if (empty($_POST["username"]) && empty($_POST["password"])) {
    $resultat[] = 'err';
} else {
    $username = mysqli_real_escape_string($connect, $_POST["username"]);
    $password = mysqli_real_escape_string($connect, $_POST["password"]);
    $passwor = md5($password);
    $query = "SELECT * FROM users WHERE usuari = '$username' AND pass = '$passwor'";
    $result = mysqli_query($connect, $query);
    if (mysqli_num_rows($result) > 0) {
        $resultat[] = 'done';
    } else {
        $resultat[] = 'err2';
    }
}
echo json_encode($resultat);

<?php
$host = "bbdd.restaurantemilagros.es";
$user = "ddb198721";
$password = ":MI17pkkzDgp";
$dbname = "ddb198721";

$conn = mysqli_connect($host, $user, $password, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

return $conn;

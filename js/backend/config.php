<?php
$host = "localhost";
$user = "";
$password = "";
$dbname = "rest";

$conn = mysqli_connect($host, $user, $password, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

return $conn;

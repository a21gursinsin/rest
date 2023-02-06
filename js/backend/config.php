<?php
$host = "labs.inspedralbes.cat";
$user = "a21gursinsin_singh";
$password = "Singh_09";
$dbname = "a21gursinsin_rest";

$conn = mysqli_connect($host, $user, $password, $dbname);
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

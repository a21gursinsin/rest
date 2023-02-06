<?php
include_once("./config.php");

$type = $_GET["type"];

$result = $conn->query("SELECT * FROM menulist WHERE Categoria = '{$type}'");
$resultat = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $resultat[] = $row;
    }
    echo json_encode($resultat);
}

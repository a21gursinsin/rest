<?php
include_once("./config.php");

$result = $conn->query("SELECT * FROM categorias");
$resultat = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $resultat[] = $row;
    }
    echo json_encode($resultat);
}

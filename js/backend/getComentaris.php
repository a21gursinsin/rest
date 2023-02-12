<?php
include_once("./config.php");

$result = $conn->query("SELECT * FROM comentari");

$resultat = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $resultat[] = $row;
    }
    echo json_encode($resultat);
}

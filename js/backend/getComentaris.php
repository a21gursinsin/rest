<?php
if (file_exists('./output.json')) {
    $data = file_get_contents("./output.json");
    $resultat[] = $data;
} else {
    $resultat[] = 'err';
}


echo json_encode($resultat);

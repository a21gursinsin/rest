<?php
if (file_exists('./output.json')) {
    $data = file_get_contents("./output.json");
} else {
    $resultat[] = 'err';
}


echo json_encode($data);

<?php

$connect = include_once("./config.php");

$nombre = mysqli_real_escape_string($connect, $_POST["nombre"]);
$mail = mysqli_real_escape_string($connect, $_POST["mail"]);
$dia = mysqli_real_escape_string($connect, $_POST["dia"]);
$hora = mysqli_real_escape_string($connect, $_POST["hora"]);
$personas = mysqli_real_escape_string($connect, $_POST["personas"]);
$comentari = mysqli_real_escape_string($connect, $_POST["comentari"]);


if (empty($nombre) || empty($mail) || empty($dia) || empty($hora) || empty($personas)) {
    $resultat[] = 'err';
} else {

    $sql = "INSERT INTO `Reserva`(`nombre`, `mail`, `dia`, `hora`, `personas`, `comentari`, `createTime`) 
    VALUES ('$nombre','$mail','$dia','$hora',$personas,'$comentari',CURRENT_TIMESTAMP)";

    if (mysqli_query($connect, $sql)) {
        $resultat[] = 'done';
    } else {
        $resultat[] = 'err2';
    }
}
echo json_encode($resultat);

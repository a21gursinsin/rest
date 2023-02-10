<?php

$connect = include_once("./config.php");



$nombre = mysqli_real_escape_string($connect, $_POST["nombre"]);
$mail = mysqli_real_escape_string($connect, $_POST["mail"]);
$dia = mysqli_real_escape_string($connect, $_POST["dia"]);
$hora = mysqli_real_escape_string($connect, $_POST["hora"]);
$personas = mysqli_real_escape_string($connect, $_POST["personas"]);
$comentari = mysqli_real_escape_string($connect, $_POST["comentari"]);

if (empty($nombre) || empty($mail) || empty($dia) || empty($hora) || empty($personas)) {
    $resultat[] = "err";
} else {

    $sql = "INSERT INTO `Reserva`(`nombre`, `mail`, `dia`, `hora`, `personas`, `comentari`, `createTime`) 
    VALUES ('$nombre','$mail','$dia','$hora',$personas,'$comentari',CURRENT_TIMESTAMP)";

    if (mysqli_query($connect, $sql)) {
        $sql = "Select * from Reserva where mail like '{$mail}'  order by createTime DESC, id DESC Limit 1;";

        $result = mysqli_query($connect, $sql) or die("Error in Selecting " . mysqli_error($connect));

        enviarcorreo($nombre, $mail, $dia, $hora, $personas, $comentari);


        while ($row = mysqli_fetch_assoc($result)) {
            $resultat[] = $row;
        }
    } else {
        $resultat[] = 'err2';
    }
}
echo json_encode($resultat);

//close the db connection
mysqli_close($connect);

function enviarcorreo($nombre, $mail, $dia, $hora, $personas, $comentari)
{
    print('hola');
}

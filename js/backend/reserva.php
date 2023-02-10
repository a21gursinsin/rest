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

        $header = 'From: ' . $mail . " \r\n";
        $header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
        $header .= "Mime-Version: 1.0 \r\n";
        $header .= "Content-Type: text/plain";

        $message = "Aquest missatge va ser enviat per: " . $nombre . " \r\n";
        $message .= "El seu correo es: " . $mail . " \r\n";
        $message .= "Mensaje: Reserva para al Dia " . $dia . " y a las" . $hora . " \r\n";
        $message .= "Enviado el: " . date('d/m/Y', time());

        $para = 'gur.coder@gmail.com';
        $asunto = 'RESERVA del ' . $nombre;

        mail($para, $asunto, utf8_decode($message), $header);


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

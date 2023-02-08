<?php

$correo = $_POST["email"];
$encabezado = $_POST["asunto"];
$comentario = $_POST["cuerpo"];

//variable que hace referencia a nuestra ariatext donde van puestas nuestras direcciones de correo
//que luego quedara sustituida por $email al darle las diferentes funciones anteriormente comentadas
$emails = $_POST["direcciones"];

//trim quita espacios de principio y final de todo el texto
$text = trim($emails);

//explode convierte lineas en un array
$arrayEmails = explode("/n", $text);

//quita espacios de principio y final de cada linea
$arrayEmails = array_filter($arrayEmails, 'trim');

//recorre todas las lineas
//pàra cada uno de los emails le das el nombre de linea.$email es la variable final que tendremos que poner junto a las variables del envio. 
foreach ($arrayEmails as $email) {

    email_classic($correo, "oscar", $email, "oscar", $encabezado, $comentario);
}


// classic way
function email_classic($from, $from_name, $to, $to_name, $subject, $message)
{

    $from = $from_name . "<" . $from . ">\n";

    $headers = "From: {$from}" . "\n";
    $headers .= "Reply-To: {$from}" . "\n";
    $headers .= "Cc: {$to}\n";
    $headers .= "Bcc: {$to}\n";
    $headers .= "X-Mailer: PHP/" . phpversion() . "\n";
    $headers .= "MIME-Version: 1.0" . "\n";
    $headers .= "Content-Type: text/plain; charset=iso-8859-1";

    $result = mail($to, $subject, $message, $headers);

    echo $result ? 'Message sent!' : 'Mailer Error';
}

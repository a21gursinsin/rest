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

        // multiple recipients
        $to  = 'gur.coder@gmail.com' . ', '; // note the comma
        // $to .= '';

        // subject
        $subject = 'Birthday Reminders for August';

        // message
        $message = '
        <html>
        <head>
        <title>Birthday Reminders for August</title>
        </head>
        <body>
        <p>Here are the birthdays upcoming in August!</p>
        <table>
            <tr>
            <th>Person</th><th>Day</th><th>Month</th><th>Year</th>
            </tr>
            <tr>
            <td>Joe</td><td>3rd</td><td>August</td><td>1970</td>
            </tr>
            <tr>
            <td>Sally</td><td>17th</td><td>August</td><td>1973</td>
            </tr>
        </table>
        </body>
        </html>
        ';

        // To send HTML mail, the Content-type header must be set
        $headers  = 'MIME-Version: 1.0' . "\r\n";
        $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

        // Additional headers
        $headers .= 'To: Mary <mary@example.com>, Kelly <kelly@example.com>' . "\r\n";
        $headers .= 'From: Birthday Reminder <birthday@example.com>' . "\r\n";
        // $headers .= 'Cc: birthdayarchive@example.com' . "\r\n";
        // $headers .= 'Bcc: birthdaycheck@example.com' . "\r\n";

        // Mail it
        mail($to, $subject, $message, $headers);

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

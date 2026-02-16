<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $to = "info@feuerwerke-lisius.de";

    $name = $_POST['name'];
    $adresse = $_POST['adresse'];
    $phone = $_POST['phone'];
    $email = $_POST['_replyto'];
    $abbrennort = $_POST['abbrennort'];
    $budget = $_POST['budget'];
    $wuensche = $_POST['wuensche'];

    $subject = "Neue Anfrage von Website";

    $message = "
    Neue Anfrage:

    Name: $name

    Adresse: $adresse

    Telefon: $phone

    Email: $email

    Abbrennort: $abbrennort

    Budget: $budget

    Wünsche: $wuensche
    ";

    $headers = "From: $email";

    mail($to, $subject, $message, $headers);

    echo "Danke! Ihre Anfrage wurde gesendet.";

}

?>

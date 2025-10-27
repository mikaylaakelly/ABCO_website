<?php
if (isset($_POST['n']) && isset($_POST['e']) && isset($_POST['m'])) {

    $n = htmlspecialchars($_POST['n']);
    $e = htmlspecialchars($_POST['e']);
    $m = nl2br(htmlspecialchars($_POST['m']));

    // Change this to your real business email once tested
    // For now, using sender email is fine for local testing
    $to = $e;  // <-- Replace with "you@yourdomain.com" when ready
    $from = $e;
    $subject = 'Contact Form Message from ABCO Website';

    $message = "
    <b>Name:</b> $n <br>
    <b>Email:</b> $e <br><br>
    <p>$m</p>
    ";

    $headers = "From: $from\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";

    if (mail($to, $subject, $message, $headers)) {
        echo "Success";
    } else {
        echo "The server failed to send the message. Please try again later.";
    }

} else {
    echo "Form submission error: missing fields.";
}
?>

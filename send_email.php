<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $name = strip_tags(trim($_POST["n"]));
    $email = filter_var(trim($_POST["e"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["m"]);

    // Your email
    $to = "amanda@abcomachining.com";

    $subject = "Website Contact Form: $name";

    $body = "Name: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message";

    $headers = "From: noreply@abcomachining.com\r\n";
    $headers .= "Reply-To: $email\r\n";

    $success = mail($to, $subject, $body, $headers);

    if ($success) {
        echo "Success";
    } else {
        echo "Error sending email";
    }

} else {
    echo "Invalid request";
}
?>
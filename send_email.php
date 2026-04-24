<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["n"]));
    $email = filter_var(trim($_POST["e"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["m"]);

    // Replace with your GoDaddy email
    $to = "amanda@abcomachining.com";
    $subject = "Contact Form Submission from $name";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "<p style='color:green;'>Thank you! Your message has been sent.</p>";
    } else {
        echo "<p style='color:red;'>Oops! Something went wrong. Please try again.</p>";
    }
}
?>
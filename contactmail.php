<?php

$name = $_POST['name'];
$number = $_POST['number'];
$email = $_POST['email'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$mailheader = "From: " . $email . "\r\n";
$mailheader .= "Reply-To: " . $email . "\r\n";
$mailheader .= "X-Mailer: PHP/" . phpversion();

$fullMessage = "Name: " . $name . "\r\n";
$fullMessage .= "Number: " . $number . "\r\n";
$fullMessage .= "Email: " . $email . "\r\n";
$fullMessage .= "Subject: " . $subject . "\r\n";
$fullMessage .= "Message: " . $message . "\r\n";

$recipient = "taponbiswassdp@gmail.com";

if($email != NULL) {
    mail($recipient, $subject, $fullMessage, $mailheader);
}

// Redirect to mailsendsuccess.html after sending the mail
header("Location: mailsendsuccess.html");
exit();
?>

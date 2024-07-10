<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve email from form submission
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

    // Validate email
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Database connection
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "alanoor";

        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);

        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        // Prepare and bind
        $stmt = $conn->prepare("INSERT INTO subscriptions (email) VALUES (?)");
        $stmt->bind_param("s", $email);

        // Execute the statement
        if ($stmt->execute()) {
            echo "Subscription successful!";
        } else {
            echo "Error: " . $stmt->error;
        }

        // Close connection
        $stmt->close();
        $conn->close();
    } else {
        echo "Invalid email format";
    }
} else {
    echo "Invalid request method";
}
?>

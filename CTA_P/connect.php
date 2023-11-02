
<?php
 error_reporting(E_ALL);
 ini_set('display_errors', 1);
// Database connection parameters
// $servername = "localhost";
// $username = "your_username";
// $password = "your_password";
// $dbname = "your_database_name";

// Create a connection
$conn = new mysqli('localhost', 'root','','cta');

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the form data
$roundsStatus = $_POST['rounds-status'];
$experienceRoundStatus = $_POST['experience-round-status'];
$offerStatus = $_POST['offer-status'];
$experienceLevel = $_POST['experience-level'];
$experience = $_POST['experience'];


// Prepare and execute the SQL query
$sql = "INSERT INTO experience (rounds_status, experience_round_status, offer_status, experience_level, experience) 
        VALUES ('$roundsStatus', '$experienceRoundStatus', '$offerStatus', '$experienceLevel', '$experience')";

if ($conn->query($sql) === TRUE) {
    echo "Form response stored successfully.";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}
header("Location: company1.html");

// Close the connection
$conn->close();
?>
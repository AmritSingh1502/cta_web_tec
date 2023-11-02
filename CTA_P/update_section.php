<?php
// Establish database connection
$conn = new mysqli('localhost', 'root', '', 'cta');
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the section ID and updated values from the AJAX request
$id = $_POST['id'];
$roundsStatus = $_POST['rounds_status'];
$experienceRoundStatus = $_POST['experience_round_status'];
$offerStatus = $_POST['offer_status'];
$experienceLevel = $_POST['experience_level'];
$experience = $_POST['experience'];

// Update the data in the database
$sql = "UPDATE experience SET rounds_status='$roundsStatus', experience_round_status='$experienceRoundStatus', offer_status='$offerStatus', experience_level='$experienceLevel', experience='$experience' WHERE id=$id";
if ($conn->query($sql) === TRUE) {
    echo "success";
} else {
    echo "Error updating data: " . $conn->error;
}

// Close the database connection
$conn->close();
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Experiences</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f2f2f2;
            margin: 0;
            padding: 20px;
        }

        h1 {
            color: #333;
            text-align: center;
        }

        button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
        }

        button:hover {
            background-color: #45a049;
        }

        .section-container {
            background-color: #e9e9e9;
            padding: 10px;
            margin-bottom: 20px;
        }

        .section {
            text-align: center;
        }

        .section p {
            margin: 10px 0;
            font-size: 16px;
            color: #555;
        }
    </style>
</head>
<body>
    <h1>Experiences</h1>

    <button onclick="goBack()">Go Back</button>

    <script>
        function goBack() {
            window.history.back();
        }
    </script>

    <?php
    // Establish database connection
    $conn = new mysqli('localhost', 'root', '', 'cta');
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Retrieve data from the database
    $sql = "SELECT * FROM experience";
    $result = $conn->query($sql);

    // Print the data
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            echo '<div class="section-container">';
            echo '<div class="section">';
            echo '<p>rounds_status: ' . $row['rounds_status'] . '</p>';
            echo '<p>experience_round_status: ' . $row['experience_round_status'] . '</p>';
            echo '<p>offer_status: ' . $row['offer_status'] . '</p>';
            echo '<p>experience_level: ' . $row['experience_level'] . '</p>';
            echo '<p>experience: ' . $row['experience'] . '</p>';
            echo '</div>';
           echo '<button onclick="editSection(' . $row['id'] . ')">Edit</button>';
            echo '</div>';
            echo '</div>';
            echo '<hr>';
        }
    } else {
        echo 'No data found.';
    }

    // Close the database connection
    $conn->close();
    ?>

<script>
    // Add event listener to sections container
   
</script>

</body>
</html>
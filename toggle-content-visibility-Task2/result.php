<?php
    if($_SERVER["REQUEST_METHOD"]=="POST")
    {
        $result = $_POST['action'];

        header('Content-Type: application/json');
        if ($result == 'hide'){
            echo json_encode ("Content is hidden");
        }
        else if ($result == 'show'){
            echo json_encode ("Content is visible");
        }
    }
?>

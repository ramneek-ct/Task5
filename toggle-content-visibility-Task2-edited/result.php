<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $hide = isset($_POST['hide_page']) ? $_POST['hide_page'] : false;
    $show = isset($_POST['show_page']) ? $_POST['show_page'] : false;

    $output = [
        'hide_pg' => $hide,
        'show_pg' => $show
    ];

    header('Content-Type: application/json');
    echo json_encode($output);
}
?>

<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once "../model/databaseManagement/Database.php";

require_once "../CustomException.php";

$database = new Database();
$database->cors();


if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $database->getRequest();
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {

    // Pull the posted json
    $content = file_get_contents('php://input', true);
    //If data is okay
    if ($content !== false) {
        //  Decode the content data
        $json = json_decode(trim($content), true);

        $database1 = new Database();

        $database1->insertEmailToTable($json);
    } else {
        echo("'$'content is false!");
    }

}





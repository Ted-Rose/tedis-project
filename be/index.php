<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
require_once "models/Database.php";

require_once "models/Book.php";

require_once "models/Dvd.php";

require_once "models/Furniture.php";

require_once "models/DatabaseManager.php";

require_once "models/CustomException.php";

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
        if (is_array($json)) {
            try {
                //Check if product type class exists
                if(class_exists($json["type"]) === FALSE) {
                    //Throw exception if product type class doesn't exist
                    throw new CustomException($json["type"]);
                } else {
                    //If product type class exists
                    //create $newProduct object in specific product type class
                    $newProduct = new $json["type"]($json);

                    $databaseManager = new DatabaseManager();

                    $databaseManager->addProduct($json, $newProduct);
                }
            } catch (CustomException $e) {
                //display custom message
                echo $e->classDoesNotExist();
              }
        } else {
            print_r("'$'json is not array");
        }
    } else {
        print_r("'$'content is false!");
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    // Pull the posted json
    $content = file_get_contents('php://input', true);
    //If data is okay
    if ($content !== false) {
        //  Decode the content data
        $json = json_decode(trim($content), true);
        if (is_array($json)) {
            try {
                //Check if product type class exists
                if(class_exists($json["type"]) === FALSE) {
                    //Throw exception if product type class doesn't exist
                    throw new CustomException($json["type"]);
                } else {
                    //If product type class exists
                    //create $newProduct object in specific product type class
                    $deleteProduct = new $json["type"]($json);

                    $databaseManager = new DatabaseManager();

                    $databaseManager->deleteProduct($json, $deleteProduct);
                }
            } catch (CustomException $e) {
                //display custom message
                echo $e->classDoesNotExist();
            }
        } else {
            print_r("'$'json is not array");
        }
    } else {
        print_r("'$'content is false!");
    }
}





<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
require_once "../model/databaseManagement/Database.php";

require_once "../model/Book.php";

require_once "../model/Dvd.php";

require_once "../model/Furniture.php";

require_once "../model/Product.php";

require_once ".././CustomException.php";

$database = new Database();
$database->cors();


if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $database->getRequest();
} elseif ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $content = file_get_contents('php://input', true);
    if ($content !== false) {
        $json = json_decode($content, true);
        if (is_array($json)) {
            try {
                if (class_exists($json["productType"]) === FALSE) {
                    throw new CustomException($json["productType"]);
                } else {
                    //create $newProduct object in specific product type class
                    $newProduct = new $json["productType"]($json);
                    $newProduct->addProduct($json, $newProduct);
                }
            } catch (CustomException $e) {
                echo $e->classDoesNotExist();
            }
        } else {
            echo("'$'json is not array");
        }
    } else {
        echo("'$'content is false!");
    }
} elseif ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $content = file_get_contents('php://input', true);
    if ($content !== false) {
        $json = json_decode(trim($content), true);
        if (is_array($json)) {
            try {
                if (class_exists($json["productType"]) === FALSE) {
                    throw new CustomException($json["productType"]);
                } else {
                    //create $newProduct object in specific product type class
                    $deleteProduct = new $json["productType"]($json);
                    $deleteProduct->deleteProduct($json);
                }
            } catch (CustomException $e) {
                echo $e->classDoesNotExist();
            }
        } else {
            echo("'$'json is not array");
        }
    } else {
        echo("'$'content is false!");
    }
}

<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
require_once "GetConnection.php";

class Database
{
    public function getRequest()
    {
        $getConnection = new GetConnection;
        $conn = $getConnection->connect();

        //Get data from book table
        $bookTable = $conn->prepare("SELECT * FROM book");
        $bookTable->execute();
        $resultBookTable = $bookTable->fetchAll(PDO::FETCH_ASSOC);

        //Get data from dvd table
        $dvdTable = $conn->prepare("SELECT * FROM dvd");
        $dvdTable->execute();
        $resultDvdTable = $dvdTable->fetchAll(PDO::FETCH_ASSOC);

        //Get data from furniture table
        $furnitureTable = $conn->prepare("SELECT * FROM furniture");
        $furnitureTable->execute();
        $resultFurnitureTable = $furnitureTable->fetchAll(PDO::FETCH_ASSOC);

        //Merge data from all tables
        $result = array_merge($resultBookTable, $resultDvdTable, $resultFurnitureTable);

        //Sort data by sku
        usort(
            $result,
            function ($item1, $item2) {
                return $item1['sku'] <=> $item2['sku'];
            }
        );

        echo json_encode($result);

        //Close connection
        $this->conn = null;
    }

    public function addProduct($preparedQuery)
    {
        $getConnection = new GetConnection;
        $conn = $getConnection->connect();

        $table = $preparedQuery[0];
        $sku = $preparedQuery[1];
        $name = $preparedQuery[2];
        $price = $preparedQuery[3];
        $specificAttributeName = $preparedQuery[4];
        $specificAttribute = $preparedQuery[5];


        $statement = $conn->prepare("INSERT INTO $table (sku, name, price, $specificAttributeName) 
            VALUES (:sku, :name, :price, :specificAttribute)");

        $statement->bindValue('sku', $sku, PDO::PARAM_INT);
        $statement->bindValue('name', $name, PDO::PARAM_STR);
        $statement->bindValue('price', $price, PDO::PARAM_INT);
        $statement->bindValue('specificAttribute', $specificAttribute, PDO::PARAM_STR);

        $statement->execute();

        echo $name . " added to database";

        var_dump($statement);

        //Close connection
        $this->conn = null;
    }

    public function insertEmailToTable($email)
    {
        $getConnection = new GetConnection;
        $conn = $getConnection->connect();

        $statement = $conn->prepare("INSERT INTO clients (email) 
            VALUES (:email)");

        $statement->bindValue('email', $email, PDO::PARAM_STR);

        $statement->execute();

        echo $email . " added to database";

        //Close connection
        $this->conn = null;
    }

    public function deleteProduct($query, $sku)
    {
        $getConnection = new GetConnection;
        $conn = $getConnection->connect();

        $stmt = $conn->prepare($query);

        //Execute mysql statement 
        $stmt->execute([$sku]);

        //Close connection
        $this->conn = null;
    }

    public function cors()
    {
        // Allow from any origin
        if (isset($_SERVER['HTTP_ORIGIN'])) {
            // Decide if the origin in $_SERVER['HTTP_ORIGIN'] is one
            // you want to allow, and if so:
            header("Access-Control-Allow-Origin: {$_SERVER['HTTP_ORIGIN']}");
            header('Access-Control-Allow-Credentials: true');
            header('Access-Control-Max-Age: 86400');    // cache for 1 day
        }

        // Access-Control headers are received during OPTIONS requests
        if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {

            if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_METHOD']))
                // may also be using PUT, PATCH, HEAD etc
                header("Access-Control-Allow-Methods: GET, POST, OPTIONS, DELETE");

            if (isset($_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']))
                header("Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");

            exit(0);
        }
    }
}

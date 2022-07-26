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
        $productsTable = $conn->prepare("SELECT * FROM products");
        $productsTable->execute();
        $resultProductsTable = $productsTable->fetchAll(PDO::FETCH_ASSOC);
        
        //Sort data by sku
        usort(
            $resultProductsTable,
            function ($item1, $item2) {
                return $item1['sku'] <=> $item2['sku'];
            }
        );

        echo json_encode($resultProductsTable);

        //Close connection
        $this->conn = null;
    }

    public function addProduct($preparedQuery)
    {
        $getConnection = new GetConnection;
        $conn = $getConnection->connect();

        $sku = $preparedQuery[0];
        $name = $preparedQuery[1];
        $price = $preparedQuery[2];
        $productType = $preparedQuery[3];
        $specificAttribute = $preparedQuery[4];
        $specificAttributeValue = $preparedQuery[5];
        $measureUnit = $preparedQuery[6];

        $statement = $conn->prepare("INSERT IGNORE INTO products (sku, name, price, product_type, specific_attribute, specific_attribute_value, measure_unit) 
            VALUES (:sku, :name, :price, :productType, :specificAttribute, :specificAttributeValue, :measureUnit)");

        $statement->bindValue('sku', $sku, PDO::PARAM_STR);
        $statement->bindValue('name', $name, PDO::PARAM_STR);
        $statement->bindValue('price', $price, PDO::PARAM_INT);
        $statement->bindValue('productType', $productType, PDO::PARAM_STR);
        $statement->bindValue('specificAttribute', $specificAttribute, PDO::PARAM_STR);
        $statement->bindValue('specificAttributeValue', $specificAttributeValue, PDO::PARAM_STR);
        $statement->bindValue('measureUnit', $measureUnit, PDO::PARAM_STR);
        
        $statement->execute();

        echo $name . " added to database";

        

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

        return;
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

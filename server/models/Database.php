<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
class Database
{
    public function getConnection()
    {        
        $servername = "localhost";
        $username = "id18674598_example_username";
        $password = "j5M[=j\~\}qL(W{%";
        $dbname = "id18674598_example_db";

        $conn = "mysql:host=$servername; dbname=$dbname; charset=utf8mb4";
        $options = array(
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC);
        return new PDO($conn, $username, $password, $options);
    }

    public function getRequest()
    {
        //Get connection to database
        $conn = $this->getConnection();

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
        usort($result, function ($item1, $item2) {
            return $item1['sku'] <=> $item2['sku'];
        }
        );

        echo json_encode($result);

        //Close connection
        $this->conn = null;
    }

    public function insertDataToTable($query)
    {
        //Get connection to database
        $conn = $this->getConnection();
        
        $statement = $conn->prepare($query);

        $statement->execute();

        //Close connection
        $this->conn = null;
    }

    public function deleteDataFromTable($query, $sku)
    {
        //Get connection to database
        $conn = $this->getConnection();
       
        $stmt= $conn->prepare($query);

        //Execute mysql statement 
        $stmt->execute([$sku]);

        //Close connection
        $this->conn = null;
    }
}





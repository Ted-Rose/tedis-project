<?php

require_once "Product.php";

require_once "Database.php";

class DatabaseManager
{
    public function addProduct($json, $newProduct)
    {
        $query = $newProduct->addProduct($json);

        $database1 = new Database();

        $database1->insertDataToTable($query);
    }

    public function deleteProduct($json, $deleteProduct)
    {
        $query = $deleteProduct->deleteProduct($json);

        $sku = $json["sku"];

        $database1 = new Database();

        $database1->deleteDataFromTable($query, $sku);
    }
}

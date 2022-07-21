<?php

require_once "../model/databaseManagement/Database.php";

abstract class Product
{
    public function addProduct($json)
    {
        $sku = $json["sku"];
        $name = $json["name"];
        $price = $json["price"];
        $specificAttribute = $json["specificAttribute"];

        $productQuery = [$this->tableName, $sku, $name, $price, $this->attributeName, $specificAttribute];

        $database = new Database();

        $database->addProduct($productQuery);

        return;
    }

    public function deleteProduct($json)
    {
        // Create query
        $query = "DELETE FROM {$this->tableName} 
        WHERE sku = ?";

        $sku = $json["sku"];

        $database = new Database();

        $database->deleteProduct($query, $sku);
        return;
    }
}

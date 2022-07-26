<?php

require_once "../model/databaseManagement/Database.php";

abstract class Product
{
    public function addProduct($json)
    {
        $sku = $json["sku"];
        $name = $json["name"];
        $price = $json["price"];
        $specificAttributeValue = $json["specificAttributeValue"];
        $productType = $json["productType"];
        $productQuery = [$sku, $name, $price, $productType, $this->specificAttribute, $specificAttributeValue, $this->measureUnit];

        $database = new Database();

        $database->addProduct($productQuery);

        return;
    }

    public function deleteProduct($json)
    {
        // Create query
        $query = "DELETE FROM products 
        WHERE sku = ?";

        $sku = $json["sku"];

        $database = new Database();

        $database->deleteProduct($query, $sku);
        return;
    }
}

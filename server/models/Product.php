<?php

abstract class Product
{
    public function addProduct($json)
    {
        
        $sku = $json["sku"];
        $name = $json["name"];
        $price = $json["price"];
        $lastVal = $json["lastVal"];

        // Prepare array of query data
        $preparedQuery = [$this->tableName, $sku, $name, $price, $this->attributeName, $lastVal];
        echo "preparedQuery: " . json_encode($preparedQuery);
        
        return $preparedQuery;
    }

    public function deleteProduct()
    {
        // Create query
        $query = "DELETE FROM {$this->tableName} 
        WHERE sku = ?";
        
        return $query;
    }
}
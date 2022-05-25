<?php

abstract class Product
{
    public function addProduct($json, $newProduct)
    {
        $sku = $json["sku"];
        $name = $json["name"];
        $price = $json["price"];
        $lastVal = $json["lastVal"];

        // Create query
        $query = "INSERT INTO {$this->tableName} 
        (sku, name, price, {$this->attributeName}) 
        VALUES ('$sku', '$name', $price, '$lastVal')";
        
        return $query;
    }

    public function deleteProduct($json)
    {
        $sku = $json["sku"];

        // Create query
        $query = "DELETE FROM {$this->tableName} 
        WHERE sku = ?";
        
        return $query;
    }
}
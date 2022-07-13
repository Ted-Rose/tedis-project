<?php

require_once "Product.php";

class Book extends Product 
{      
    public $tableName = "book";
    public $attributeName = "weight";
}
<?php

require_once "Product.php";

class Book extends Product 
{      
    public $productType = "book";
    public $specificAttribute = "weight";
    public $measureUnit = "KG";
}
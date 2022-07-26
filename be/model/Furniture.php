<?php

require_once "Product.php";

class Furniture extends Product
{      
    public $productType = "furniture";
    public $specificAttribute = "dimensions";
    public $measureUnit = "CM";
}
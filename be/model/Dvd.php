<?php

require_once "Product.php";

class Dvd extends Product
{      
    public $productType = "dvd";
    public $specificAttribute = "size";
    public $measureUnit = "MB";
}

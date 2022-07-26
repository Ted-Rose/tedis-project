<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
class GetConnection extends Database
{
    public function connect()
    {
        /* $servername = "sql309.epizy.com"; */
        $servername = "localhost";
        $username = "epiz_32077569";
        $password = "Mrr4r8T4t6SN60";
        $dbname = "epiz_32077569_products";

        $conn = "mysql:host=$servername; dbname=$dbname; charset=utf8mb4";
        $options = array(
            PDO::ATTR_EMULATE_PREPARES, false,
            PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
        );
        return new PDO($conn, $username, $password, $options);
    }
}

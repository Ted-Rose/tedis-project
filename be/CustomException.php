<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

class CustomException extends Exception {
  public function classDoesNotExist() {
    //error message
    $errorMsg = 'Error on line '.
        $this->getLine().
        ' in '.
        $this->getFile()
        .': Product type "'
        .$this->getMessage()
        .'" class does not exist!';
    return $errorMsg;
  }
}

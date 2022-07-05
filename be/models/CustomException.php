<?php

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

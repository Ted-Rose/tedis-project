import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const valueIsEmpty = isTouched && enteredValue.trim() === "";

  
  const valueIsValid =
    validateValue(enteredValue) && !valueIsEmpty && isTouched;
  const hasError = !valueIsValid && isTouched && !valueIsEmpty;

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value); //enteredName is scheduled to be updated, but
    //not yet updated
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true); //If lost focus it means user touched field
  };

  const reset = () => {
    setEnteredValue("");
    setIsTouched(false);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    empty: valueIsEmpty,
    hasError,
    //Used hasError instead of "hasError: hasError",
    //because in modern JavaScript syntax you don't need to right the same value twice
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;

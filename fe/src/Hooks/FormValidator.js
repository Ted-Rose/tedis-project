import { useState } from "react";

const FormValidator = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const valueIsEmpty = isTouched && enteredValue.trim() == "";
  const valueNotNumber = !enteredValue.trim() == "" && isNaN(enteredValue);
  const noSpecialChars = /^[a-zA-Z0-9]{1,100}$/;
  const ValueHasSpecialChars =
    !noSpecialChars.test(enteredValue) && !enteredValue.trim() == "";

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

  const requiredError = (
    <p className="error-text">Please, submit required data</p>
  );
  const dataError = (
    <p className="error-text">Please, provide the data of indicated type</p>
  );

  return {
    value: enteredValue,
    isEmpty: valueIsEmpty,
    notNumber: valueNotNumber,
    hasSpecialChars: ValueHasSpecialChars,
    //Used hasError instead of "hasError: hasError",
    //because in modern JavaScript syntax you don't need to right the same value twice
    valueChangeHandler,
    inputBlurHandler,
      reset,
      requiredError,
    dataError,
  };
};

export default FormValidator;

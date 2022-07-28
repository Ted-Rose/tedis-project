import { useState } from "react";

const FormValidator = () => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const valueIsEmpty = isTouched && enteredValue.trim() == "";
  const valueNotNumber = !enteredValue.trim() == "" && isNaN(enteredValue);
  const noSpecialChars = /^[a-zA-Z0-9 ]+$/;
  const ValueHasSpecialChars =
    !noSpecialChars.test(enteredValue) && !enteredValue.trim() == "";
  const inputClasses =
    !valueIsEmpty && !ValueHasSpecialChars
      ? "form-control"
      : "form-control invalid";

  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const inputBlurHandler = () => {
    setIsTouched(true);
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
    valueChangeHandler,
    inputBlurHandler,
    reset,
    requiredError,
    dataError,
    inputClasses,
  };
};

export default FormValidator;

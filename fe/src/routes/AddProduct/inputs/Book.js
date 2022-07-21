import { forwardRef, useImperativeHandle } from "react";
import FormValidator from "../../../Hooks/FormValidator";

const Book = forwardRef((props, ref) => {
  const {
    value,
    isEmpty,
    notNumber,
    valueChangeHandler,
    inputBlurHandler,
    reset,
    requiredError,
    dataError,
    inputClasses,
  } = FormValidator();

  const changeValue = (e) => {
    props.setValue(e.target.value);
    props.setIsValid(!isEmpty & !notNumber);
  };

  useImperativeHandle(ref, () => ({
    reset() {
      reset();
    },
  }));

  return (
    <div className={inputClasses}>
      <label htmlFor="weight" className="inputLabel">
        Weight (KG)
      </label>
      <input
        id="weight"
        type="text"
        value={value}
        onChange={(e) => {
          valueChangeHandler(e);
          changeValue(e);
        }}
        onBlur={inputBlurHandler}
        name="weight"
      />
      {isEmpty && requiredError}
      {notNumber && dataError}
      <label htmlFor="weight" className="description">
        Please provide size in KG
      </label>
    </div>
  );
});
export default Book;

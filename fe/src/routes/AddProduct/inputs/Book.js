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
    props.setValue({ value: e.target.value, name: e.target.name });
    props.setIsValid({
        value: !isEmpty & !notNumber,
        name: e.target.name,
      });
  };

  useImperativeHandle(ref, () => ({
    reset() {
      reset();
    },
  }));

  return (
    <div className={inputClasses}>
      <label htmlFor="specificAttribute" className="inputLabel">
        Weight (KG)
      </label>
      <input
        id="weight"
        type="text"
        name="specificAttribute"
        value={value}
        onChange={(e) => {
          valueChangeHandler(e);
          changeValue(e);
        }}
        onBlur={inputBlurHandler}
      />
      {isEmpty && requiredError}
      {notNumber && dataError}
      <label htmlFor="specificAttribute" className="description">
        Please provide size in KG
      </label>
    </div>
  );
});
export default Book;

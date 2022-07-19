import { forwardRef, useImperativeHandle } from "react";
import FormValidator from "../Hooks/FormValidator";

const Price = forwardRef((props, ref) => {
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
  };

  useImperativeHandle(ref, () => ({
    reset() {
      reset();
    },
  }));

  return (
    <div className={inputClasses}>
      <label htmlFor="name">Price</label>
      <input
        id="price"
        type="text"
        value={value}
        onChange={(e) => {
          valueChangeHandler(e);
          changeValue(e);
        }}
        onBlur={inputBlurHandler}
      />
      {isEmpty && requiredError}
      {notNumber && dataError}
    </div>
  );
});
export default Price;

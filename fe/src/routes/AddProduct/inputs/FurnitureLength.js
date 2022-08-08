import { forwardRef, useImperativeHandle } from "react";
import FormValidator from "../../../Hooks/FormValidator";

const FurnitureLength = forwardRef((props, ref) => {
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
    props.changeDimensions({ value: e.target.value, name: e.target.name });
    props.changeIsValid({
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
      <label htmlFor="length" className="inputLabel">
        Length (CM)
      </label>
      <input
        id="length"
        type="text"
        name="length"
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

export default FurnitureLength;

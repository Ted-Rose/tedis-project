import { forwardRef, useImperativeHandle } from "react";
import FormValidator from "../../../Hooks/FormValidator";

const FurnitureHeight = forwardRef((props, ref) => {
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
      <label htmlFor="height" className="inputLabel">
        Height (CM)
      </label>
      <input
        id="height"
        type="text"
        name="height"
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

export default FurnitureHeight;

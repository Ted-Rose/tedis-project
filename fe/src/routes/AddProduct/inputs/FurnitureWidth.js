import { forwardRef, useImperativeHandle } from "react";
import FormValidator from "../../../Hooks/FormValidator";

const FurnitureWidth = forwardRef((props, ref) => {
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
      <label htmlFor="width" className="inputLabel">
        Width (CM)
      </label>
      <input
        id="width"
        type="text"
        name="width"
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

export default FurnitureWidth;

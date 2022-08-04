import { forwardRef, useImperativeHandle } from "react";
import FormValidator from "../../../Hooks/FormValidator";

const Dvd = forwardRef((props, ref) => {
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
      <label htmlFor="size" className="inputLabel">
        Size (MB)
      </label>
      <input
        id="dvd"
        type="text"
        value={value}
        name="specificAttribute"
        onChange={(e) => {
          valueChangeHandler(e);
          changeValue(e);
        }}
        onBlur={inputBlurHandler}
      />
      {isEmpty && requiredError}
      {notNumber && dataError}
      <label htmlFor="size" className="description">
        Please provide size in MB
      </label>
    </div>
  );
});
export default Dvd;

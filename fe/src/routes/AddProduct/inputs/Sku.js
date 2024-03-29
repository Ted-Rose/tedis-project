import { forwardRef, useImperativeHandle } from "react";
import FormValidator from "../../../Hooks/FormValidator";

const Sku = forwardRef((props, ref) => {
  const {
    value,
    isEmpty,
    hasSpecialChars,
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
      value: !isEmpty & !hasSpecialChars,
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
      <label htmlFor="name">SKU</label>
      <input
        id="sku"
        type="text"
        value={value}
        name="skuValue"
        onChange={(e) => {
          valueChangeHandler(e);
          changeValue(e);
        }}
        onBlur={inputBlurHandler}
      />
      {isEmpty && requiredError}
      {hasSpecialChars && dataError}
    </div>
  );
});
export default Sku;

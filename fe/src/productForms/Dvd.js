import { useState } from "react";
import FormValidator from "../Hooks/FormValidator";

const Dvd = () => {
  const [specificAttribute, setSpecificAttribute] = useState("");

  const changeSpecificAttribute = (e) => {
    setSpecificAttribute(e.target.value);
  };
  const {
    value: dvdSizeValue,
    isEmpty: dvdSizeIsEmpty,
    notNumber: dvdSizeNotNumber,
    valueChangeHandler: dvdSizeChangeHandler,
    inputBlurHandler: dvdSizeBlurHandler,
    reset: resetDvdSize,
    requiredError,
    dataError,
  } = FormValidator();
  return (
    <div>
      <label htmlFor="size" className="form-label">
        Size (MB)
      </label>
      <input
        id="dvd"
        type="text"
        value={dvdSizeValue}
        onChange={(e) => {
          dvdSizeChangeHandler(e);
          changeSpecificAttribute(e);
        }}
        onBlur={dvdSizeBlurHandler}
        name="size"
      />
      {dvdSizeIsEmpty && requiredError}
      {dvdSizeNotNumber && dataError}
      <br />
      <label htmlFor="size" className="form-label">
        Please provide size in MB
      </label>
    </div>
  );
};
export default Dvd;

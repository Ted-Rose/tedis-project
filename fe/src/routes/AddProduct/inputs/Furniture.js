import { useState, forwardRef, useImperativeHandle } from "react";
import FormValidator from "../../../Hooks/FormValidator";

const Furniture = forwardRef((props, ref) => {
  const {
    value: furnitureHeightValue,
    isEmpty: furnitureHeightIsEmpty,
    notNumber: furnitureHeightNotNumber,
    valueChangeHandler: furnitureHeightChangeHandler,
    inputBlurHandler: furnitureHeightBlurHandler,
    reset: resetFurnitureHeight,
    requiredError,
    dataError,
    inputClasses,
  } = FormValidator();
  const {
    value: furnitureWidthValue,
    isEmpty: furnitureWidthIsEmpty,
    notNumber: furnitureWidthNotNumber,
    valueChangeHandler: furnitureWidthChangeHandler,
    inputBlurHandler: furnitureWidthBlurHandler,
    reset: resetFurnitureWidth,
  } = FormValidator();
  const {
    value: furnitureLengthValue,
    isEmpty: furnitureLengthIsEmpty,
    notNumber: furnitureLengthNotNumber,
    valueChangeHandler: furnitureLengthChangeHandler,
    inputBlurHandler: furnitureLengthBlurHandler,
    reset: resetFurnitureLength,
  } = FormValidator();

  const [heightValue, setHeightValue] = useState("");

  const changeHeightValue = (e) => {
    setHeightValue(e.target.value);
    props.setValue(e.target.value + "x" + widthValue + "x" + lengthValue);
    props.setIsValid(
      !furnitureHeightIsEmpty &
        !furnitureHeightNotNumber &
        !furnitureWidthIsEmpty &
        !furnitureWidthNotNumber &
        !furnitureLengthIsEmpty &
        !furnitureLengthNotNumber
    );
  };

  const [widthValue, setWidthValue] = useState("");

  const changeWidthValue = (e) => {
    setWidthValue(e.target.value);
    props.setValue(heightValue + "x" + e.target.value + "x" + lengthValue);
    props.setIsValid(
      !furnitureHeightIsEmpty &
        !furnitureHeightNotNumber &
        !furnitureWidthIsEmpty &
        !furnitureWidthNotNumber &
        !furnitureLengthIsEmpty &
        !furnitureLengthNotNumber
    );
  };

  const [lengthValue, setLengthValue] = useState("");

  const changeLengthValue = (e) => {
    setLengthValue(e.target.value);
    props.setValue(heightValue + "x" + widthValue + "x" + e.target.value);
    props.setIsValid(
      !furnitureHeightIsEmpty &
        !furnitureHeightNotNumber &
        !furnitureWidthIsEmpty &
        !furnitureWidthNotNumber &
        !furnitureLengthIsEmpty &
        !furnitureLengthNotNumber
    );
  };

  useImperativeHandle(ref, () => ({
    reset() {
      resetFurnitureHeight();
      resetFurnitureWidth();
      resetFurnitureLength();
    },
  }));

  return (
    <div id="Furniture">
      <div className={inputClasses}>
        <label htmlFor="height" className="form-label">
          Height (CM)
        </label>
        <input
          id="height"
          type="text"
          value={furnitureHeightValue}
          onChange={(e) => {
            furnitureHeightChangeHandler(e);
            changeHeightValue(e);
          }}
          onBlur={furnitureHeightBlurHandler}
          name="height"
        />
        {furnitureHeightIsEmpty && requiredError}
        {furnitureHeightNotNumber && dataError}
      </div>
      <div className={inputClasses}>
        <label htmlFor="width" className="form-label">
          Width (CM)
        </label>
        <input
          id="width"
          type="text"
          value={furnitureWidthValue}
          onChange={(e) => {
            furnitureWidthChangeHandler(e);
            changeWidthValue(e);
          }}
          onBlur={furnitureWidthBlurHandler}
          name="width"
        />
        {furnitureWidthIsEmpty && requiredError}
        {furnitureWidthNotNumber && dataError}
      </div>
      <div className={inputClasses}>
        <label htmlFor="length" className="form-label">
          Length (CM)
        </label>
        <input
          id="length"
          type="text"
          value={furnitureLengthValue}
          onChange={(e) => {
            furnitureLengthChangeHandler(e);
            changeLengthValue(e);
          }}
          onBlur={furnitureLengthBlurHandler}
          name="length"
        />
        {furnitureLengthIsEmpty && requiredError}
        {furnitureLengthNotNumber && dataError}
        <br />
        <label htmlFor="height width length" className="form-label">
          Please provide dimensions in HxWxL format
        </label>
      </div>
    </div>
  );
});
export default Furniture;

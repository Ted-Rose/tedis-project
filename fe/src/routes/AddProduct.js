import { useState } from "react";
import Footer from "../Footer";
import FormValidator from "../Hooks/FormValidator";
import "./AddProduct.scss";
import Dvd from "../productForms/Dvd";
import AddProductToDatabase from "../AddProductToDatabase";

const AddProduct = () => {
  const [productType, setproductType] = useState("");

  const changeProductType = (e) => {
    setproductType(e.target.value);
  };

  const [specificAttribute, setSpecificAttribute] = useState("");

  const changeSpecificAttribute = (e) => {
    setSpecificAttribute(e.target.value);
  };

  const [specificAttribute1, setSpecificAttribute1] = useState("");

  const changeSpecificAttribute1 = (e) => {
    setSpecificAttribute1(e.target.value);
    setSpecificAttribute(
      e.target.value + "x" + specificAttribute2 + "x" + specificAttribute3
    );
  };

  const [specificAttribute2, setSpecificAttribute2] = useState("");

  const changeSpecificAttribute2 = (e) => {
    setSpecificAttribute2(e.target.value);
    setSpecificAttribute({ specificAttribute1 }, "x", e.target.value, "x", {
      specificAttribute3,
    });
  };

  const [specificAttribute3, setSpecificAttribute3] = useState("");

  const changeSpecificAttribute3 = (e) => {
    setSpecificAttribute3(e.target.value);
    setSpecificAttribute(
      specificAttribute1 + "x" + specificAttribute2 + "x" + e.target.value
    );
  };

  const {
    value: skuValue,
    isEmpty: skuIsEmpty,
    hasSpecialChars: skuHasSpecialChars,
    valueChangeHandler: skuChangeHandler,
    inputBlurHandler: skuBlurHandler,
    reset: resetSku,
  } = FormValidator();
  const {
    value: nameValue,
    isEmpty: nameIsEmpty,
    hasSpecialChars: nameHasSpecialChars,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = FormValidator();
  const {
    value: priceValue,
    isEmpty: priceIsEmpty,
    notNumber: priceNotNumber,
    valueChangeHandler: priceChangeHandler,
    inputBlurHandler: priceBlurHandler,
    reset: resetPrice,
  } = FormValidator();
  const {
    value: dvdSizeValue,
    isEmpty: dvdSizeIsEmpty,
    notNumber: dvdSizeNotNumber,
    valueChangeHandler: dvdSizeChangeHandler,
    inputBlurHandler: dvdSizeBlurHandler,
    reset: resetDvdSize,
  } = FormValidator();
  const {
    value: furnitureHeightValue,
    isEmpty: furnitureHeightIsEmpty,
    notNumber: furnitureHeightNotNumber,
    valueChangeHandler: furnitureHeightChangeHandler,
    inputBlurHandler: furnitureHeightBlurHandler,
    reset: resetFurnitureHeight,
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
  const {
    value: bookWeightValue,
    isEmpty: bookWeightIsEmpty,
    notNumber: bookWeightNotNumber,
    valueChangeHandler: bookWeightChangeHandler,
    inputBlurHandler: bookWeightBlurHandler,
    reset: resetBookWeight,
  } = FormValidator();

  let formIsValid = true;

  /*  if (
    !skuIsEmpty &&
    !skuHasSpecialChars &&
    !nameIsEmpty &&
    !nameHasSpecialChars &&
    !priceIsEmpty &&
    !priceNotNumber
  ) {
    formIsValid = true;
  } */

  const skuClasses =
    !skuIsEmpty && !skuHasSpecialChars
      ? "form-control"
      : "form-control invalid";

  const nameClasses =
    !nameIsEmpty && !nameHasSpecialChars
      ? "form-control"
      : "form-control invalid";
  const priceClasses =
    !priceIsEmpty && !priceNotNumber ? "form-control" : "form-control invalid";

  const requiredError = (
    <p className="error-text">Please, submit required data</p>
  );
  const dataError = (
    <p className="error-text">Please, provide the data of indicated type</p>
  );

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    const productFormData = {
      sku: skuValue,
      name: nameValue,
      price: priceValue,
      specificAttribute: specificAttribute,
      productType: productType,
    };
    /*     AddProductToDatabase(productFormData);
     */
    console.log("Submitted!");
    console.log(productFormData);

    resetSku();
    resetName();
    resetPrice();
    resetDvdSize();
    resetFurnitureHeight();
    resetFurnitureWidth();
    resetFurnitureLength();
    resetBookWeight();
  };

  const typeSwitcherOptions = [
    {
      label: "Type Switcher",
      value: "",
    },
    {
      label: "DVD",
      value: "dvd",
    },
    {
      label: "Furniture",
      value: "furniture",
    },
    {
      label: "Book",
      value: "book",
    },
  ];

  return (
    <div>
      <form onSubmit={submitHandler} id="product_form">
        <div className="control-group">
          <div className={skuClasses}>
            <label htmlFor="name">SKU</label>
            <input
              type="text"
              id="sku"
              value={skuValue}
              onChange={skuChangeHandler}
              onBlur={skuBlurHandler}
            />
            {skuIsEmpty && requiredError}
            {skuHasSpecialChars && dataError}
          </div>
          <div className={nameClasses}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={nameValue}
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
            />
            {nameIsEmpty && requiredError}
            {nameHasSpecialChars && dataError}
          </div>
        </div>
        <div className={priceClasses}>
          <label htmlFor="name">Price</label>
          <input
            type="text"
            id="price"
            value={priceValue}
            onChange={priceChangeHandler}
            onBlur={priceBlurHandler}
          />
          {priceNotNumber && requiredError}
          {priceIsEmpty && dataError}
        </div>

        <select value={productType} onChange={changeProductType}>
          {typeSwitcherOptions.map((option, i) => (
            <option value={option.value} key={i}>
              {option.label}{" "}
            </option>
          ))}
        </select>
        {productType.includes("dvd") && (
          <div id="Dvd">
            <div className="form-group">
              <label htmlFor="size" className="form-label">
                Size (MB)
              </label>
              <input
                id="size"
                type="text"
                value={dvdSizeValue}
                onChange={(e) => {
                  dvdSizeChangeHandler(e);
                  changeSpecificAttribute(e);
                }}
                onBlur={dvdSizeBlurHandler}
                className="form-control"
                name="size"
              />
              {dvdSizeIsEmpty && requiredError}
              {dvdSizeNotNumber && dataError}
              <br />
              <label htmlFor="size" className="form-label">
                Please provide size in KG
              </label>
            </div>
          </div>
        )}
        {productType.includes("furniture") && (
          <div id="Furniture">
            <div className="form-group">
              <label htmlFor="height" className="form-label">
                Height (CM)
              </label>
              <input
                id="height"
                type="text"
                value={furnitureHeightValue}
                onChange={(e) => {
                  furnitureHeightChangeHandler(e);
                  changeSpecificAttribute1(e);
                }}
                onBlur={furnitureHeightBlurHandler}
                className="form-control"
                name="height"
              />
              {furnitureHeightIsEmpty && requiredError}
              {furnitureHeightNotNumber && dataError}
            </div>
            <div className="form-group">
              <label htmlFor="width" className="form-label">
                Width (CM)
              </label>
              <input
                id="width"
                type="text"
                value={furnitureWidthValue}
                onChange={(e) => {
                  furnitureWidthChangeHandler(e);
                  changeSpecificAttribute2(e);
                }}
                onBlur={furnitureWidthBlurHandler}
                className="form-control"
                name="width"
              />
              {furnitureWidthIsEmpty && requiredError}
              {furnitureWidthNotNumber && dataError}
            </div>
            <div className="form-group">
              <label htmlFor="length" className="form-label">
                Length (KG)
              </label>
              <input
                id="length"
                type="text"
                value={furnitureLengthValue}
                onChange={(e) => {
                  furnitureLengthChangeHandler(e);
                  changeSpecificAttribute3(e);
                }}
                onBlur={furnitureLengthBlurHandler}
                className="form-control"
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
        )}
        {productType.includes("book") && (
          <div id="Book">
            <div className="form-group">
              <label htmlFor="weight" className="form-label">
                Weight (KG)
              </label>
              <input
                id="weight"
                type="text"
                value={bookWeightValue}
                onChange={(e) => {
                  bookWeightChangeHandler(e);
                  changeSpecificAttribute(e);
                }}
                onBlur={bookWeightBlurHandler}
                className="form-control"
                name="weight"
              />
              {bookWeightIsEmpty && requiredError}
              {bookWeightNotNumber && dataError}
              <br />
              <label htmlFor="size" className="form-label">
                Please provide size in KG
              </label>
            </div>
          </div>
        )}
        <div className="form-actions">
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default AddProduct;

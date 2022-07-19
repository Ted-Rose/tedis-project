import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import "./AddProduct.scss";
import Sku from "../inputs/Sku";
import Name from "../inputs/Name";
import Price from "../inputs/Price";
import SpecificAttributes from "./SpecificAttributes";
/* import AddProductToDatabase from "../AddProductToDatabase";
 */
const AddProduct = () => {
  let navigate = useNavigate();

  const [productType, setproductType] = useState("");

  const changeProductType = (e) => {
    setproductType(e);
  };

  const [skuValue, setSkuValue] = useState("");

  const changeSkuValue = (e) => {
    setSkuValue(e);
  };

  const [nameValue, setNameValue] = useState("");

  const changeNameValue = (e) => {
    setNameValue(e);
  };

  const [priceValue, setPriceValue] = useState("");

  const changePriceValue = (e) => {
    setPriceValue(e);
  };

  const [specificAttribute, setSpecificAttribute] = useState("");

  const changeSpecificAttribute = (e) => {
    setSpecificAttribute(e);
  };

  const skuRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const specificAttributesRef = useRef();

  let formIsValid = true;

  /*    if (
    !skuIsEmpty &&
    !skuHasSpecialChars &&
    !nameIsEmpty &&
    !nameHasSpecialChars &&
    !priceIsEmpty &&
    !priceNotNumber
  ) {
    formIsValid = true;
  } */

  const submitHandler = (e) => {
    e.preventDefault();

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

    skuRef.current.reset();
    nameRef.current.reset();
    priceRef.current.reset();
    specificAttributesRef.current.reset();
    /* navigate("/"); */
  };

  return (
    <div>
      <form onSubmit={submitHandler} id="product_form">
        <Sku ref={skuRef} setValue={changeSkuValue} />
        <Name ref={nameRef} setValue={changeNameValue} />
        <Price ref={priceRef} setValue={changePriceValue} />
        <SpecificAttributes
          ref={specificAttributesRef}
          setValue={changeSpecificAttribute}
          changeType={changeProductType}
        />
        <div className="form-actions">
          <button disabled={!formIsValid}>Submit</button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default AddProduct;

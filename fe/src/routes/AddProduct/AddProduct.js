import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import "./AddProduct.scss";
import Sku from "./inputs/Sku";
import Name from "./inputs/Name";
import Price from "./inputs/Price";
import SpecificAttributes from "./inputs/SpecificAttributes";
import AddProductToDatabase from "./AddProductToDatabase";

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

  const [skuIsValid, setSkuIsValid] = useState(false);

  const changeSkuIsValid = (e) => {
    setSkuIsValid(e);
  };

  const [nameIsValid, setNameIsValid] = useState(false);

  const changeNameIsValid = (e) => {
    setNameIsValid(e);
  };

  const [priceIsValid, setPriceIsValid] = useState(false);

  const changePriceIsValid = (e) => {
    setPriceIsValid(e);
  };

  const [specificAttributesIsValid, setSpecificAttributesIsValid] =
    useState(false);

  const changeSpecificAttributesIsValid = (e) => {
    setSpecificAttributesIsValid(e);
  };

  const skuRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const specificAttributesRef = useRef();

  let formIsValid = false;

  if (skuIsValid && nameIsValid && priceIsValid && specificAttributesIsValid) {
    formIsValid = true;
  }

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    let productFormData = {
      sku: skuValue,
      name: nameValue,
      price: priceValue,
      specificAttribute: specificAttribute,
      productType: productType,
    };
    AddProductToDatabase(productFormData);

    console.log("Submitted!");
    console.log(productFormData);

    navigate("/");
  };

  return (
    <div>
      <form onSubmit={submitHandler} id="product_form">
        <Sku
          ref={skuRef}
          setValue={changeSkuValue}
          setIsValid={changeSkuIsValid}
        />
        <Name
          ref={nameRef}
          setValue={changeNameValue}
          setIsValid={changeNameIsValid}
        />
        <Price
          ref={priceRef}
          setValue={changePriceValue}
          setIsValid={changePriceIsValid}
        />
        <SpecificAttributes
          ref={specificAttributesRef}
          setValue={changeSpecificAttribute}
          changeType={changeProductType}
          setIsValid={changeSpecificAttributesIsValid}
        />
        <div className="form-actions">
          <button
            onClick={() => {
              navigate("/");
            }}
          >
            Cancel
          </button>
          <button disabled={!formIsValid}>Save</button>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default AddProduct;

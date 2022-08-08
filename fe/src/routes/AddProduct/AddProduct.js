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

  const [inputStates, setInputStates] = useState({
    skuValue: "",
    nameValue: "",
    priceValue: "",
    specificAttribute: "",
  });

  const changeInputStates = (e) => {
    const { name, value } = e;
    setInputStates((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [isValid, setIsValid] = useState({
    skuValue: false,
    nameValue: false,
    priceValue: false,
    specificAttribute: false,
  });

  const changeIsValid = (e) => {
    const { name, value } = e;
    setIsValid((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [productType, setproductType] = useState("");

  const changeProductType = (e) => {
    setproductType(e);
  };

  let formIsValid = false;

  if (
    isValid["skuValue"] &&
    isValid["nameValue"] &&
    isValid["priceValue"] &&
    isValid["specificAttribute"]
  ) {
    formIsValid = true;
  }

  const skuRef = useRef();
  const nameRef = useRef();
  const priceRef = useRef();
  const specificAttributesRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }
    let productFormData = {
      sku: inputStates.skuValue,
      name: inputStates.nameValue,
      price: inputStates.priceValue,
      productType: productType,
      specificAttributeValue: inputStates.specificAttribute,
      action: "post",
    };

    AddProductToDatabase(productFormData);
    skuRef.current.reset();
    nameRef.current.reset();
    priceRef.current.reset();
    specificAttributesRef.current.reset();
    navigate("/productlist");
  };

  return (
    <div className="add-product-box">
      <form onSubmit={submitHandler} id="product_form" className="form-control">
        <Sku
          ref={skuRef}
          setValue={changeInputStates}
          setIsValid={changeIsValid}
        />
        <Name
          ref={nameRef}
          setValue={changeInputStates}
          setIsValid={changeIsValid}
        />
        <Price
          ref={priceRef}
          setValue={changeInputStates}
          setIsValid={changeIsValid}
        />
        <SpecificAttributes
          ref={specificAttributesRef}
          setValue={changeInputStates}
          changeType={changeProductType}
          setIsValid={changeIsValid}
        />
        <div className="form-actions">
          <button
            onClick={() => {
              navigate("/productlist");
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

import { useState } from "react";
import "./ProductList.scss";

import Header from "./ProductListHeader";

import ProductListContent from "./ProductListContent";

import Footer from "./../Footer";

function ProductList() {
  const [updatedCheckedState, setUpdatedCheckedState] =
    useState("Nothing updated");
  const changeUpdatedCheckedState = (updatedCheckedState) => {
    setUpdatedCheckedState(updatedCheckedState);
  };

  const [updatedProducts, setUpdatedProducts] = useState("Nothing updated");
  const changeUpdatedProducts = (updatedProducts) => {
    setUpdatedProducts(updatedProducts);
  };

  return (
    <div className="box">
      <Header
        updatedCheckedState={updatedCheckedState}
        updatedProducts={updatedProducts}
      />
      <ProductListContent
        changeUpdatedCheckedState={changeUpdatedCheckedState}
        changeUpdatedProducts={changeUpdatedProducts}
      />
      <Footer />
    </div>
  );
}

export default ProductList;

import { useState, useRef } from "react";
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

  const productListContentRef = useRef();

  const refreshProductListContent = () => {
    productListContentRef.current.refreshProductListContent();
  };

  return (
    <div className="box">
      <Header
        updatedCheckedState={updatedCheckedState}
        updatedProducts={updatedProducts}
        refreshProductListContent={refreshProductListContent}
      />
      <ProductListContent
        changeUpdatedCheckedState={changeUpdatedCheckedState}
        changeUpdatedProducts={changeUpdatedProducts}
        ref={productListContentRef}
      />
      <Footer />
    </div>
  );
}

export default ProductList;

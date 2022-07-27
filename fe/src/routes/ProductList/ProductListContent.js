import React, { useState, useEffect, useCallback } from "react";
import CreateProductList from "./CreateProductList";
import "./ProductListContent.scss";
import Links from "../../Links";

function ProductListContent(props) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const changeUpdatedCheckedState = (updatedCheckedState) => {
      props.changeUpdatedCheckedState(updatedCheckedState);
      props.changeUpdatedProducts(products);
  };

  const fetchProductsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(Links["products"]);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedProducts = [];

      for (const key in data) {
        loadedProducts.push({
          id: data[key].id,
          sku: data[key].sku,
          name: data[key].name,
          price: data[key].price,
          productType: data[key].product_type,
          specificAttribute: data[key].specific_attribute,
          specificAttributeValue: data[key].specific_attribute_value,
          measureUnit: data[key].measure_unit,
        });
      }
      setProducts(loadedProducts);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchProductsHandler();
  }, [fetchProductsHandler]);

  let content = <p>Found no products.</p>;

  if (products.length > 0) {
    content = (
      <CreateProductList
        products={products}
        changeUpdatedCheckedState={changeUpdatedCheckedState}
      />
    );
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
    }

  return (
    <div className="content">
      <section>{content}</section>
    </div>
    );
    
}

export default ProductListContent;

import React, { useState, useEffect, useCallback } from "react";

import CreateProductList from "./CreateProductList";
/* import AddProduct from "./AddProduct"; */
import "./ProductListContent.scss";

const getFormattedPrice = (price) => `$${price.toFixed(2)}`;

function ProductListContent() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchProductsHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        "http://localhost:8000/Local_documents/GitHub/tedis-project/be/controller/Products.php"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedProducts = [];

      for (const key in data) {
        loadedProducts.push({
          id: key,
          sku: data[key].sku,
          name: data[key].name,
          price: data[key].price,
          specificAttribute: data[key].specificAttribute,
        });
      }

      setProducts(loadedProducts);
      console.log(loadedProducts);
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
    content = <CreateProductList products={products} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  const [total, setTotal] = useState(0);

  return (
    <div className="content">
      <div className="toppings-list-item">
        <div className="left-section">Total:</div>
        <div className="right-section">{getFormattedPrice(total)}</div>
      </div>
      <section>{content}</section>
    </div>
  );
}

export default ProductListContent;

import React from "react";

import Product from "./Product";
import "./ProductList.scss";

const ProductList = (props) => {
  return (
    <ul className="product-list">
      {props.products.map((product) => (
        <Product
          key={product.id}
          sku={product.sku}
          name={product.name}
          price={product.price}
          specificAttribute={product.specificAttribute}
        />
      ))}
    </ul>
  );
};

export default ProductList;

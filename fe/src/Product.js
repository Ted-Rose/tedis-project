import React from "react";

import "./Product.scss";

const Product = (props) => {
  return (
    <li className="product">
      <h3>{props.sku}</h3>
      <h2>{props.name}</h2>
      <p>{props.price} $</p>
      <p>Weight: {props.specificAttribute}KG</p>
    </li>
  );
};

export default Product;

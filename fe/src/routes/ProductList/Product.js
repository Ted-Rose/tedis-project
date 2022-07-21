import { useState } from "react";

import "./Product.scss";

const Product = (props) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };
    


  return (
    <li className="product">
      <input
        type="checkbox"
        id={props.sku}
        name={props.name}
        value={props.name}
        checked={isChecked}
        onChange={handleOnChange}
      />
      <h3>{props.sku}</h3>
      <h2>{props.name}</h2>
      <p>{props.price} $</p>
      <p>Weight: {props.specificAttribute}KG</p>
    </li>
  );
};

export default Product;

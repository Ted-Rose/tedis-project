import { useState } from "react";
import Product from "./Product";
import "./CreateProductList.scss";

const CreateProductList = (props) => {
    const [checkedState, setCheckedState] = useState(
        new Array(props.products.length).fill(false)
    );

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

export default CreateProductList;

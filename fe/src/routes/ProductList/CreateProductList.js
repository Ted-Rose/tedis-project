import { useState } from "react";
import "./CreateProductList.scss";
import Checkbox from "../SubscribeToNewsletter/Checkbox";

const getFormattedPrice = (price) => `${Number(price).toFixed(2)} $`;

const CreateProductList = (props) => {
  const [checkedState, setCheckedState] = useState(
    new Array(props.products.length).fill(false)
  );

  const [total, setTotal] = useState(0);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
    props.changeUpdatedCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + props.products[index].price;
        }
        return sum;
      },
      0
    );

    setTotal(totalPrice);
  };

  return (
    <ul className="product-list">
      <h2 className="cart-value">
        Cart total value: {getFormattedPrice(total)}
      </h2>
      {props.products.map(
        (
          {
            name,
            price,
            sku,
            specificAttribute,
            specificAttributeValue,
            measureUnit,
          },
          index
        ) => {
          return (
            <li key={index} className="product">
              <div>
                <div>
                  <div className="product__SKU-box">
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      name={name}
                      value={name}
                      checked={checkedState[index]}
                      onChange={() => handleOnChange(index)}
                    />
                    <h2>SKU: {sku}</h2>
                  </div>
                  <h2>Product name: {name}</h2>
                  <h2>Price: {getFormattedPrice(price)}</h2>
                  <h2>
                    {specificAttribute}: {specificAttributeValue} {measureUnit}{" "}
                  </h2>
                </div>
              </div>
            </li>
          );
        }
      )}
    </ul>
  );
};

export default CreateProductList;

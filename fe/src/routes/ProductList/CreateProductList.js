import { useState } from "react";
import "./CreateProductList.scss";

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
      <div className="cart-value">
        Cart total value: {getFormattedPrice(total)}
      </div>
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
                  <input
                    type="checkbox"
                    id={`custom-checkbox-${index}`}
                    name={name}
                    value={name}
                    checked={checkedState[index]}
                    onChange={() => handleOnChange(index)}
                  />
                  <h3>{sku}</h3>
                  <h2>{name}</h2>
                  <p>{getFormattedPrice(price)}</p>
                  <p>
                    {specificAttribute}: {specificAttributeValue} {measureUnit}{" "}
                  </p>
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

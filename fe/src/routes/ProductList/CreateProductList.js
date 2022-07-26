import { useState } from "react";
import Product from "./Product";
import { useNavigate } from "react-router-dom";
import "./CreateProductList.scss";
import Links from "../../Links";

const getFormattedPrice = (price) => `${Number(price).toFixed(2)} $`;

const CreateProductList = (props) => {

  let navigate = useNavigate();
  const [checkedState, setCheckedState] = useState(
    new Array(props.products.length).fill(false)
  );

  const [total, setTotal] = useState(0);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

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

  const deleteProducts = () => {
    for (let i = 0; i < checkedState.length; i++) {
      if (checkedState[i] === true) sendDeleteRequest(i);
      console.log(props.products[i]);
    }
    return;
  };

  async function sendDeleteRequest(i) {
    const response = await fetch(Links["products"], {
      method: "DELETE",
      body: JSON.stringify(props.products[i]),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.text();
    console.log(data);

    navigate("/");
  }

  return (
    <ul className="product-list">
      <button
        className="delete-product-btn"
        id="delete-product-btn"
        onClick={deleteProducts}
      >
        MASS DELETE
      </button>
      <div className="left-section">Cart total value: </div>
      <div className="right-section">{getFormattedPrice(total)}</div>
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

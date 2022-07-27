import { useNavigate } from "react-router-dom";
import "./ProductListHeader.scss";
import Links from "../../Links";

const Header = (props) => {
  let navigate = useNavigate();

  const deleteProducts = () => {
    for (let i = 0; i < props.updatedCheckedState.length; i++) {
      if (props.updatedCheckedState[i] === true) sendDeleteRequest(i);
    }
    return;
  };

  async function sendDeleteRequest(i) {
    const response = await fetch(Links["products"], {
      method: "DELETE",
      body: JSON.stringify(props.updatedProducts[i]),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.text();
    console.log(data);

    navigate("/productlist");
  }

  return (
    <div className="product-list-header">
      <h1>Product List</h1>
      <button
        className="add-product-btn"
        onClick={() => {
          navigate("/");
        }}
      >
        Subscribe
      </button>
      <button
        className="add-product-btn"
        onClick={() => {
          navigate("/addproduct");
        }}
      >
        ADD
      </button>
      <button
        className="delete-product-btn"
        id="delete-product-btn"
        onClick={deleteProducts}
      >
        DELETE
      </button>
    </div>
  );
};

export default Header;

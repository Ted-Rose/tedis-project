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
    const bodyWithPassword = {
      ...props.updatedProducts[i],
      action: "delete",
    };
    await fetch(Links["products"], {
      method: "POST",
      body: JSON.stringify(bodyWithPassword),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await props.refreshProductListContent();
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
        Newsletter
      </button>
      <button
        className="add-product-btn"
        onClick={() => {
          navigate("/addproduct");
        }}
      >
        Add
      </button>
      <button
        className="delete-product-btn"
        id="delete-product-btn"
        onClick={deleteProducts}
      >
        Delete
      </button>
    </div>
  );
};

export default Header;

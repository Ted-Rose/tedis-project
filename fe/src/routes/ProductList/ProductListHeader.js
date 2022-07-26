import "./ProductListHeader.scss";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();
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
      <button className="delete-product-btn" id="delete-product-btn">
        MASS DELETE
      </button>
    </div>
  );
};

export default Header;

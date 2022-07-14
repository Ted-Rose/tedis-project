import "./Header.scss";

const Header = () => (
  <div className="header">
    <h1>Product List</h1>
    <button className="add-product-btn">ADD</button>
    <button className="delete-product-btn" id="delete-product-btn">
      MASS DELETE
    </button>
  </div>
);

export default Header;

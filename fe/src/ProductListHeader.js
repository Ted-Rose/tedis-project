import "./ProductListHeader.scss";
import { useParams, useNavigate, useLocation } from "react-router-dom";


const Header = () => {
    let navigate = useNavigate();
    return (
        <div className="header">
            <h1>Product List</h1>
            <button
                className="add-product-btn"
                onClick={() => {
                    navigate("/ProductAdd");
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

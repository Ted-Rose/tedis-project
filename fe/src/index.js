import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./routes/ProductList/ProductList.js";
import AddProduct from "./routes/AddProduct/AddProduct.js";
import "./index.scss"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="add-product" element={<AddProduct />} />
    </Routes>
  </BrowserRouter>
);

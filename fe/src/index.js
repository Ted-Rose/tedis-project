import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";
import ProductList from "./routes/ProductList/ProductList";
import AddProduct from "./routes/AddProduct/AddProduct.js";
import SubscribeToNewsletter from "./routes/SubscribeToNewsletter/SubscribeToNewsletter.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="productlist" element={<ProductList />} />
      <Route path="/" element={<SubscribeToNewsletter />} />
      <Route path="addproduct" element={<AddProduct />} />
    </Routes>
  </BrowserRouter>
);

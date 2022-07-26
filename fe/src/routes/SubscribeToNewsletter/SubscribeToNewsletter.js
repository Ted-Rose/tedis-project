import Header from "./Header";

import Content from "./Content";

import "./SubscribeToNewsletter.scss";

const LINKS = [
  { label: "Product List", to: "/productlist" },
  { label: "Add Product", to: "/addproduct" },
  { label: "Contact", to: "#" },
];

export default function SubscribeToNewsletter() {
  return (
    <div className="subscribe-box-wrapper">
      <div className="subscribe-box">
        <Header links={LINKS} />
        <Content />
      </div>
      <div className="desktop-image"></div>
    </div>
  );
}

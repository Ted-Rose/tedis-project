import Header from "./Header";

import Content from "./Content";

import "./SubscribeToNewsletter.scss";

export default function SubscribeToNewsletter() {
  return (
    <div className="subscribe-box-wrapper">
      <div className="subscribe-box">
        <Header/>
        <Content />
      </div>
      <div className="desktop-image"></div>
    </div>
  );
}

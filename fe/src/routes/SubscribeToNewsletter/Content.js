import "./Content.scss";

import EmailForm from "./EmailForm";

import Icons from "./Icons";

import Terms from "./Terms";

const Content = () => (
  <div className="subscribe-content">
    <div className="subscribe-content__frame">
      <h1>Subscribe to newsletter</h1>
      <h2>
        Subscribe to our newsletter and get 10% discount on pineapple glasses.
      </h2>
      <EmailForm />
      <Terms />
      <div className="subscribe-frame__line"></div>
      <Icons />
    </div>
  </div>
);

export default Content;

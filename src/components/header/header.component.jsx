import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/4.3 crown.svg";

import "./header.styles.scss";

const Header = () => (
  <div className="header">
    <a className="logo-container" to="/">
      <Logo className="logo" />
    </a>
    <div className="options">
      <a className="option" to="/shop">
        SHOP
      </a>
      <a className="option" to="/shop">
        CONTACT
      </a>
    </div>
  </div>
);

export default Header;

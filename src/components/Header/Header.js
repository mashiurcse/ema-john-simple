import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="Header">
      <img src={logo}></img>
      <nav>
        <a href="/shop">Shop</a>
        <a href="/oderRivew">Order Rivew</a>
        <a href="/manageInventory">Manage navInventory</a>
      </nav>
    </div>
  );
};

export default Header;

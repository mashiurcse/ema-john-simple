import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";
import { Link } from "react-router-dom";

const Product = props => {
  const { name, price, seller, stock, img, key } = props.product;
  // console.log(props);
  // const element = <FontAwesomeIcon icon={faShoppingCart} />;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4>
          <Link to={"/product/" + key}>{name}</Link>{" "}
        </h4>
        <br />
        <p>
          <small>By - {seller}</small>
        </p>
        <br />
        <p className="price">Price - ${price}</p>
        <br />
        <p>
          <small>Only {stock} left in stock - Order soon</small>
        </p>

        {props.showAddToCart && (
          <button
            className="main-button"
            onClick={() => props.handleAddProduct(props.product)}
          >
            {<FontAwesomeIcon icon={faShoppingCart} />} Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;

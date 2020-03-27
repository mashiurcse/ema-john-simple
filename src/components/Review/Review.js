import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {
  getDatabaseCart,
  removeFromDatabaseCart,
  processOrder
} from "../../utilities/databaseManager";
import fakeData from "../../fakeData";
import ProductReview from "../ProductReview/ProductReview";
import Cart from "../Cart/Cart";
import happyImage from "../../images/giphy.gif";

const Review = () => {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false); //by default order place korbe na so false

  const removeProduct = productkey => {
    const newCart = cart.filter(pd => pd.key !== productkey);
    setCart(newCart);
    removeFromDatabaseCart(productkey);
  };

  const handleOrderPlace = () => {
    setCart([]);
    setOrderPlaced(true);
    processOrder();
  };

  useEffect(() => {
    //cart data
    const saveData = getDatabaseCart();
    const productkeys = Object.keys(saveData);
    const cartProducts = productkeys.map(key => {
      const product = fakeData.find(pd => pd.key === key);
      product.quantity = saveData[key];
      return product;
    });
    setCart(cartProducts);
  }, []);

  let thankyou;
  if (orderPlaced) {
    thankyou = <img src={happyImage} alt="" />;
  }

  return (
    <div className="shop-container">
      <div className="product-container">
        {cart.map(pd => (
          <ProductReview
            key={pd.key}
            removeProduct={removeProduct}
            product={pd}
          ></ProductReview>
        ))}
        {thankyou}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button onClick={handleOrderPlace} className="main-button">
            Place Order
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;

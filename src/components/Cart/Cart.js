import React from "react";
import "./Cart.css";

const Cart = props => {
  const cart = props.cart;

  /*
  let items = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    items = product.price;
  }*/
  //to use array of items have to use reduce to access one by one
  const items = cart.reduce((items, pd) => pd.price, 0);
  const total = cart.reduce((total, pd) => total + pd.price, 0);
  /* let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    total = total + product.price;
  }*/
  let tax = (total / 10).toFixed(2); //toFixed use korle string hoe jae the have to convert in number
  let shipping = 12;
  const grandTotal = (total + shipping + Number(tax)).toFixed(2);
  return (
    <div>
      <h2>Ordered Summary</h2>
      <p>Items Ordered: {cart.length}</p>
      <p>Items: ${items}</p>
      <p>Shipping & Handling: ${shipping}</p>
      <p>Estimated Tax: {tax}</p>
      <p>Order Total: $ {grandTotal}</p>
    </div>
  );
};

export default Cart;

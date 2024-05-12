import React from "react";
import Header from "../Components/Header";

function Cart(selectedItems) {
  return (
    <div>
      <Header />
      <p>Cart</p>
      {/* <p>{selectedItems}</p> */}
    </div>
  );
}

export default Cart;

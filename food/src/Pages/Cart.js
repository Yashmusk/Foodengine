import React from "react";
import Header from "../Components/Header";
import Restros from "../Components/Restros";

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

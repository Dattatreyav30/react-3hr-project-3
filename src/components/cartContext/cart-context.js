import React from "react";

const CartContext = React.createContext({
  items: [],
  addItemHandler: () => {},
  updateQtyHandler: () => {},
});

export default CartContext;

import { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const addItemHandler = (item) => {
    setItems((prevItems) => {
      return [
        ...prevItems,
        { name: item.name, description: item.description, price: item.price },
      ];
    });
  };
  const updateQtyHandler = () => {};

  const cartContext = {
    items: items,
    addItemHandler: addItemHandler,
    updateQtyHandler: updateQtyHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

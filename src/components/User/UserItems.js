import { useContext } from "react";
import CartContext from "../cartContext/cart-context";

const UserItems = () => {
  const cartCtx = useContext(CartContext);

  const onClickEventHandler = () => {};
  return (
    <>
      <h1>User Area</h1>
      <nav>
        {cartCtx.items.map((item) => {
          return (
            <ul>
              <li>{item.name}</li>
              <li>{item.description}</li>
              <li>{item.price}</li>
              <button onClick={() => onClickEventHandler(item)}>Add to cart</button>
            </ul>
          );
        })}
      </nav>
    </>
  );
};

export default UserItems;

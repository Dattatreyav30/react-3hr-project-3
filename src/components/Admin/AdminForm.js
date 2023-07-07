import { useContext, useState } from "react";
import CartContext from "../cartContext/cart-context";

const AdminForm = () => {
  const cartCtx = useContext(CartContext);
  const [itemsList, setItemsList] = useState({
    name: "",
    description: "",
    price: "",
  });

  const onChangeNameHandler = (e) => {
    setItemsList({ ...itemsList, name: e.target.value });
  };

  const onChangeDescHandler = (e) => {
    setItemsList({ ...itemsList, description: e.target.value });
  };

  const onChangePriceHandler = (e) => {
    setItemsList({ ...itemsList, price: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    cartCtx.addItemHandler(itemsList)
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        onChange={onChangeNameHandler}
        type="text"
        name="name"
        placeholder="medicene name"
      />
      <input
        onChange={onChangeDescHandler}
        type="text"
        name="description"
        placeholder="description"
      />
      <input
        onChange={onChangePriceHandler}
        type="number"
        name="price"
        placeholder="price"
      />
      <button>Add item</button>
    </form>
  );
};

export default AdminForm;

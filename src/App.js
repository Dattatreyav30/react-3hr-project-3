import AdminForm from "./components/Admin/AdminForm";
import CartProvider from "./components/cartContext/CartProvider";
import UserItems from "./components/User/UserItems";

const App = () => {
  return (
    <CartProvider>
      <AdminForm />
      <UserItems/>
    </CartProvider>
  );
};

export default App;

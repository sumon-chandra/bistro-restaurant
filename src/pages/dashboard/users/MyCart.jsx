import useCart from "../../../hooks/useCart";

const MyCart = () => {
  const [cart] = useCart();
  return (
    <div>
      <h3>Total ordered: {cart.length}</h3>
    </div>
  );
};

export default MyCart;

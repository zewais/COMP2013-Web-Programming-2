import CartCard from "./CartCard";

export default function CartContainer({ cart, handleRemoveFromCart }) {
  return (
    <div className="CartContainer">
      {cart.map((item) => (
        <CartCard
          key={item.id}
          {...item}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      ))}
    </div>
  );
}

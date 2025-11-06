import CartCard from "./CartCard";

export default function CartCardsContainer({ cart }) {
  return (
    <div>
      {cart.map((item) => (
        <CartCard key={item.id} {...item} />
      ))}
    </div>
  );
}

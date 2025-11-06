export default function CartCard({ product, quantity, currentPrice }) {
  return (
    <div>
      <h3>{product}</h3>
      <p>Quantity: {quantity}</p>
      <p>Price: {currentPrice}</p>
      <p>
        <b>Total: {currentPrice * quantity}</b>
      </p>
    </div>
  );
}

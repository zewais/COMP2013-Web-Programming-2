export default function CartCard({
  id,
  product,
  quantity,
  currentPrice,
  handleRemoveFromCart,
}) {
  return (
    <div className="CartCard">
      <h2>{product}</h2>
      <p>Quantity: {quantity}</p>
      <p>Total Price: ${(quantity * currentPrice).toFixed(2)}</p>
      <button
        onClick={() => {
          handleRemoveFromCart({ id, product, quantity, currentPrice });
        }}
      >
        Remove Item
      </button>
    </div>
  );
}

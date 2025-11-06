export default function ProductCard({
  productQuantity,
  img,
  product,
  handleOnChangePrice,
  handleAddToQuantity,
  handleRemoveQuantity,
  handleAddToCart,
}) {
  //Building our output
  return (
    <div className="ProductCard">
      <img src={img} alt="" height="100px" />
      <h3>{product}</h3>
      <p>Quantity: {productQuantity.quantity}</p>
      <select
        value={productQuantity.currentPrice}
        onChange={(e) => {
          handleOnChangePrice(productQuantity.id, e);
        }}
      >
        {productQuantity.priceOptions.map((price, index) => (
          <option key={index} value={price}>
            {price.toFixed(2)}
          </option>
        ))}
      </select>
      <p>
        Total Price: $
        {(productQuantity.quantity * productQuantity.currentPrice).toFixed(2)}
      </p>

      <button onClick={() => handleAddToQuantity(productQuantity.id)}>
        Add
      </button>
      <button onClick={() => handleRemoveQuantity(productQuantity.id)}>
        Remove
      </button>

      <button onClick={() => handleAddToCart(productQuantity)}>
        Add to Cart
      </button>
    </div>
  );
}

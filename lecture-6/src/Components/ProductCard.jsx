import data from "../data/data";
const testProduct = data[0]; //import data for testing

export default function ProductCard({
  product = testProduct.product, //adding default values incase data is not provided so the app won't break
  priceOptions = testProduct.priceOptions,
  img = testProduct.img,
  // quantity = testProduct.quantity,
  productQuantity,
  handleOnChangePrice,
  handleAddToQuantity,
  handleRemoveQuantity,
}) {
  //Building our output
  return (
    <div className="ProductCard">
      <img src={img} alt="" height="100px" />

      <h3>{product}</h3>

      <p>Quantity: {productQuantity.quantity}</p>

      <select
        value={productQuantity.priceOptions}
        onChange={(e) => handleOnChangePrice(productQuantity.id, e)}
      >
        {priceOptions.map((price, index) => (
          <option key={index} value={price}>
            {price.toFixed(2)}
          </option>
        ))}
      </select>
      {/* display the total price */}
      <p>
        Total Price: $
        {(productQuantity.quantity * productQuantity.priceOptions).toFixed(2)}
      </p>

      {/* button to add quantity */}
      <button onClick={() => handleAddToQuantity(productQuantity.id)}>
        Add
      </button>
      {/* button to remove quantity */}
      <button onClick={() => handleRemoveQuantity(productQuantity.id)}>
        Remove
      </button>
    </div>
  );
}

import { useState } from "react";
import ProductsCardsContainer from "./ProductCardsContainer";

export default function ProductsApp({ data }) {
  const [productQuantity, setProductQuantity] = useState(
    data.map((product) => {
      //   console.log(product);
      return {
        id: product.id,
        quantity: product.quantity,
        priceOptions: product.priceOptions[0],
      };
    })
  );

  //This function will handle the price changes in the select menu
  const handleOnChangePrice = (productID, e) => {
    //create a new array to return from the old array
    const newProductQuantity = productQuantity.map((prod) => {
      //if the product id is the same as the one offered as an argument
      //then this is the one we need to change
      if (prod.id === productID) {
        return { ...prod, priceOptions: e.target.value };
      }
      //return the array after modification
      return prod;
    });
    //set the product quantity with the new array the function created
    setProductQuantity(newProductQuantity);
    return;
  };

  //This function will handle the add to quantity
  //Same logic as previous handler
  const handleAddToQuantity = (productID) => {
    const newProductQuantity = productQuantity.map((prod) => {
      if (prod.id === productID) {
        return { ...prod, quantity: prod.quantity + 1 };
      }
      return prod;
    });
    setProductQuantity(newProductQuantity);
    return;
  };

  //This function will handle the remove of quantity
  const handleRemoveQuantity = (productID) => {
    const newProductQuantity = productQuantity.map((prod) => {
      if (prod.id === productID && prod.quantity > 0) {
        return { ...prod, quantity: prod.quantity - 1 };
      }
      return prod;
    });
    setProductQuantity(newProductQuantity);
    return;
  };

  return (
    <div>
      <ProductsCardsContainer
        data={data}
        productQuantity={productQuantity}
        setProductQuantity={setProductQuantity}
        handleOnChangePrice={handleOnChangePrice}
        handleAddToQuantity={handleAddToQuantity}
        handleRemoveQuantity={handleRemoveQuantity}
      />
    </div>
  );
}

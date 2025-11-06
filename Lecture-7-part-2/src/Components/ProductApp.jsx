import { useState } from "react";
import ProductCardsContainer from "./ProductCardsContainer";
import CartCardsContainer from "./CartCardsContainer";

export default function ProductApp({ data }) {
  const [productQuantity, setProductQuantity] = useState(
    data.map((prod) => {
      return {
        id: prod.id,
        quantity: prod.quantity,
        priceOptions: prod.priceOptions,
        currentPrice: prod.priceOptions[0],
      };
    })
  );

  const [cart, setCart] = useState([]);
  console.log(cart);
  //this function will handle the select menu and options
  //when the user clicks on a price, the price will be stored into currentPrice property
  //inside the state that belongs to the card with the same id
  const handleOnChangePrice = (productId, e) => {
    const newProductQuantity = productQuantity.map((prod) => {
      if (prod.id === productId) {
        return { ...prod, currentPrice: e.target.value };
      }
      return prod;
    });
    setProductQuantity(newProductQuantity);
    return;
  };

  //This function will handle the add to quantity button on click event
  //When the user clicks the add button, the quantity will add one to the quantity
  //property in the state of the card that has the same id
  const handleAddToQuantity = (productId) => {
    const newProductQuantity = productQuantity.map((prod) => {
      if (prod.id === productId) {
        return { ...prod, quantity: prod.quantity + 1 };
      }
      return prod;
    });
    setProductQuantity(newProductQuantity);
    return;
  };
  //This function will handle the remove of quantity from the state using the on click event
  const handleRemoveQuantity = (productId) => {
    const newProductQuantity = productQuantity.map((prod) => {
      if (prod.id === productId && prod.quantity > 0) {
        return { ...prod, quantity: prod.quantity - 1 };
      }
      return prod;
    });
    setProductQuantity(newProductQuantity);
    return;
  };

  //This function will handle adding a product to a cart.
  //Each addition will take the product, quantity and total
  const handleAddToCart = (productToAdd) => {
    const product = data.find((prod) => prod.id === productToAdd.id);
    const productInCart = cart.find((prod) => prod.id === productToAdd.id);

    if (productToAdd.quantity === 0) {
      alert("Please add quantity before adding to cart!");
      return;
    }
    if (!productInCart) {
      //set the cart state
      setCart((prevCart) => {
        return [
          ...prevCart,
          {
            ...product,
            quantity: productToAdd.quantity,
            currentPrice: parseFloat(productToAdd.currentPrice),
          },
        ];
      });
    } else {
      alert("Product already in cart!");
    }

    return;
  };

  return (
    <div>
      <div>
        <ProductCardsContainer
          data={data}
          productQuantity={productQuantity}
          handleOnChangePrice={handleOnChangePrice}
          handleAddToQuantity={handleAddToQuantity}
          handleRemoveQuantity={handleRemoveQuantity}
          handleAddToCart={handleAddToCart}
        />
      </div>
      <div>
        <h2>Cart</h2>
        <CartCardsContainer cart={cart} />
      </div>
    </div>
  );
}

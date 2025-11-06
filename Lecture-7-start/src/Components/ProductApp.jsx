import { useState } from "react";
import ProductCardsContainer from "./ProductCardsContainer";
import CartContainer from "./CartContainer";

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

  //new state for the cart which starts as an empty array
  const [cart, setCart] = useState([]);

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

  //todo list
  //1. click on the button and add the product to the cart if the product is not there first
  //2. if the product is there, we will post an alert say item already exist
  //3. if the user adds to cart but the quantity is zero, send another alert saying please add quantity first
  const handleAddToCart = (productToAdd) => {
    const currentProduct = data.find((prod) => prod.id === productToAdd.id);
    //to check if it is in the cart already
    const productInCart = cart.find((item) => item.id === productToAdd.id);
    if (productToAdd.quantity === 0) {
      alert("Please add quantity before adding to cart!");
      return;
    }

    if (!productInCart) {
      setCart((prevCart) => {
        return [
          ...prevCart,
          {
            ...currentProduct,
            quantity: productToAdd.quantity,
            currentPrice: productToAdd.currentPrice,
          },
        ];
      });
    } else {
      alert("Item already exist in cart!");
    }
  };

  //This function will remove selected items from the cart

  const handleRemoveFromCart = (cartItem) => {
    const filteredCart = cart.filter((item) => item.id !== cartItem.id);
    setCart(filteredCart);
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
        <h1>Cart</h1>
        <p>{cart.length === 0 && "Cart is empty!"}</p>
        <CartContainer
          cart={cart}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      </div>
    </div>
  );
}

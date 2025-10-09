import "./App.css";
import ProductCard from "./Components/ProductCard";
import ProductCardsContainer from "./Components/ProductCardsContainer";
import data from "./data/data";

function App() {
  return (
    <>
      <ProductCardsContainer data={data} />
    </>
  );
}

export default App;

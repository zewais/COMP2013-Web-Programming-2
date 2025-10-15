import "./App.css";
import ProductCard from "./Components/ProductCard";
import ProductCardsContainer from "./Components/ProductCardsContainer";
import ProductsApp from "./Components/productsApp";
import data from "./data/data";

function App() {
  return (
    <>
      <ProductsApp data={data} />
    </>
  );
}

export default App;

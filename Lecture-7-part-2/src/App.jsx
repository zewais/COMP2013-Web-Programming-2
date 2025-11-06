import "./App.css";
import ProductApp from "./Components/ProductApp";
import data from "./data/data";

function App() {
  return (
    <>
      <ProductApp data={data} />
    </>
  );
}

export default App;

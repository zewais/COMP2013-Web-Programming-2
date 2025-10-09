import "./App.css";
import Clicker from "./Components/Clicker";
import ClickerWithProps from "./Components/ClickerWithProps";
import EmptyForm from "./Components/EmptyForm";
import ListingContainer from "./Components/ListingsContainer";
import data from "./data/data";

function App() {
  return (
    <>
      <h1>Resorts Lite</h1>
      <ListingContainer items={data} />
      <br />
      <Clicker />
      <EmptyForm />
      <ClickerWithProps
        message={"This is a clicker message as a prop"}
        btnText={"Click Me for Message"}
      />
      <ClickerWithProps
        message={"This is another message for another clicker component"}
        btnText={"Clicker 2"}
      />
    </>
  );
}

export default App;

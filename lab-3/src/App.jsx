import "./App.css";
import colors from "./data/data";
import ColorBox from "./Components/ColorBox";
import ColorBoxesContainer from "./Components/ColorBoxesContainer";

function App() {
  return (
    <>
      <ColorBoxesContainer colors={colors} />
    </>
  );
}

export default App;

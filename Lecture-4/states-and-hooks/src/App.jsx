import { useState } from "react";
import "./App.css";
import BadCounter from "./Components/BadCounter";
import ColorBox from "./Components/ColorBox";
import Counter from "./Components/Counter";
import CounterWithLimits from "./Components/CounterWithLimits";
import EmojiStore from "./Components/EmojiStore";
import Toggle from "./Components/toggle";
import data from "./data/data";
import ColorBoxesContainer from "./Components/ColorBoxContainer";

function getRandomNumber(numItems) {
  return Math.floor(Math.random() * numItems);
}

function App() {
  const numItems = 25;
  const [randomNumber, setRandomNumber] = useState(getRandomNumber(numItems));
  return (
    <>
      {/* <BadCounter />
      <Counter />
      <CounterWithLimits />
      <Toggle /> */}
      {/* <EmojiStore /> */}
      {/* <ColorBox colors={data} /> */}

      {/* <div
        className="RandomNumber"
        onClick={() => setRandomNumber(getRandomNumber(numItems))}
        style={{ backgroundColor: data[randomNumber] }}
      >
        {randomNumber}
      </div> */}
      <ColorBoxesContainer colors={data} />
    </>
  );
}

export default App;

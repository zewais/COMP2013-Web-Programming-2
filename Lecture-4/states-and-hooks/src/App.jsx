import "./App.css";
import BadCounter from "./Components/BadCounter";
import Counter from "./Components/Counter";
import CounterWithLimits from "./Components/CounterWithLimits";

function App() {
  return (
    <>
      <BadCounter />
      <Counter />
      <CounterWithLimits />
    </>
  );
}

export default App;

import { useState } from "react";
export default function Counter() {
  //we define the varible and setter funtion then we assign useState to then
  //and add the initial value for the variable as a argument for the useState function

  let initialState = 2000;
  const [counter, setCounter] = useState(initialState);

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Add to counter</button>
      <button onClick={() => setCounter(counter - 1)}>
        Subtract to counter
      </button>
      <button onClick={() => setCounter(initialState)}>Reset</button>
    </div>
  );
}

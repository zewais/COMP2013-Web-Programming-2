import ColorBox from "./ColorBox";
import { useState } from "react";

export default function ColorBoxesContainer({ colors }) {
  const [btnToggle, setBtnToggle] = useState(true);
  return (
    <div className="mainContainer">
      <div className="ColorBoxesContainer">
        {colors.map((color, index) => (
          <ColorBox
            colors={colors}
            key={index}
            singleColor={color}
            colorsType={btnToggle}
          />
        ))}
      </div>
      <div className="btnsContainer">
        <button onClick={() => setBtnToggle(true)}>Random Colors</button>
        <button onClick={() => setBtnToggle(false)}>Harmonized Colors</button>
      </div>
    </div>
  );
}

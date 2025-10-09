import { useState } from "react";

const getRandomColor = (colors) => {
  return colors[Math.floor(Math.random() * colors.length)];
};

export default function ColorBox({ colors, colorsType, singleColor }) {
  const [color, setColor] = useState(getRandomColor(colors));
  if (colorsType) {
    return (
      <div
        className="ColorBox"
        style={{ backgroundColor: color }}
        onClick={() => setColor(getRandomColor(colors))}
      ></div>
    );
  } else {
    return (
      <div className="ColorBox" style={{ backgroundColor: singleColor }}></div>
    );
  }
}

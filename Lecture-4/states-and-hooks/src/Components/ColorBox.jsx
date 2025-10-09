import { useState } from "react";

//random color generator
function getRandomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

export default function ColorBox({ colors }) {
  const [color, setColor] = useState(getRandomColor(colors));
  //onclick function to change color
  //style is in App.css color-box
  //return div with style and onclick
  return (
    <div
      className="color-box"
      style={{ backgroundColor: color }}
      onClick={() => setColor(getRandomColor(colors))}
    ></div>
  );
}

// import ColorBox from "./ColorBox";

// export default function ColorBoxesContainer({ colors }) {
//   return (
//     <div className="ColorBoxesContainer">
//       {colors.map((color, index) => (
//         <ColorBox key={index} color={color} />
//       ))}
//     </div>
//   );
// }

import ColorBox from "./ColorBox";

export default function ColorBoxContainer({ colors }) {
  return (
    <div className="color-box-container">
      {colors.map((color, index) => (
        <ColorBox colors={colors} key={index} />
      ))}
    </div>
  );
}

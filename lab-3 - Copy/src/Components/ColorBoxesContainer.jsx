import ColorBox from "./ColorBox";

export default function ColorBoxesContainer({ colors }){
    return (
        <div
        style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 50px)"
        }}>
            {colors.map((c,i) => (
                <ColorBox key={i} color={c} />
            ))}

        </div>
    );
}
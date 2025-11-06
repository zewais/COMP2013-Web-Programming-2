import {useState} from "react";

export default function ColorBox({ color }) {
    const [currentColor, setCurrentColor] = useState(color);

    const getRandomColor = () => {
        const letters = "0123456789ABCDEF";
        let newColor = "#";
        for (let i = 0; i <6; i++){
            newColor += letters[Math.floor(Math.random() * 16)];
        }
        return newColor;
    };
    const handleClick = () => {
        setCurrentColor(getRandomColor());
    };
    return (
        <div
            onClick={handleClick}
            style={{backgroundColor: currentColor,
                width: "50px",
                height: "50px",
                cursor: "pointer",
            }}
        ></div>
    );
}
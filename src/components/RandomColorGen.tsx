import { useState } from "react";
import { colorsArr } from "../scripts";

const RandomColorGen = () => {
  const [index, setIndex] = useState(1);
  const [mode, setMode] = useState("HEX");

  const changeColor = () => {
    setIndex(Math.floor(Math.random() * colorsArr.length));
  };

  return (
    <div
      className="text-amber-400 h-screen duration-500"
      style={
        mode === "HEX"
          ? { background: colorsArr[index].hexCode }
          : { background: colorsArr[index].rgbCode }
      }
    >
      <div className="grid md:grid-cols-3">
        <button
          className="cursor-pointer px-3 py-2 border-r-3 border-b-3"
          onClick={() => setMode("HEX")}
        >
          Change HEX color
        </button>
        <button
          className="border-t-3 border-b-3 md:border-b-0 cursor-pointer px-3 py-2"
          onClick={() => setMode("rgb")}
        >
          Change RGB color
        </button>
        <button
          className="border-b-3 border-l-3 cursor-pointer px-3 py-2"
          onClick={changeColor}
        >
          Genearate new color
        </button>
      </div>
      <div className="absolute top-1/2 left-1/2 transform -translate-1/2">
        <h1 className="lg:text-9xl md:text-7xl uppercase font-extrabold text-5xl text-center">
          {mode}
        </h1>
        <p className="lg:text-6xl md:text-4xl uppercase font-bold mt-4 text-3xl text-center">
          {mode === "HEX" ? colorsArr[index].hexCode : colorsArr[index].rgbCode}
        </p>
      </div>
    </div>
  );
};

export default RandomColorGen;

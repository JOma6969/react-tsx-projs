import { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const LightDarkTheme: React.FC = () => {
  
  const [currTheme, setCurrTheme] = useState(localStorage.getItem("theme") === "dark"); // check if the theme is in dark theme and set the boolean answer to the "currTheme" variable
  
  // access setter from the custom hook
  const setter = useLocalStorage();

  // function to call when the btn is clicked
  const handleClick = () => { 
    setter?.(currTheme ? "light" : "dark") // check if the currTheme is true. If so, change it to light. Else, change it to dark theme
    setCurrTheme(localStorage.getItem("theme") === "dark"); // check the theme after changing it by the setter function
  }

  return (
    <div
      className={`${
        currTheme ? "bg-black text-white" : "bg-white text-black"
      } h-screen w-screen transition-all duration-500`}
    >
      <h1>Hello, There!</h1>
      <button
        className="border p-2"
        onClick={handleClick} // handleClick = function to handle setting the theme and saving it to localStorage
      >
        Change Theme
      </button>
    </div>
  );
};

export default LightDarkTheme;

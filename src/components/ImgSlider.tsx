import { useState } from "react";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { ImgArr } from "../scripts";

const ImgSlider = () => {
  const [index, setIndex] = useState(0);
  const incrementIndex = () =>
    setIndex((prev) => (prev < ImgArr.length - 1 ? prev + 1 : 0));
  const decrementIndex = () =>
    setIndex((prev) => (prev - 1 >= 0 ? prev - 1 : ImgArr.length - 1));

  return (
    <div className="absolute top-1/2 w-[90%] lg:w-auto left-1/2 transform -translate-1/2">
      <h1 className="lg:text-5xl z-50 font-bold tracking-[3px] text-center">
        Image Slider.
      </h1>
      <div className="mt-10 relative">
        <img src={ImgArr[index]} className="lg:w-120 w-full h-70 object-cover" alt="" />
        <button
          onClick={incrementIndex}
          className="shadow-lg size-10 rounded-full absolute top-1/2 bg-white right-[-15px] flex items-center justify-center cursor-pointer z-50 transform -translate-y-1/2"
        >
          <FaChevronRight />
        </button>
        <button onClick={decrementIndex} className="shadow-lg size-10 rounded-full absolute top-1/2 bg-white left-[-15px] flex items-center justify-center cursor-pointer z-50 transform -translate-y-1/2">
        <FaChevronLeft /></button>
      </div>
    </div>
  );
};

export default ImgSlider;

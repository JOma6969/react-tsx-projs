import { useState } from "react";
import { FaStar } from "react-icons/fa";

const StarRating = () => {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0)

  const handleHover = (i: number) => {
    setIndex(i)
    setPrevIndex(index)
  } 
  const handleMouseLeave = () => {
    setIndex(prevIndex)
  } 

  return (
    <div className="flex flex-col justify-center gap-3 h-screen items-center">
      <h1 className="lg:text-5xl text-3xl font-extrabold mb-4">Star Rating.</h1>
      <div className="flex gap-3 items-center">
        {[...Array(5)].map((_, i) => {
          i += 1;
          return (
            <FaStar
              size={40}
              key={i}
              className={`${i <= index ? "text-yellow-400" : "text-gray-700"} cursor-pointer`}
              onMouseEnter={() => handleHover(i)}
              onClick={() => handleHover(i)}
              onMouseLeave={handleMouseLeave}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StarRating;

import { useLayoutEffect, useState } from "react";

const useResizeHook = () => {
  const [windowSize, setWindowSize] = useState({ w: 0, y: 0 });

  useLayoutEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function handleResize() {
    setWindowSize({ w: window.innerWidth, y: window.innerHeight });
  }

  return windowSize;
};

export default useResizeHook;
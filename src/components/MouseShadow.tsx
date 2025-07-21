import { useEffect, useState } from "react";

const MouseShadow = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="fixed hidden lg:block inset-0 pointer-events-none z-50"
      style={{
        background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(0, 0, 0, 0.8), transparent 10px)`,
      }}
    />
  );
};

export default MouseShadow;

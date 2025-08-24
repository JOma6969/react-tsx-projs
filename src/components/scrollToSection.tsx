import { useRef } from "react";

const ScrollToSection = () => {
  const ref = useRef<HTMLDivElement>(null);

  const data = [
    {
      label: "First Card",
      bg: "bg-red-600",
    },
    {
      label: "Second Card",
      bg: "bg-red-700",
    },
    {
      label: "Third Card",
      bg: "bg-red-800",
    },
    {
      label: "Fourth Card",
      bg: "bg-red-900",
    },
    {
      label: "Fifth Card",
      bg: "bg-red-950",
    },
  ];

  function handleSecScroll () {
    // ref.current?.scrollIntoView({
    //   behavior: "smooth"
    // })

    const pos = ref.current?.getBoundingClientRect().top; // what is the use of the getBoundingClientRect() ? & what is the diff between getBoundingClientRect() and scrollIntoView({}).
    window.scrollTo({
      top: pos,
      behavior: "smooth"
    })
  }

  return (
    <div>
      <h1 className="lg:text-4xl text-md font-bold my-3 text-center">Scroll to a section of the page.</h1>
      <button onClick={handleSecScroll} className="px-3 py-1 block mx-auto border mb-4 mt-5 rounded cursor-pointer">Click to Scroll!</button>
      {data.map((item, i) => (
        <div
          key={i}
          className={`h-150 w-full ${item.bg} text-white text-center pt-3`}
          ref={i === 4 ? ref : null}
        >
          {item.label} ...
        </div>
      ))}
    </div>
  );
};

export default ScrollToSection;

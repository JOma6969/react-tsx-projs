import { useRef } from "react";

const Scroll = () => {
  const bottom = useRef<null | HTMLButtonElement>(null);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  function scrollToBottom() {
    bottom.current?.scrollIntoView({
      behavior: "smooth",
    });
    // if (bottom.current?.checkVisibility()) {
    //   alert("Now is the time for it!")
    // }
  }

  return (
    <div className="flex items-center flex-col">
      <h1 className="mt-10 font-bold text-lg lg:text-5xl">
        Scroll To Top And Bottom.
      </h1>
      <p className="mt-3">This is the top of the page!</p>
      <button
        onClick={scrollToBottom}
        className="my-4 border px-3 py-1 cursor-pointer"
      >
        Scroll To bottom
      </button>
      {[...Array(100)].map((_, i) => (
        <p key={i} className="pointer-events-none">
          Hello, There!
        </p>
      ))}
      <p className="mt-3">This is the bottom of the page!</p>
      <button
        ref={bottom}
        onClick={scrollToTop}
        className="my-4 border px-3 py-1 cursor-pointer"
      >
        Scroll To Top
      </button>
    </div>
  );
};

export default Scroll;

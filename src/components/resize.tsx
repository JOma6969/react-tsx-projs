import useResizeHook from "../hooks/useResizeHook";

const Resize = () => {
  const windowSize = useResizeHook();
  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <h1 className="text-3xl lg:text-5xl capitalize ">The window size</h1>
      <div className="mt-8 text-lg lg:text-xl flex flex-col gap-4">
        <p>Width: {windowSize.w}px</p>
        <p>Height: {windowSize.y}px</p>
      </div>
    </div>
  );
};

export default Resize;

import { useRef, useState } from "react";

const AutocompleteSearch = () => {
  const DummyUsersArr: string[] = [
    "John Doe",
    "Joseph Cambell",
    "Judicial Jerry",
    "Marry Will-Mitchelle",
    "Joose Sparkle-tooth",
  ];

  const [inpVal, setInpVal] = useState<string>("");
  const [shouldShow, setShouldShow] = useState<boolean>(false);
  const inpRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col items-center w-full justify-center h-screen">
      <h1 className="text-2xl text-center tracking-[2px] font-bold lg:text-5xl">Life Auto-Search WebApp.</h1>

      <input
        type="text"
        placeholder="input anythingg!!"
        className="outline-none border-2 px-1 rounded-sm my-4"
        value={inpVal}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setInpVal(e.target.value)
        }
        ref={inpRef}
        onFocus={() => setShouldShow(true)}
        onBlur={() => setShouldShow(false)}
      />

      <div>
        <div className="w-screen">
          {shouldShow && DummyUsersArr.filter((item) =>
              item.toLowerCase().startsWith(inpVal.toLowerCase())
            ).map((item, i) => (
              <p
                onMouseDown={() => {
                  setInpVal(item);
                  setShouldShow(false);
                }}
                className="cursor-pointer w-[90%] py-1.5 mx-auto rounded-sm sm:w-[500px] bg-black text-white mb-2 text-center"
                key={i}
              >
                {item}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AutocompleteSearch;

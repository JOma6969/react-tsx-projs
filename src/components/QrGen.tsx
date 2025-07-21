import QRCode from "react-qr-code";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import { useState } from "react";

const QrGen = () => {

  const [val, setVal] = useState<string>("");
  const [inpVal, setInpVal] = useState<string>("");

  const handleValChange = () => {
    if(!inpVal.trim()) return;
    setVal(inpVal);
    setInpVal("")
  }

  const handleSub = (eventKey: React.KeyboardEvent<HTMLInputElement>) => {
    if(eventKey.key === "Enter") {
      handleValChange()
    }
  }

  return (
    <div className="flex h-screen w-screen flex-col justify-center items-center">
      <h1 className="lg:text-5xl text-3xl font-bold">QR Code Generator.</h1>
      <div className="mt-6 flex flex-col max-lg:flex-col-reverse">
        <QRCode value={val} />
        <div className="border-2 w-full px-2 gap-3 rounded-md mt-3 max-lg:mb-3 max-lg:mt-0 flex items-center">
          <input
            type="text"
            className="outline-none py-1 w-full placeholder:text-sm"
            placeholder="Enter text..."
            onKeyDown={handleSub}
            value={inpVal}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInpVal(e.target.value)}
          />
          <div className="hover:bg-gray-200 h-8 flex items-center justify-center w-10 my-1 rounded-md hover:text-green-600 cursor-pointer" onClick={handleValChange}>
            <FaArrowUpFromBracket />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QrGen;

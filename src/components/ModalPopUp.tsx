import { useState } from "react";

const ModalPopUp = () => {
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {isModalVisible && (
        <ModalComponent setIsModalVisible={setIsModalVisible} />
      )}
      <h1 className="text-3xl lg:text-5xl text-center font-bold">
        Modal Pop-Up
      </h1>
      <button
        onClick={() => setIsModalVisible(true)}
        className="border-2 cursor-pointer rounded-lg px-4 h-[40px] mt-10 hover:bg-green-700 hover:border-green-700 hover:font-bold transition-all duration-500 hover:text-white"
      >
        Open Modal.
      </button>
    </div>
  );
};

const ModalComponent: React.FC<{
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ setIsModalVisible }) => (
  <div className="absolute backdrop-blur-lg h-screen w-full">
    <div className="modal absolute transform -translate-1/2 top-1/2 left-1/2 shadow-lg rounded-4xl w-[90%] sm:w-[500px] py-10 bg-white">
      <h1 className="text-center text-4xl mb-3 font-semibold">Modal Here.</h1>
      <button
        className="border rounded-xs cursor-pointer overflow-hidden block mx-auto"
        onClick={() => setIsModalVisible(false)}
      >
        <p className="transform px-3 py-1 -translate-x-1/10 hover:translate-0 transition-all hover:text-white hover:bg-red-700 w-full h-full">Close Modal</p>
      </button>
    </div>
  </div>
);

export default ModalPopUp;

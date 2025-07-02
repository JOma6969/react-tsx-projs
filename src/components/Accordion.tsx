import { useState } from "react";
import { Accordion_Data, type Accordion } from "../scripts";

const Accordion = () => {
  const [enableMultiple, setEnableMultiple] = useState<boolean>(false);
  const [accordionData, setAccordionData] =
    useState<Accordion[]>(Accordion_Data);

  const handleQuestionClick = (question_index: number) => {
    if (!enableMultiple) {
      setAccordionData((prev: Accordion[]) => {
        return prev.map((prevItem) =>
          prevItem.id === accordionData[question_index].id &&
          prevItem.isShowing === false
            ? { ...prevItem, isShowing: true }
            : { ...prevItem, isShowing: false }
        );
      });
    } else {
      setAccordionData((prev: Accordion[]) => {
        return prev.map((prevItem) => {
          if (prevItem.id === accordionData[question_index].id) {
            if (prevItem.isShowing === false) {
              return { ...prevItem, isShowing: true };
            } else {
              return { ...prevItem, isShowing: false };
            }
          } else {
            return { ...prevItem };
          }
        });
      });
    }
  };

  return (
    <div className="bg-amber-950 h-screen">
      <h1 className="text-4xl font-bold text-center py-[50px] text-white">Accordion.</h1>
      <button onClick={() => setEnableMultiple((prev) => !prev)} className="block bg-amber-700 px-5 py-2 text-white rounded-xl mx-auto">
        {enableMultiple ? "Disable" : "Enable"} Multiple Selection
      </button>

      {accordionData.map((item, i) => (
        <div
          key={i}
          onClick={() => handleQuestionClick(i)}
          className="cursor-pointer w-[90%] sm:w-[400px] block bg-amber-700 mt-5 px-5 py-2 text-white rounded-[5px] mx-auto"
        >
          <p>{item.question}</p>
          {item.isShowing && <p>{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;

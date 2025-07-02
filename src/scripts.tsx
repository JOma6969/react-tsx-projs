export interface Accordion {
  id: number;
  question: string;
  isShowing: boolean;
  answer: string;  
}

export const Accordion_Data: Accordion[] = [
  {
    id: 1,
    question: "Why was this made?",
    isShowing: false,
    answer: "To check if i could make it."
  },
  {
    id: 2,
    question: "When was this made?",
    isShowing: false,
    answer: "July 1st, 2025"
  },
  {
    id: 3,
    question: "What is the name of the Accordion?",
    isShowing: false,
    answer: "Accordy..."
  }
]

export interface colors {
  hexCode: string;
  rgbCode: string;
}

export const colorsArr: colors[] = [
  {
    hexCode: "#ffffff",
    rgbCode: "rgb(255, 251, 251)"
  },
  {
    hexCode: "#000000",
    rgbCode: "rgb(0, 0, 0)"
  }, 
  {
    hexCode: "#FF0000",
    rgbCode: "rgb(255, 0, 0)"
  }, 
  {
    hexCode: "#00ff00",
    rgbCode: "rgb(0, 255, 0)"
  }, 
  {
    hexCode: "#1500fc",
    rgbCode: "rgb(0, 0, 255)"
  }, 
]
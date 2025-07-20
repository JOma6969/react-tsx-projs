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
    answer: "To check if i could make it.",
  },
  {
    id: 2,
    question: "When was this made?",
    isShowing: false,
    answer: "July 1st, 2025",
  },
  {
    id: 3,
    question: "What is the name of the Accordion?",
    isShowing: false,
    answer: "Accordy...",
  },
];

export interface colors {
  hexCode: string;
  rgbCode: string;
}

export const colorsArr: colors[] = [
  {
    hexCode: "#ffffff",
    rgbCode: "rgb(255, 251, 251)",
  },
  {
    hexCode: "#000000",
    rgbCode: "rgb(0, 0, 0)",
  },
  {
    hexCode: "#FF0000",
    rgbCode: "rgb(255, 0, 0)",
  },
  {
    hexCode: "#00ff00",
    rgbCode: "rgb(0, 255, 0)",
  },
  {
    hexCode: "#1500fc",
    rgbCode: "rgb(0, 0, 255)",
  },
];

export const ImgArr: string[] = [
  "https://media.istockphoto.com/id/1202957718/photo/macbook-pro-16-inch-with-touchbar-focus-on-macbook-pro-logo.jpg?s=612x612&w=0&k=20&c=fzb-Ux04y_KFGK1lKz8lLSH544PvAiqFaHe3monLfbc=",

  "https://cdn.pixabay.com/photo/2016/10/12/13/32/office-1734485_640.jpg",

  "https://media.gettyimages.com/id/1243275868/photo/a-2021-apple-macbook-pro-laptop-computer-taken-on-november-26-2021.jpg?s=612x612&w=0&k=20&c=jlLOOi9jju3kTq4x8GYocIzRJWIPQfF0VEVZMrenTN4=",
];

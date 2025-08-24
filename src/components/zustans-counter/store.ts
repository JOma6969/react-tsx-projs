// first thing to do when creating a store in zustand is to import the create function from zustand
import { create } from "zustand";

type CartStore = {
  cart: string[];
  addToCart: (name: string) => void;
  removeFromCart: (name: string) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  addToCart: (name: string) => {
    set((state) => ({ cart: [...state.cart, name] }));
  },
  removeFromCart: (name: string) => {
    set((state) => ({
      cart: [...state.cart].filter((prodName) => prodName !== name),
    }));
  },
}));

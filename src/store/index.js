import { useContext } from "react";
import { createContext } from "react";

const BooksContext = createContext();

export const useStore = () => useContext(BooksContext);

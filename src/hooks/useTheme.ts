import { useContext } from "react";
import { ThemeContext } from "../context/ThmeContext";

export const useTheme = () => useContext(ThemeContext);

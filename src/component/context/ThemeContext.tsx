import React, { createContext } from "react";
import { theme } from "./theme";

export const ThemeContext = createContext(theme);
interface ThemeContextProviderProps{
    children:React.ReactNode
}
export const ThemeContextProvider:React.FC<ThemeContextProviderProps> = 
(props)=>{
    const {children} = props;
    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}
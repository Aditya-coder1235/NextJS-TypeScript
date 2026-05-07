import { createContext, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
    theme: Theme;
    toggle: () => void;
};

export const ThemeContext=createContext<ThemeContextType | null>(null);

type ThemeProviderProps={
    children:React.ReactNode;
}

export const ThemeProvider=({Children}:ThemeProviderProps)=>{
    const [theme,setTheme]=useState<"dark" | "light">("light")

    const toggle=()=>{
        setTheme((prev)=>prev==="light" ? "dark" : "light")
    }

    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            {Children}
        </ThemeContext.Provider>
    );  
}

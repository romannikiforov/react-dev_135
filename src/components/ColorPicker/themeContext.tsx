import React from "react";

export type Theme = {
    backgroundColor: string;
    color: string;
    padding: string;
}

/* export type Themes = {
    [key: string]: Theme
}; */


// export type Themes = Record<string, React.CSSProperties>

export type Themes = Record<string, Theme>


const defaultTheme: Themes = {
    darkMode: { backgroundColor: "#555", color: "white", padding: "20px" },
    lightMode: { backgroundColor: "#ffffff", color: "black", padding: "20px" },
}

const ThemeContext = React.createContext(defaultTheme);

export const ThemeContextProvider = ({ children }: { children: React.ReactNode }) => {
    return <ThemeContext.Provider value={defaultTheme}>
        {children}
    </ThemeContext.Provider>

}

export default ThemeContext
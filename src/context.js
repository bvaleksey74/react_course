import {createContext} from "react";

export const themes = {
    light: {
        background: 'white',
        color: 'black'
    },
    dark: {
        background: 'black',
        color: 'white'
    }
}

export const ThemeContext = createContext({
    themes: themes.light, toggleTheme: () => {
    }
})
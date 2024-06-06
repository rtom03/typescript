import { createContext } from "react";
import { theme } from "./Theme";


type CreateContextProviderProps = {
    children:React.ReactNode;
}
export const ThemeContext = createContext(theme)


export const ThemeContextProvider = ({children}:CreateContextProviderProps) => {

      return(
          <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
      )
}
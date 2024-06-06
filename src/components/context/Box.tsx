import { useContext } from "react"
import { theme } from "./Theme"
import { ThemeContext } from "./ThemeContext"


export const Box = () => {
    const theme= useContext(ThemeContext)
    return(
        <div style={{background:theme.primary.main}}>
            <h1 style={{color:theme.primary.text}}>Hello World!</h1>
        </div>
    )
}
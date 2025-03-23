import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

export const Box:React.FC=()=>{
    const {primary,secondary} = useContext(ThemeContext)
    return (
        <section>
            <div style={{backgroundColor:primary.main}}>{primary.text}</div>
            <div style={{backgroundColor:secondary.main}}>{secondary.text}</div>
        </section>
        
    )
}   
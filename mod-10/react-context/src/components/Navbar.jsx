import { useContext } from "react"
import { ThemeContext } from "../App"

export default function Navbar() {

    // Step 3: Consume the context value (use the useContext hook)
    const { theme, toggleTheme } = useContext(ThemeContext)

    const style = {
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white',
        border: theme === 'light' ? '1px solid black' : '1px solid white'
    }

    return (
        <div style={style}>
            Navbar
            <div>
                <button onClick={toggleTheme}>Toggle</button>
            </div>
        </div>
    )
}
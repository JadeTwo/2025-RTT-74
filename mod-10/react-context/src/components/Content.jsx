import { useContext } from "react"
import { ThemeContext } from "../AppProviders"


function Content() {

    // Step 3: Consume the context value (using the useContext hook)
    const { theme } = useContext(ThemeContext)

    const style = {
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white',
        border: theme === 'light' ? '1px solid black' : '1px solid white'
    }

    return (
        <div style={style}>
            Content
        </div>
    )
}

export default Content
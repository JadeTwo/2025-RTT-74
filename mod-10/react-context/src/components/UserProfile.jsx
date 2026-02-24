import { useContext } from "react"
import { ThemeContext, UserContext } from "../AppProviders"

function UserProfile() {

    // Step 3: Consume the context
    const { currentUser } = useContext(UserContext)
    const { theme } = useContext(ThemeContext)

    const style = {
        backgroundColor: theme === 'light' ? 'white' : 'black',
        color: theme === 'light' ? 'black' : 'white',
        border: theme === 'light' ? '1px solid black' : '1px solid white'
    }

    return (
        <div style={style}>
            {currentUser ?
                <p>
                    Welcome {currentUser.name}!
                </p>
                :
                <p>
                    Please login
                </p>
            }
        </div>
    )
}

export default UserProfile
import { useContext } from "react"
import { UserContext } from "../AppProviders"

function LoginButton() {

    // Step 3: Consume the context
    const { currentUser, login } = useContext(UserContext)

    // we don't want to see the button for login... if they're logged in
    if (currentUser) return null

    return (
        <button onClick={() => login('bob')}>Login</button>
    )
}

export default LoginButton
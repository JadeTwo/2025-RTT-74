import { useContext } from "react"
import { UserContext } from "../AppProviders"

function LogoutButton() {

    // Step 3: Consume the context
    const { currentUser, logout } = useContext(UserContext)

    // we don't want to see a logout button... if we're not already logged in
    if (!currentUser) return null

    return (
        <button onClick={logout}>Logout</button>
    )
}

export default LogoutButton
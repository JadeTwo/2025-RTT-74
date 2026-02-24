import { useEffect, useState } from "react"

export default function useWindowSize() {

    // It should use useState to store the width and height.
    const [dimensions, setDimensions] = useState({ 
        width: window.innerWidth, 
        height: window.innerHeight 
    })

    // It should use useEffect to add an event listener for 
    // the resize event on the window object when the Hook is first 
    // used (component mounts).
    useEffect(() => {
        const handleResize = (e) => {
            // The event listener should update the width and height state.
            // NOTE: Using e.target.innerWidth as an example... window.innerWidth would also work here
            // The window is the target. 
            setDimensions({ width: e.target.innerWidth, height: e.target.innerHeight })
        }

        window.addEventListener('resize', handleResize)

        // The useEffect should clean up the event listener when the 
        // component using the Hook unmounts.
        return () => {
            window.removeEventListener('resize', handleResize)
        }

    }, [])

    // The Hook should return an object like { width: number, height: number }.
    return dimensions
}
// Consider how this Hook would behave if used by multiple components with the 
// same key (optional, for advanced thought).


import { useEffect, useState } from "react";


// The Hook should accept two arguments: key (string, for the localStorage key) 
// and initialValue (the initial value if nothing is in localStorage for that key).
export default function useLocalStorage(key, initialValue) {

    const [value, setValue] = useState('')

    // The setStoredValue function should:
    // Update the state in the component.
    // Update the value in localStorage (serializing it to JSON).
    const setStoredValue = (newValue) => {
        setValue(newValue)
        const stringifiedValue = JSON.stringify(newValue)
        localStorage.setItem(key, stringifiedValue)
    }

    // When the Hook is first used:
    useEffect(() => {
        // It should try to retrieve the value from localStorage using the provided key.
        const storedValue = localStorage.getItem(key)

         // If a value exists in localStorage, it should be parsed (assume JSON) and used as 
        // the initial state.
        if (storedValue) {
            const parsed = JSON.parse(storedValue)
            setValue(parsed)
        // If no value exists or if parsing fails, initialValue should be used.
        } else {
            setStoredValue(initialValue)
        }

    }, [])



    // It should return an array similar to useState: [storedValue, setStoredValue].
    return [value, setStoredValue]
}
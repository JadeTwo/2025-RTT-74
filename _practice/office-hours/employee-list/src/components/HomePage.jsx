import Header from './Header'
import SearchBar from './SearchBar'
import EmployeeList from './EmployeeList'
import Form from './Form'

import { useState } from "react"

import EmployeeProvider from '../EmployeeProvider'

export default function HomePage() {

    const [input, setInput] = useState('')

    return (
        
        <div>
            <Header />
            <SearchBar input={input} setInput={setInput} />

            {/* Step 2: Provide the context  */}
            <EmployeeProvider>
                <EmployeeList input={input} />
                <Form />
            </EmployeeProvider>
        </div>
    )
}


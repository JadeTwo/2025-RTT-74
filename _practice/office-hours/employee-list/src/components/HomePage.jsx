import Header from './Header'
import SearchBar from './SearchBar'
import EmployeeList from './EmployeeList'
import Form from './Form'

import { useEffect, useState } from "react"

// import pokemonEmployees from '../data.js'

export default function HomePage() {

    const [value, setValue] = useState('')
    const [employees, setEmployees] = useState([])

    useEffect(() => {
        
        async function getEmployees() {

            const response = await fetch('https://dummyjson.com/users?limit=6')
            const data = await response.json()
            
            const employeeData = data.users.map((emp) => ({
                name: null,
                title: emp.company.title,
                img: null,
                altTxt: null,
                id: emp.id
            }))

            for (let employee of employeeData) {
                const pokeResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${employee.id * 25}`)
                const pokeData = await pokeResponse.json()
                employee.name = pokeData.name
                employee.img = pokeData.sprites.other["official-artwork"].front_default
                employee.altTxt = `picture of ${pokeData.name}`
            }        

            setEmployees(employeeData)
        }



        getEmployees()

    }, [])

    return (
        <div>
            <Header />
            <SearchBar value={value} setValue={setValue} />
            <EmployeeList value={value} employees={employees} />
            <Form setEmployees={setEmployees} />
        </div>
    )
}


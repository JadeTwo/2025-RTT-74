import EmployeeListItem from './EmployeeListItem'

export default function EmployeeList({ value, employees }) {

    // refacor our filter loop example using the filter array method
    let filteredEmployees = employees.filter((pokemon) => pokemon.name.includes(value))

    const pokemonComponents = filteredEmployees.map((pokemon) => 
        <EmployeeListItem 
            key={pokemon.id}
            name={pokemon.name} 
            title={pokemon.title} 
            img={pokemon.img} 
        />
    ) 

    return (
        <ul>
            {pokemonComponents}
        </ul>
    )
}


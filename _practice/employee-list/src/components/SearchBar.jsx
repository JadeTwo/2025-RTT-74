export default function SearchBar({ value, setValue }) {
    return (
        <input 
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text" 
            placeholder="Search Bar" 
        />
    )
}


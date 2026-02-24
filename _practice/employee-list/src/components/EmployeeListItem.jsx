export default function EmployeeListItem({ name, title, img, altTxt = 'pokemon' }) {
    return (
        <li>
            <img src={img} alt={altTxt} />
            <div>
                <p>{name}</p>
                <p>{title}</p>
            </div>
        </li>
    )
}


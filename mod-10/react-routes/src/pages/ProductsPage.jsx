import { Link } from "react-router-dom"

const products = [
    { id: 1, name: 'Laptop' },
    { id: 2, name: 'TV' },
    { id: 3, name: 'Radio' }
]

function ProductsPage() {
    return (
        <div>
            ProductsPage
            <ul>
                {products.map(product => 
                    <Link key={product.id} to={"/products/" + product.id}>
                        <li>{product.name}</li>
                    </Link>
                )}
            </ul>
        </div>
    )
}

export default ProductsPage
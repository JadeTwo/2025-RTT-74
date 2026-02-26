import { Link } from "react-router-dom"

import { products } from "../data"

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
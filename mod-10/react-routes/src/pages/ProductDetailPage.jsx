import { useParams } from "react-router-dom"

import { products } from "../data"

function ProductDetailPage() {

    const { id } = useParams()
    
    const product = products.find(prod => prod.id == id)

    return (
        <div>
            <h2>ProductDetailPage</h2>
            <div>
                <div>Details for Product: {id}</div>
                <div>Name: {product.name}</div>
            </div>
            
        </div>
    )
}

export default ProductDetailPage
import { useParams } from "react-router-dom"

function ProductDetailPage() {

    const { id } = useParams()

    return (
        <div>
            <h2>ProductDetailPage</h2>
            Details for Product: {id}
        </div>
    )
}

export default ProductDetailPage
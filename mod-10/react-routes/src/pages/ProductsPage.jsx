import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

// import { products } from "../data"

function ProductsPage() {

    const [products, setProducts] = useState([])

    useEffect(() => {

        const getPosts = async () => {
            const response = await fetch('https://dummyjson.com/products')
            const data = await response.json()
            setProducts(data.products)
        }

        getPosts()

    }, [])

    return (
        <div>
            ProductsPage
            <ul>
                {products.map(product => 
                    <Link key={product.id} to={"/products/" + product.id}>
                        <li>{product.title}</li>
                    </Link>
                )}
            </ul>
        </div>
    )
}

export default ProductsPage
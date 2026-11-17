import { useParams } from "react-router"
import axios from 'axios'
import { useState, useEffect } from "react"


function ProductDetails() {
    const [ product, setProduct ] = useState(null)

    const { productId } = useParams()
    console.log(productId)

    async function getProduct(){
        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/products/${productId}`)
        setProduct(response.data)
    }

    useEffect(()=>{
        getProduct()
    },[])

    

  return (
    <div>
        <h1>Product Details</h1>
        {product ? 
        <>
            <p>Title: {product.title}</p>
            <p>Description: {product.description}</p>
            <p>Category: {product.category}</p>
            <p>Price: {product.price} BD</p>
            <p>Quantity: {product.quantity}</p>
        </>
         : null}
        
    </div>
  )
}

export default ProductDetails;

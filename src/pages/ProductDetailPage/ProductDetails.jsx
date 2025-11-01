import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const ProductDetails = () => {
  
  const{product} = useLoaderData();





  return (
    <div>ProductDetails {product?.title}</div>
  )
}

export default ProductDetails
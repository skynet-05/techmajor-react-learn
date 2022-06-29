import React from 'react';
import { useParams } from 'react-router-dom';

export default function ProductDetail() {
  const params = useParams();
  console.log(params.productId);
  return (
    <div className='container'>
      <h2>Product Detail Page</h2>
      <p>{params.productId}</p>
    </div>
  )
}
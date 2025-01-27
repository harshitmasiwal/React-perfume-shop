// src/components/ProductCard.js
import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


function ProductCard({ product }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${product._id}`);
  };

  return (

    <div className="product-card-container w-full mx-auto mt-2">
      <div
        className="product-card border rounded-2xl shadow-lg overflow-hidden hover:shadow-xl cursor-pointer transition-transform transform hover:scale-105"
        onClick={handleClick}
      >
        <img
          className="w-full h-80 object-cover"
          src={product.images[0]}
          alt={product.name}
        />
        <div className="p-4">
          <h3 className="text-xl  text-emerald-300 font-extrabold tracking-tight leading-none mb-2">{product.name}</h3>
          <p className="text-zinc-400 mb-4">{product.shortDescription}</p>
          <p className="text-lg font-bold text-green-500">${product.price.toFixed(2)}</p>
        </div>
      </div>
    </div>


  
  );
}

export default ProductCard;

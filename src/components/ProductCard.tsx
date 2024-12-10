import React from "react";

const ProductCard = ({ image, name, category, price }:any) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-700">{name}</h3>
        <p className="text-xs text-gray-500 mt-1">{category}</p>
        <p className="text-sm font-bold text-gray-900 mt-2">₹ {price}</p>
  
      </div>
    </div>
  );
};

export default ProductCard;

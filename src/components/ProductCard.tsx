/* import React from "react"; */
import type { Product } from "../types/product";

type Props = {
  product: Product;
};

function ProductCard({ product }: Props) {
  const { name, price, imageUrl, url = "#" } = product;

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-4 flex items-center gap-4 transition-all duration-200 hover:shadow-md hover:scale-[1.01]">
      <img
        src={imageUrl}
        alt={name}
        className="w-12 h-12 object-cover rounded transition-transform duration-300 hover:scale-110"
      />
      <div className="flex-1 min-w-0">
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-1">{name}</h3>
        <p className="text-lg font-bold text-gray-900">${price.toFixed(2)}</p>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 inline-block text-blue-500 hover:text-blue-700 text-sm transition-colors duration-200"
        >
          View Page
        </a>
      </div>
    </div>
  );
}

export default ProductCard;
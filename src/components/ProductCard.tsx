/* import React from "react"; */
import type { Product } from "../types/product";

type Props = {
  product: Product;
};

function ProductCard({ product }: Props) {
  const { name, price, imageUrl, url = "#" } = product;

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-4 flex items-center gap-4">
      {/* Imagen */}
      <img
        src={imageUrl}
        alt={name}
        className="w-12 h-12 object-cover rounded"
      />

      {/* Contenido */}
      <div>
        {/* Nombre del producto */}
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-1">{name}</h3>

        {/* Precio */}
        <p className="text-lg font-bold text-gray-900">${price.toFixed(2)}</p>

        {/* Botón "View Page" */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 text-blue-500 hover:text-blue-700 transition-colors"
        >
          View Page
        </a>
      </div>
    </div>
  );
}

export default ProductCard;
/* import React from 'react' */

function ProductCard({title, description, imageUrl}: {
  title: string;
  description: string;
  imageUrl: string;
}) {
  return (
    <div className="h-[10vh] w-full bg-white rounded-lg shadow-md overflow-hidden flex">
      <img src={imageUrl} alt={title} className="w-[10vw] h-auto object-cover" />
      <div className="p-2">
        <h3 className="text-sm font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-xs text-gray-600">{description}</p>
        <button className="mt-3 w-full bg-blue-500 text-white text-sm py-1.5 rounded hover:bg-blue-600 transition">
          View Product
        </button>
      </div>
    </div>
  )
}

export default ProductCard
'use client'
import Image from 'next/image'
import Link from 'next/link'

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-64">
        <div className="select-none pointer-events-none">
          <Image 
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            draggable="false"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-black">{product.name}</h3>
        <p className="text-gray-600 mb-2">{product.category}</p>
        <p className="text-black font-bold">Rp {product.price.toLocaleString()}</p>
        <Link 
          href={`/products/${product.id}`}
          className="mt-2 inline-block bg-black text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-800 shadow-lg transition ease-in-out duration-300 "
        >
          View Details
        </Link>
      </div>
    </div>
  )
}

'use client'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { products } from '@/data/products'
import Header from '@/components/Header'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === Number(id))

  if (!product) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-gray-100 pt-24 pb-12">
          <div className="container mx-auto px-4 py-12 text-center">
            <h1 className="text-2xl font-bold">Product not found</h1>
          </div>
        </main>
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-100 pt-24 pb-12">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              {/* Product Image */}
              <div className="md:w-1/2">
                <div className="relative h-96">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    draggable="false"
                  />
                </div>
              </div>
              
              {/* Product Info */}
              <div className="md:w-1/2 p-6">
                <h1 className="text-3xl font-bold mb-2 text-black">{product.name}</h1>
                <p className="text-gray-600 mb-4">{product.category}</p>
                <p className="text-2xl font-bold text-black mb-4">
                  Rp {product.price.toLocaleString()}
                </p>
                <p className="text-gray-700 mb-6">{product.description}</p>
                
                <a href={product.link} target='blank'><button className="mt-2 inline-block bg-black text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-800 shadow-lg transition ease-in-out duration-300">
                  Buy the product
                </button></a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

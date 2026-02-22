import Image from 'next/image';

export default function Products() {
  return (
    <section id='products' className="py-12 bg-[#3c3c3c]">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h3 className="text-2xl font-bold text-center mb-8 text-white">See What's New</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {/* Product Cards */}
          {[
            { name: 'HOODIE DOPE', image: '/product/org1.png', price: '299.000' },
            { name: 'SWEEATER DOPE', image: '/product/org2.png', price: '280.000' },
          ].map((product, index) => (
            <div key={index} className="card bg-white shadow-lg rounded-lg overflow-hidden">
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-80 object-cover"
                width={288}
                height={320}
                draggable="false"
              />
              <div className="p-4">
                <h4 className="text-lg font-bold text-black">{product.name}</h4>
                <p className="text-sm text-gray-600">Rp {product.price}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* See More Button */}
        <div className="mt-8 text-center">
          <a href="/products" className="bg-[#FFD700] text-black font-bold py-3 px-6 rounded-lg hover:bg-[#FFA500] shadow-lg transition ease-in-out duration-300">
            See More
          </a>
        </div>
      </div>
    </section>
  );
}

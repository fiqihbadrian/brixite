'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTshirt, faComments, faMedal } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
  const router = useRouter();

  const handleShopNow = () => {
    router.push('/products');
  };

  return (
    <section className="relative bg-[#f3f4f6] text-black min-h-screen flex flex-col">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12 lg:px-20 flex-1 pt-24 pb-32">
        {/* Hero Image */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image 
            src="/tagline.png" 
            alt="Hero Side Image" 
            className="rounded-lg w-full h-auto max-w-sm pointer-events-none select-none" 
            width={500} 
            height={500} 
          />
        </div>
        {/* Hero Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <div>
            <h2 className="text-4xl font-bold mb-6">STEP BACK INTO STYLE</h2>
            <p className="text-lg mb-8">Made from luxurious material</p>
            <button 
              onClick={handleShopNow}
              className="bg-[#FFD700] text-black font-bold py-3 px-6 rounded-lg hover:bg-[#FFA500] shadow-lg transition ease-in-out duration-300"
            >
              Shop Now
            </button>
          </div>
        </div>
      </div>
      
      {/* Icon Box Section */}
      <div className="absolute bottom-0 w-full py-8 bg-[#f3f4f6] text-black border-t border-gray-300">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center">
          {/* Left Icon */}
          <div className="flex flex-col items-center">
            <FontAwesomeIcon 
              icon={faMedal} 
              className="h-8 w-8 text-[#FFD700] mb-2" 
            />
            <span className="text-center">Quality Assured</span>
          </div>

          {/* Center Icon */}
          <div className="flex flex-col items-center">
            <FontAwesomeIcon 
              icon={faTshirt} 
              className="h-8 w-8 text-[#FFD700] mb-2" 
            />
            <span className="text-center">Avantgarde Style</span>
          </div>

          {/* Right Icon */}
          <div className="flex flex-col items-center">
            <FontAwesomeIcon 
              icon={faComments} 
              className="h-8 w-8 text-[#FFD700] mb-2" 
            />
            <span className="text-center">Ultimate Satisfaction</span>
          </div>
        </div>
      </div>
    </section>
  );
}

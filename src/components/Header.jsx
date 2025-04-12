'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [headerVisible, setHeaderVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setHeaderVisible(false);
      } else {
        // Scrolling up
        setHeaderVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <header className={`bg-[#f3f4f6] text-black py-4 pb-2 fixed top-0 left-0 right-0 z-10 transition-all ease-in-out duration-300 ${!headerVisible ? 'transform -translate-y-full' : ''}`}>
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <Image 
            src="/name.png" 
            alt="Brixite Logo" 
            width={120} 
            height={24}
            className="pointer-events-none select-none"
            draggable="false"
          />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 items-center">
          <Link href="/" className="hover:text-[#0085FF]">Home</Link>
          <Link href="/products" className="hover:text-[#0085FF]">Products</Link>
          <Link href="#" className="hover:text-[#0085FF]">About</Link>
          <Link href="#" className="bg-[#0085FF] text-white font-semibold py-2 px-5 rounded-md shadow-md hover:bg-[#005FCC] transition ease-in-out duration-300">
            Explore Now
          </Link>
        </nav>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black focus:outline-none"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <nav className="space-y-4 px-6 py-4">
          <Link href="/" className="block hover:text-[#0085FF]">Home</Link>
          <Link href="/products" className="block hover:text-[#0085FF]">Products</Link>
          <Link href="#" className="block hover:text-[#0085FF]">About</Link>
          <Link href="#" className="block bg-[#0085FF] text-white font-semibold py-2 px-5 rounded-md shadow-md hover:bg-[#005FCC] transition ease-in-out duration-300">
            Explore Now
          </Link>
        </nav>
      </div>
    </header>
  );
}

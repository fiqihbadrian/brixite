import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faFacebookF, 
  faInstagram, 
  faTwitter, 
  faLinkedinIn,
  faWhatsapp 
} from '@fortawesome/free-brands-svg-icons';
import { 
  faEnvelope, 
  faPhone, 
  faMapMarkerAlt 
} from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* About Company */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#FFD700]">Brixite</h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Premium building materials and construction solutions for modern architecture. 
              We provide quality products that stand the test of time.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-[#FFD700] hover:text-black rounded-full flex items-center justify-center transition-all duration-300"
              >
                <FontAwesomeIcon icon={faFacebookF} className="text-sm" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-[#FFD700] hover:text-black rounded-full flex items-center justify-center transition-all duration-300"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-sm" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-[#FFD700] hover:text-black rounded-full flex items-center justify-center transition-all duration-300"
              >
                <FontAwesomeIcon icon={faTwitter} className="text-sm" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-[#FFD700] hover:text-black rounded-full flex items-center justify-center transition-all duration-300"
              >
                <FontAwesomeIcon icon={faLinkedinIn} className="text-sm" />
              </a>
              <a 
                href="https://wa.me/6281234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-[#FFD700] hover:text-black rounded-full flex items-center justify-center transition-all duration-300"
              >
                <FontAwesomeIcon icon={faWhatsapp} className="text-sm" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#FFD700]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-[#FFD700] transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#FFD700] transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-[#FFD700] transition-colors duration-300">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about#contact" className="text-gray-400 hover:text-[#FFD700] transition-colors duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/about#faq" className="text-gray-400 hover:text-[#FFD700] transition-colors duration-300">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info & Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#FFD700]">Get In Touch</h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-3 text-gray-400">
                <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#FFD700] mt-1" />
                <span>Jl. Construction No. 123, Jakarta, Indonesia</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FontAwesomeIcon icon={faPhone} className="text-[#FFD700]" />
                <a href="tel:+6281234567890" className="hover:text-[#FFD700] transition-colors">
                  +62 812-3456-7890
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <FontAwesomeIcon icon={faEnvelope} className="text-[#FFD700]" />
                <a href="mailto:info@brixite.com" className="hover:text-[#FFD700] transition-colors">
                  info@brixite.com
                </a>
              </li>
            </ul>
            
            {/* Newsletter */}
            <div>
              <h4 className="font-semibold mb-2">Newsletter</h4>
              <p className="text-sm text-gray-400 mb-3">Subscribe for updates</p>
              <form className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 py-2 px-3 rounded-l-lg text-black bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#FFD700] text-sm"
                />
                <button 
                  type="submit" 
                  className="bg-[#FFD700] hover:bg-[#FFC700] text-black py-2 px-4 rounded-r-lg font-semibold transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-6 md:px-12 lg:px-20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; 2025 Brixite by Fiqih Badrian. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

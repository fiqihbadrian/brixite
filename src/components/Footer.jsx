export default function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto px-6 text-center">
        <p>Subscribe to our newsletter for updates on our latest collections</p>
        <form className="mt-4">
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="py-2 px-4 rounded-l-lg text-black"
          />
          <button 
            type="submit" 
            className="bg-yellow-400 hover:bg-yellow-500 text-black py-2 px-4 rounded-r-lg"
          >
            Subscribe
          </button>
        </form>
      </div>
      <div className="text-center mt-6">
        <p>&copy; 2025 Fiqih Badrian. All rights reserved.</p>
      </div>
    </footer>
  );
}

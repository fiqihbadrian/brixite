'use client'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-100">
        {/* Hero Section */}
        <section className="bg-[#f3f4f6] pt-32 pb-16">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div className="text-center">
              <h1 className="text-5xl font-bold mb-6 text-black">About Brixite</h1>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Step back into style with bold, authentic streetwear that speaks to your vibe.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-black">Our Story</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Brixite Society was born from a passion for authentic streetwear that makes a statement. 
                  We believe that fashion is more than just clothing—it's a form of self-expression, 
                  a way to showcase your unique personality and attitude.
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Each piece in our collection is carefully designed to bring bold, stylish vibes that 
                  stand out from the crowd. We're here to make your everyday look exceptional with 
                  comfortable fits and eye-catching designs.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Join us on this journey. Make a statement. Keep it cool and fresh!
                </p>
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden shadow-lg bg-gray-100 flex items-center justify-center">
                <Image
                  src="/tagline.png"
                  alt="Brixite Style"
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-[#3c3c3c] text-white">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <h2 className="text-4xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">⭐</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Quality First</h3>
                <p className="text-gray-300 leading-relaxed">
                  We use only premium materials and the finest craftsmanship to ensure 
                  every piece meets our high standards of quality and durability.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">🎨</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Authentic Style</h3>
                <p className="text-gray-300 leading-relaxed">
                  Our designs are inspired by street culture and modern aesthetics, 
                  creating unique pieces that help you express your true self.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-[#FFD700] rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">💯</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Customer Satisfaction</h3>
                <p className="text-gray-300 leading-relaxed">
                  Your satisfaction is our priority. We're committed to providing 
                  exceptional service and creating pieces you'll love to wear.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 md:px-12 lg:px-20 text-center">
            <h2 className="text-4xl font-bold mb-8 text-black">Our Mission</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
              To bring bold, stylish streetwear that speaks to your authentic vibe. 
              We're here to make your everyday look stand out with comfy fits and 
              eye-catching designs that make a statement.
            </p>
            <a 
              href="/products" 
              className="inline-block bg-[#FFD700] text-black font-bold py-3 px-8 rounded-lg hover:bg-[#FFA500] shadow-lg transition ease-in-out duration-300"
            >
              Explore Our Collection
            </a>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-[#f3f4f6]">
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div className="max-w-2xl mx-auto">
              <h2 className="text-4xl font-bold mb-6 text-black text-center">Get In Touch</h2>
              <p className="text-xl text-gray-700 mb-8 text-center">
                Have questions or want to know more about Brixite? We'd love to hear from you!
              </p>
              
              <form 
                action="https://formsubmit.co/fiqihbadrian@gmail.com" 
                method="POST"
                className="bg-white rounded-lg shadow-lg p-8"
              >
                {/* Honeypot */}
                <input type="text" name="_honey" style={{ display: 'none' }} />
                
                {/* Disable Captcha */}
                <input type="hidden" name="_captcha" value="false" />
                
                {/* Success Page */}
                <input type="hidden" name="_next" value="http://localhost:3000/about?success=true" />
                
                {/* Subject */}
                <input type="hidden" name="_subject" value="New contact from Brixite website!" />
                
                <div className="mb-6">
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0085FF] focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0085FF] focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0085FF] focus:border-transparent resize-none"
                    placeholder="Tell us what you're thinking..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#0085FF] text-white font-bold py-3 px-8 rounded-lg hover:bg-[#005FCC] shadow-lg transition ease-in-out duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

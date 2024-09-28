'use client'

// import a from 'next/a'
import Image from 'next/image'
import pic from '@/pic.png'
import { Menu, X, Droplet, Zap, Recycle, Check, ChevronDown, ChevronLeft, ChevronRight, Facebook, Twitter, Instagram } from 'lucide-react'
import { Roboto_Condensed } from 'next/font/google'
import { useState, useEffect } from 'react'

const robotoCondensed = Roboto_Condensed({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export function LandingPageComponent() {
  const [openFaq, setOpenFaq] = useState(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [email, setEmail] = useState('')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "How does the moisture-wicking technology work?",
      answer: "Our moisture-wicking technology uses advanced fabrics that draw sweat away from your skin to the outer layer of the clothing where it can evaporate quickly. This helps keep you dry and comfortable during your workouts."
    },
    {
      question: "Are your products suitable for machine washing?",
      answer: "Yes, all our products are machine washable. We recommend washing in cold water and tumble drying on low heat to maintain the integrity of the fabric and prolong the life of the garment."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we offer international shipping to most countries. Shipping rates and delivery times vary depending on the destination. You can view the specific details during the checkout process."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all unused items in their original packaging. If you're not satisfied with your purchase, you can return it for a full refund or exchange."
    },
    {
      question: "How do I care for my UltraFlex Performance T-Shirt?",
      answer: "To keep your UltraFlex Performance T-Shirt in top condition, machine wash cold with like colors, use mild detergent, avoid fabric softeners, and tumble dry on low heat. Do not iron prints or logos."
    }
  ]

  const products = [
    { name: "UltraFlex Performance Shorts", price: 39.99, image: pic },
    { name: "AeroLight Running Jacket", price: 79.99, image: pic },
    { name: "PowerLift Compression Tights", price: 54.99, image: pic },
    { name: "EnduroMax Training Hoodie", price: 64.99, image: pic },
    { name: "FlexFit Workout Tank", price: 29.99, image: pic },
    { name: "ThermoRegulate Base Layer", price: 49.99, image: pic },
    { name: "AquaFlow Swim Shorts", price: 34.99, image: pic },
    { name: "TrailBlazer Hiking Pants", price: 69.99, image: pic },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length)
  }

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     nextSlide()
  //   }, 5000)
  //   return () => clearInterval(timer);
  // }, [])

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    console.log(`Subscribing email: ${email}`)
    setEmail('')
  }

  return (
    (<div className={`min-h-screen flex flex-col ${robotoCondensed.className}`}>
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-20 bg-gray-800 bg-opacity-90">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <a href="/" className="text-2xl font-bold text-white">
              ACTIVEMEN
            </a>
            <div className="hidden md:flex space-x-4">
              <a href="#home" className="text-white hover:text-gray-300">
                Home
              </a>
              <a href="#whyus" className="text-white hover:text-gray-300">
                Why Us?
              </a>
              <a href="#products" className="text-white hover:text-gray-300">
                Products
              </a>
              <a href="#shop" className="text-white hover:text-gray-300">
                Shop
              </a>
            </div>
            <button
              className="md:hidden text-white focus:outline-none"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile menu">
              <Menu size={24} />
            </button>
          </div>
        </nav>
      </header>
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={() => setMobileMenuOpen(false)}>
        <div
          className={`fixed inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
          onClick={(e) => e.stopPropagation()}>
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <a href="/" className="text-2xl font-bold text-gray-800">
                ACTIVEMEN
              </a>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="text-gray-600 focus:outline-none"
                aria-label="Close mobile menu">
                <X size={24} />
              </button>
            </div>
            <nav className="space-y-4">
              <a onClick={() => setMobileMenuOpen(false)} href="#home" className="block text-gray-800 hover:text-gray-600">
                Home
              </a>
              <a href="#whyus" onClick={() => setMobileMenuOpen(false)} className="block text-gray-800 hover:text-gray-600">
                Why Us?
              </a>
              <a href="#products" onClick={() => setMobileMenuOpen(false)} className="block text-gray-800 hover:text-gray-600">
                Products
              </a>
              <a href="#shop" onClick={() => setMobileMenuOpen(false)} className="block text-gray-800 hover:text-gray-600">
                Shop
              </a>
            </nav>
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <section id='home' className="h-screen flex items-center justify-center relative">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')" }}></div>
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <div className="relative z-20 text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Elevate Your Performance
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Premium activewear for the modern man
          </p>
          <a
            href="#"
            className="bg-white text-black py-2 px-6 rounded-full text-lg font-semibold hover:bg-gray-200 transition duration-300">
            Shop Now
          </a>
        </div>
      </section>
      {/* Features Section */}
      <section id='whyus' className="bg-gray-100 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Why Choose ACTIVEMEN?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-primary mb-4">
                <Droplet size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Moisture-Wicking Technology</h3>
              <p className="text-gray-600">
                Our advanced fabrics keep you dry and comfortable during intense workouts, outperforming standard activewear.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-primary mb-4">
                <Zap size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Performance-Enhancing Design</h3>
              <p className="text-gray-600">
                Ergonomic cuts and strategic compression boost your athletic performance and reduce muscle fatigue.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <div className="text-primary mb-4">
                <Recycle size={48} className="mx-auto" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Eco-Friendly Materials</h3>
              <p className="text-gray-600">
                Our commitment to sustainability means you can look good while feeling good about your environmental impact.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Product Showcase Section */}
      <section id='shop' className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <div className="bg-gray-100 rounded-lg shadow-md p-6">
                <Image
                  src={pic}
                  alt="Performance T-Shirt"
                  width={400}
                  height={400}
                  className="w-full h-auto rounded-lg mb-4" />
                <h3 className="text-2xl font-bold mb-2">UltraFlex Performance T-Shirt</h3>
                <p className="text-gray-600 mb-4">Experience unparalleled comfort and performance with our flagship t-shirt.</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-primary">$49.99</span>
                  <button
                    className="bg-primary text-white py-2 px-4 rounded-full hover:bg-primary-dark transition duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Why Our T-Shirt Stands Out</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Check className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>4-way stretch fabric for unrestricted movement</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Advanced moisture-wicking technology keeps you dry</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Anti-odor treatment for freshness during intense workouts</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Flatlock seams prevent chafing and irritation</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>UPF 50+ sun protection for outdoor activities</span>
                </li>
                <li className="flex items-start">
                  <Check className="text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Made from recycled materials - eco-friendly and sustainable</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* Product Carousel Section */}
      <section id='products' className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Explore Our Collection
          </h2>
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {products.map((product, index) => (
                  <div key={index} className="w-full md:w-1/4 flex-shrink-0 px-2">
                    <div className="bg-white rounded-lg shadow-md p-6">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="w-full h-auto rounded-lg mb-4" />
                      <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold text-primary">${product.price.toFixed(2)}</span>
                        <button
                          className="bg-primary text-white py-2 px-4 rounded-full hover:bg-primary-dark transition duration-300">
                          View Details
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
              aria-label="Previous product">
              <ChevronLeft className="text-gray-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
              aria-label="Next product">
              <ChevronRight className="text-gray-600" />
            </button>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="mb-4">
                <button
                  className="flex justify-between items-center w-full text-left p-4 bg-gray-100 rounded-lg shadow-md hover:bg-gray-200 transition duration-150 ease-in-out"
                  onClick={() => toggleFaq(index)}>
                  <span className="font-semibold text-gray-700">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''
                      }`} />
                </button>
                {openFaq === index && (
                  <div className="mt-2 p-4 bg-white rounded-lg shadow-md">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About ACTIVEMEN</h3>
              <p className="text-sm text-gray-400">
                ACTIVEMEN is your premier destination for high-performance men's activewear. We blend cutting-edge technology with sustainable practices to bring you the best in athletic apparel.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick as</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-white">Products</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm text-gray-400 hover:text-white">Shipping & Returns</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-white">FAQ</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-white">Size Guide</a></li>
                <li><a href="#" className="text-sm text-gray-400 hover:text-white">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-sm text-gray-400 mb-4">Stay up to date with our latest offers and updates</p>
              <form onSubmit={handleNewsletterSubmit} className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-grow px-4 py-2 rounded-l-md text-gray-900"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required />
                <button
                  type="submit"
                  className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-primary-dark transition duration-300">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div
            className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">&copy; 2024 ACTIVEMEN. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>)
  );
}
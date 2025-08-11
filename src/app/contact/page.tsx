'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Contact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <>
      {/* Header */}
      <header className="bg-white shadow-sm fixed w-full top-0 z-50">
        <div className="container mx-auto px-5 py-5 flex justify-between items-center max-w-[1200px]">
          <div className="text-2xl font-bold text-gray-800">Prajakta Takbhate</div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-2xl text-gray-800"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            &#9776;
          </button>
          
          {/* Navigation */}
          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:static top-16 right-5 md:right-auto bg-white md:bg-transparent shadow-md md:shadow-none rounded-md p-4 md:p-0`}>
            <ul className="flex flex-col md:flex-row gap-4 md:gap-8">
              <li>
                <Link href="/" className="text-gray-800 font-semibold hover:text-blue-500">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/certifications" className="text-gray-800 font-semibold hover:text-blue-500">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-800 font-semibold hover:text-blue-500">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-blue-500 font-semibold">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-[120px] bg-gradient-to-br from-blue-100/10 to-red-100/10">
        <div className="container mx-auto px-5 py-16 max-w-[1200px] text-center">
          <h1 className="text-5xl font-bold font-poppins mb-4">
            Get In <span className="text-blue-500">Touch</span>
          </h1>
          <p className="text-xl text-gray-500">I'd love to hear from you</p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16">
        <div className="container mx-auto px-5 max-w-[1200px]">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Contact Form */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold font-poppins mb-8">Send Me a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-40"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-blue-700 hover:-translate-y-1"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl font-bold font-poppins mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <Image
                    src="/gmail.png"
                    alt="Email"
                    width={24}
                    height={24}
                    className="mr-4"
                  />
                  <p>prajaktatakbhate0@gmail.com</p>
                </div>
                
                <div className="flex items-center">
                  <Image
                    src="/telephone.png"
                    alt="Phone"
                    width={24}
                    height={24}
                    className="mr-4"
                  />
                  <p>1112222333</p>
                </div>
                
                <div className="flex items-center">
                  <Image
                    src="/placeholder.png"
                    alt="Location"
                    width={24}
                    height={24}
                    className="mr-4"
                  />
                  <p>Solapur Maharastra</p>
                </div>
              </div>

              <h3 className="text-xl font-semibold text-blue-500 mt-12 mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/prajakta-takbhate-7165aa236" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:-translate-y-1 transition-transform"
                >
                  <Image
                    src="/linkedin.png"
                    alt="LinkedIn"
                    width={30}
                    height={30}
                  />
                </a>
                <a 
                  href="https://github.com/prajaktatakbhate2" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:-translate-y-1 transition-transform"
                >
                  <Image
                    src="/github.png"
                    alt="GitHub"
                    width={30}
                    height={30}
                  />
                </a>
                <a 
                  href="#" 
                  className="hover:-translate-y-1 transition-transform"
                >
                  <Image
                    src="/instagram.png"
                    alt="Instagram"
                    width={30}
                    height={30}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-5 text-center max-w-[1200px]">
          <p>&copy; {new Date().getFullYear()} prajaktatakbhate2. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Certifications() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Certification data
  const certifications = [
    {
      id: 1,
      image: '/Android certificate.jpg',
      title: 'Certification of Completion',
      issuer: 'simplilearn',
      date: '3rd July 2024',
      description: 'Introduction to Android studio.'
    },
    {
      id: 2,
      image: '/python certificate.jpg',
      title: 'Certification of Completion',
      issuer: 'simplilearn',
      date: '6th July 2024',
      description: 'Introduction to open CV using python.'
    },
    {
      id: 3,
      image: '/WhatsApp Image 2025-06-15 at 11.19.57 AM.jpeg',
      title: 'Certification of Internship',
      issuer: 'INTELLISEIT',
      date: '21 Feb 2025',
      description: 'Internship on Web Designing.'
    },
    {
      id: 4,
      image: '/python_basic certificate_page-0001 (1).jpg',
      title: 'Certification of Accomplishment',
      issuer: 'HackerRank',
      date: '3 Aug 2025',
      description: 'Certification Python'
    }
  ];

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
                <Link href="/certifications" className="text-blue-500 font-semibold">
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-800 font-semibold hover:text-blue-500">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-800 font-semibold hover:text-blue-500">
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
            My <span className="text-blue-500">Certifications</span>
          </h1>
          <p className="text-xl text-gray-500">Professional qualifications and achievements</p>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-16">
        <div className="container mx-auto px-5 max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {certifications.map((cert) => (
              <div key={cert.id} className="bg-white p-6 rounded-lg shadow-sm text-center">
                <div className="mb-4">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    width={400}
                    height={300}
                    className="w-full h-auto rounded-lg mx-auto"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-blue-500 font-semibold mb-1">{cert.issuer}</p>
                <p className="text-gray-500 text-sm mb-3">{cert.date}</p>
                <p className="text-gray-700">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hire Me Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-blue-800 text-white text-center">
        <div className="container mx-auto px-5 max-w-[1200px]">
          <h2 className="text-4xl font-bold font-poppins mb-5">
            Ready to Work With a Certified Professional?
          </h2>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-blue-500 px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-red-500 hover:text-white"
          >
            Hire Me
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-5 text-center max-w-[1200px]">
          <p>&copy; {new Date().getFullYear()} Prajakta Takbhate. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
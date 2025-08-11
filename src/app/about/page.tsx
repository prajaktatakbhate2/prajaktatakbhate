'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
                <Link href="/about" className="text-blue-500 font-semibold">
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
            About <span className="text-blue-500">Me</span>
          </h1>
          <p className="text-xl text-gray-500">Get to know me better</p>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="container mx-auto px-5 max-w-[1200px]">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* About Image */}
            <div className="w-full md:w-1/2">
              <Image
                src="/id pic.jpeg"
                alt="Prajakta Takbhate"
                width={500}
                height={600}
                className="w-full max-w-md mx-auto rounded-lg shadow-xl"
              />
            </div>
            
            {/* About Text */}
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold font-poppins mb-6">Who Am I?</h2>
              <p className="text-lg mb-6">
                I'm a passionate engineering student specializing in Artificial Intelligence, 
                Machine Learning, and Web Development. With a strong foundation in Analog 
                Communication and VLSI design, I enjoy building innovative solutions—whether 
                it's an AI-powered robot, a web application, or a custom hardware implementation.
              </p>
              
              <p className="text-lg mb-6">
                Currently, I'm working on exciting projects like an AI-powered weed remover 
                and developing my skills in HTML, CSS, and JavaScript to craft modern and 
                responsive web experiences. I thrive on solving complex problems and bringing 
                creative ideas to life.
              </p>
              
              <h3 className="text-2xl font-semibold text-blue-500 mb-4">Personal Interests</h3>
              <p className="text-lg mb-8">
                Team Player & Leadership – Worked as a team captain, event organizer, 
                club member to develop leadership and teamwork skills.
              </p>
              
              <div className="flex gap-4">
                <a href="#" className="hover:-translate-y-1 transition-transform">
                  <Image
                    src="/linkedin.png"
                    alt="LinkedIn"
                    width={30}
                    height={30}
                  />
                </a>
                <a href="#" className="hover:-translate-y-1 transition-transform">
                  <Image
                    src="/github.png"
                    alt="GitHub"
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
          <p>&copy; {new Date().getFullYear()} Prajakta Takbhate. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
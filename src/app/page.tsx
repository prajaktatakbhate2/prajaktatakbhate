'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Smooth scroll functionality
  useEffect(() => {
    const handleSmoothScroll = (e:any) => {
      if (e.target.closest('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

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
                <Link href="/" className="text-blue-500 font-semibold">
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
                <Link href="/contact" className="text-gray-800 font-semibold hover:text-blue-500">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="pt-[80px]">
        {/* Hero Section */}
        <section className="pt-[40px] bg-gradient-to-br from-blue-100/10 to-red-100/10">
          <div className="container mx-auto px-5 py-10 max-w-[1200px]">
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex-1 pr-0 md:pr-12">
                <h1 className="text-5xl font-bold font-poppins mb-5">
                  Hi, I'm <span className="text-blue-500">Prajakta Takbhate</span>
                </h1>
                <p className="text-xl text-gray-500 mb-8">Professional Software Developer</p>
                <Link 
                  href="#hire-me" 
                  className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-blue-700 hover:-translate-y-1"
                >
                  Hire Me
                </Link>
              </div>
              <div className="flex-1 mt-10 md:mt-0 text-center">
                <Image
                  src="/id pic.jpeg"
                  alt="Prajakta Takbhate"
                  width={400}
                  height={500}
                  className="max-w-full rounded-lg shadow-xl"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-5 max-w-[1200px]">
            <h2 className="text-4xl font-bold font-poppins text-center mb-12">My Experience</h2>
            
            <div className="relative my-8">
              {/* Timeline line */}
              <div className="hidden md:block absolute w-1 bg-gray-300 top-0 bottom-0 left-1/2 -ml-0.5"></div>
              
              {/* Timeline items */}
              <div className="relative">
                {/* Left item */}
                <div className="mb-8 md:mb-16 md:w-[45%] md:mr-auto">
                  <div className="p-4 bg-gray-50 rounded-lg relative">
                    <div className="hidden md:block absolute w-5 h-5 bg-white border-4 border-blue-500 rounded-full top-5 -right-2.5 z-10"></div>
                    <h3 className="text-xl font-semibold">AS Intern</h3>
                    <p className="text-sm text-gray-600 mb-2">Nov 2024 - Feb 2025</p>
                    <p className="font-medium">INTELLISE IT</p>
                    <p>Internship on Web Designing.</p>
                  </div>
                </div>
                
                {/* Right item */}
                <div className="mb-8 md:mb-16 md:w-[45%] md:ml-auto">
                  <div className="p-4 bg-gray-50 rounded-lg relative">
                    <div className="hidden md:block absolute w-5 h-5 bg-white border-4 border-blue-500 rounded-full top-5 -left-2.5 z-10"></div>
                    <h3 className="text-xl font-semibold">AS Trainee</h3>
                    <p className="text-sm text-gray-600 mb-2">March 2024 - April 2024</p>
                    <p className="font-medium">PMS Robotics</p>
                    <p>Training on Automation and Robotics.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-5 max-w-[800px] text-center">
            <h2 className="text-4xl font-bold font-poppins mb-5">About Me</h2>
            <p className="text-lg mb-8">
              Skilled in software development with expertise in C, C++, Python, HTML, CSS, JS. 
              Passionate about building efficient, scalable solutions and staying updated with 
              industry trends. Strong problem-solving abilities and a collaborative mindset for 
              delivering high-quality projects. Open to networking and new opportunities in tech.
            </p>
            <a 
              href="/pdfs/Prajakta Takbhate Resume (1).pdf" 
              download 
              className="inline-block bg-blue-500 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-blue-700 hover:-translate-y-1"
            >
              Download CV
            </a>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16">
          <div className="container mx-auto px-5 max-w-[1200px]">
            <h2 className="text-4xl font-bold font-poppins text-center mb-12">My Skills</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Web Development */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">Web Development</h3>
                <div className="h-2.5 bg-gray-200 rounded-full mb-4">
                  <div className="h-2.5 bg-blue-500 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
              
              {/* UI/UX Design */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">UI/UX Design</h3>
                <div className="h-2.5 bg-gray-200 rounded-full mb-4">
                  <div className="h-2.5 bg-blue-500 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
              
              {/* HTML CSS JS */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4">HTML CSS JS</h3>
                <div className="h-2.5 bg-gray-200 rounded-full mb-4">
                  <div className="h-2.5 bg-blue-500 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
              
              {/* C Language */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold mb-4">C Language</h4>
                <div className="h-2.5 bg-gray-200 rounded-full mb-4">
                  <div className="h-2.5 bg-blue-500 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
              
              {/* Python */}
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h5 className="text-xl font-semibold mb-4">Python</h5>
                <div className="h-2.5 bg-gray-200 rounded-full mb-4">
                  <div className="h-2.5 bg-blue-500 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hire Me Section */}
        <section id="hire-me" className="py-16 bg-gradient-to-r from-blue-500 to-blue-800 text-white text-center">
          <div className="container mx-auto px-5 max-w-[1200px]">
            <h2 className="text-4xl font-bold font-poppins mb-5">Interested in Working Together?</h2>
            <p className="text-lg mb-8">I'm available for freelance work. Get in touch for projects or full-time positions.</p>
            <Link 
              href="/contact" 
              className="inline-block bg-white text-blue-500 px-6 py-3 rounded-md font-semibold transition-all duration-300 hover:bg-red-500 hover:text-white"
            >
              Contact Me
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-5 text-center max-w-[1200px]">
          <p>&copy; {new Date().getFullYear()} Prajakta Takbhate. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-4">
            <a 
              href="https://www.linkedin.com/in/prajakta-takbhate-7165aa236" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/prajaktatakbhate2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-blue-300"
            >
              GitHub
            </a>
            <Link href="/contact" className="hover:text-blue-300">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
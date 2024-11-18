import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Logo and Description */}
          <div className="text-center sm:text-left mb-6 sm:mb-0">
            <h2 className="text-2xl font-semibold">Your Website</h2>
            <p className="mt-2">A brief description about your website.</p>
          </div>

          {/* Navigation Links */}
          <div className="mt-6 sm:mt-0">
            <ul className="flex flex-col sm:flex-row justify-center sm:justify-start space-y-4 sm:space-y-0 sm:space-x-6">
              <li><a href="#home" className="hover:text-gray-400">Home</a></li>
              <li><a href="#about" className="hover:text-gray-400">About</a></li>
              <li><a href="#services" className="hover:text-gray-400">Services</a></li>
              <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-6 text-center">
          <ul className="flex justify-center space-x-6">
            <li><a href="https://facebook.com" className="text-gray-400 hover:text-white">Facebook</a></li>
            <li><a href="https://twitter.com" className="text-gray-400 hover:text-white">Twitter</a></li>
            <li><a href="https://instagram.com" className="text-gray-400 hover:text-white">Instagram</a></li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

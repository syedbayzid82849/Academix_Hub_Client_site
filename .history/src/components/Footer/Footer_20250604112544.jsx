// src/components/Footer.jsx

import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-5 mt-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Column 1: Logo & Slogan */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400">Academix-Hub</h2>
          <p className="mt-2 text-sm text-gray-300">
            Empowering learners with quality courses and skill-building opportunities.
          </p>
          <div className="flex gap-3 mt-4">
            <a href="#" aria-label="Facebook">
              <FaFacebook className="text-xl hover:text-blue-500 transition" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter className="text-xl hover:text-blue-400 transition" />
            </a>
            <a href="#" aria-label="GitHub">
              <FaGithub className="text-xl hover:text-gray-400 transition" />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/courses" className="hover:underline">Courses</a></li>
            <li><a href="/about" className="hover:underline">About Us</a></li>
          </ul>
        </div>

        {/* Column 3: Useful Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Useful</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/login" className="hover:underline">Login</a></li>
            <li><a href="/register" className="hover:underline">Register</a></li>
            <li><a href="/dashboard" className="hover:underline">Dashboard</a></li>
          </ul>
        </div>

      </div>

      <div className="mt-10 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Academix-Hub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

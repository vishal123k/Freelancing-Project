import React from "react";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition duration-300">About</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Team</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Careers</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition duration-300">How it works</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Trust & Safety</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Help Centre</a></li>
            </ul>
          </div>

          {/* Discover */}
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Discover</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition duration-300">Guides</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Stories</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">News</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition duration-300">TalentDesk</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Business Cost Calculator</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Startup Cities</a></li>
            </ul>
          </div>

          {/* Browse */}
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-4">Browse</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition duration-300">Freelance Services</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Freelance Services By Country</a></li>
              <li><a href="#" className="hover:text-white transition duration-300">Freelance Skills</a></li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-6 mt-8">
          <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300">
            <Facebook size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition duration-300">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-600 transition duration-300">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-pink-500 transition duration-300">
            <Instagram size={20} />
          </a>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <ul className="flex justify-center space-x-8 mb-3">
            <li><a href="#" className="hover:text-white transition duration-300">Terms</a></li>
            <li><a href="#" className="hover:text-white transition duration-300">Privacy</a></li>
            <li><a href="#" className="hover:text-white transition duration-300">Sitemap</a></li>
            <li><a href="#" className="hover:text-white transition duration-300">Company Details</a></li>
          </ul>
          <p className="text-gray-500">© 2025 People Per Hour Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

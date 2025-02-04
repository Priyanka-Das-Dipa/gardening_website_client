/* eslint-disable prettier/prettier */
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-300 py-12 w-full">
        <div className="container mx-auto px-4 sm:px-6 ">
          <div className="flex flex-wrap justify-between">
            {/* Column 1: Logo & Description */}
            <div className="w-full md:w-1/3 mb-6">
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                GrowGenius
              </h2>
              <p className="text-gray-400">
              Cultivating knowledge, one seed at a time. GrowGenius connects <br /> gardeners to inspire growth and foster a greener tomorrow.
              </p>
            </div>

            {/* Column 2: Explore Links */}
            <div className="w-full md:w-1/3 mb-6">
              <h3 className="text-xl font-semibold text-white mb-4">Explore</h3>
              <ul className="space-y-2">
                <li>
                  <a className="hover:text-white" href="/posts">
                    Top Posts
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="/about">
                    About Us
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="/contact">
                    Contact us
                  </a>
                </li>
                <li>
                  <a className="hover:text-white" href="/privacy-policy">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Social Media & Community */}
            <div className="w-full md:w-1/3">
              <h3 className="text-xl font-semibold text-white mb-4">
                Connect with Us
              </h3>
              <div className="flex space-x-4 mb-6">
                <a
                  className="text-gray-400 hover:text-white"
                  href="https://facebook.com"
                >
                  <FaFacebookF size={24} />
                </a>
                <a
                  className="text-gray-400 hover:text-white"
                  href="https://twitter.com"
                >
                  <FaTwitter size={24} />
                </a>
                <a
                  className="text-gray-400 hover:text-white"
                  href="https://instagram.com"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  className="text-gray-400 hover:text-white"
                  href="https://linkedin.com"
                >
                  <FaLinkedinIn size={24} />
                </a>
              </div>
              <p className="text-gray-400">
                Stay updated with our community, follow us on social media and
                share your voice!
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-700 pt-6 text-center">
            <p className="text-gray-500">
              &copy; {new Date().getFullYear()} GrowGenius.All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

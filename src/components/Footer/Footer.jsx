import React from "react";
import footerImg from "../../assets/logo-footer.png"

const Footer = () => {
  return (
    <div className="bg-[#020617] mt-50 text-white pt-32 relative">

      {/* Newsletter Card */}
      <div className="absolute -top-24 left-1/2 transform -translate-x-1/2 w-[90%] max-w-4xl">
        <div className="bg-linear-to-r from-sky-100 to-orange-200 rounded-2xl shadow-lg p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Subscribe to our Newsletter
          </h2>
          <p className="text-gray-600 mt-2 mb-6">
            Get the latest updates and news right in your inbox!
          </p>

          <div className="flex justify-center gap-3 flex-col md:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg w-full text-black md:w-80 border outline-none"
            />
            <button className="px-6 py-2 rounded-lg bg-linear-to-r from-pink-400 to-yellow-400 text-black font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-6 py-16 grid md:grid-cols-3 gap-10">

        {/* About */}
        <div>
          <h3 className="font-semibold text-lg mb-4">About Us</h3>
          <p className="text-gray-400 text-sm">
            We are a passionate team dedicated to providing the best services to
            our customers.
          </p>
        </div>

        {/* Logo + Links */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <img
              src={footerImg} // replace with your cricket logo
              alt="logo"
              className="w-16"
            />
          </div>

          <h3 className="font-semibold text-lg mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">Services</li>
            <li className="hover:text-white cursor-pointer">About</li>
            <li className="hover:text-white cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Subscribe</h3>
          <p className="text-gray-400 text-sm mb-4">
            Subscribe to our newsletter for the latest updates.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-l-lg w-full text-white"
            />
            <button className="px-4 py-2 rounded-r-lg bg-linear-to-r from-pink-400 to-yellow-400 text-black font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-gray-500 text-sm pb-6 border-t border-gray-800 pt-4">
        ©2024 Your Company All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
"use client";
import React from "react";
function Footer() {
  return (
    <footer className="bg-black text-700 mt-15">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="flex flex-wrap justify-between gap-y-10">
          <div className="w-full md:w-1/4 lg:w-[280px] pr-8">
            <div className="flex items-center text-xl font-bold text-green-600 mb-4">
              <svg
                className="w-6 h-6 mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                ></path>
              </svg>
              FreshCart
            </div>
            <p className="text-sm text-white mb-6 max-w-xs">
              An online store website that's easy to use, supports online
              payment and delivery, and is suitable for any type of business.
            </p>
            <button className="bg-gray-800 text-white text-sm font-medium py-2.5 px-6 rounded hover:bg-black transition duration-300">
              Contact us
            </button>
          </div>

          <div className="flex flex-wrap gap-x-12 sm:gap-x-20 md:gap-x-12 lg:gap-x-20">
            <div className="space-y-3">
              <h3 className="font-semibold text-white mb-3 text-sm tracking-wide">
                Pages
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-green-600 transition duration-150"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-green-600 transition duration-150"
                  >
                    Categories
                  </a>
                </li>
                <li>
                  <a
                    href="/products"
                    className="text-white hover:text-green-600 transition duration-150"
                  >
                    Products
                  </a>
                </li>
              </ul>
            </div>

            {/* Pages - Column 2 */}
            <div className="space-y-3">
              <h3 className="font-semibold text-white mb-3 text-sm tracking-wide">
                Pages
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-green-600 transition duration-150"
                  >
                    Login
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-green-600 transition duration-150"
                  >
                    Sign Up
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-semibold text-white mb-3 text-sm tracking-wide">
                Who We Are
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="mailto:aabdelmonem863@gmail.com
"
                    className="text-white hover:text-green-600 transition duration-150"
                  >
                    aabdelmonem863@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-green-600 transition duration-150"
                  >
                    Who We Are
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-green-600 transition duration-150"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* We Accept */}
            <div className="space-y-3">
              <h3 className="font-semibold text-white mb-3 text-sm tracking-wide">
                We Accept
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="text-white">Visa</li>
                <li className="text-white">MasterCard</li>
                <li className="text-white">Apple Pay</li>
              </ul>
            </div>
          </div>
        </div>

        {/* خط فاصل */}
        <hr className="my-8 border-gray-200" />

        {/* قسم حقوق النشر والتطوير */}
        <div className="text-center text-xs text-white">
          <p>FreshCart © 2025 FreshCart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

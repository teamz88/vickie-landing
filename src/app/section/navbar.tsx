"use client";

import { useState } from "react";
import NavLogo from "../components/NavLogo";
import BookDemo from "../components/BookDemo";
import { X } from "lucide-react";
import Image from "next/image";



export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full px-4 sm:px-6 xl:px-8">
      <div className="flex items-center justify-between py-6 max-w-[1440px] mx-auto relative z-50">
        {/* Logo - Always on the left */}
        <NavLogo />

        {/* Desktop Navigation */}
        <ul className="hidden xl:flex items-center font-medium justify-center gap-14 text-xl">
          <li>
            <a href="/" className="hover:text-[#1C5E20] transition-colors">Home</a>
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                toggleMenu();
                window.scrollTo({ top: document.getElementById('features')?.offsetTop, behavior: 'smooth' });
              }}
              className="hover:text-[#1C5E20] transition-colors cursor-pointer"
            >
              Features
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                toggleMenu();
                window.scrollTo({ top: document.getElementById('demo')?.offsetTop, behavior: 'smooth' });
              }}
              className="hover:text-[#1C5E20] transition-colors cursor-pointer"
            >
              Demo
            </button>
          </li>
        </ul>

        {/* Desktop CTA Buttons */}
        <div className="hidden xl:flex items-center justify-center gap-4.5">
          <a href="tel:+16176801682" className="bg-white text-lg xl:text-xl px-3 xl:px-4 py-3 xl:py-3.5 rounded-full border border-gray-500 font-semibold hover:bg-gray-50 transition-colors">
            Sales Rep: +1 617 680 1682
          </a>
          <BookDemo />
        </div>

        {/* Mobile Hamburger Menu Button - Right side */}
        <button
          type="button"
          onClick={toggleMenu}
          className="xl:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Image
              src="/icons/burger.svg"
              alt="Mobile menu"
              width={32}
              height={15}
            />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <button
          type="button"
          className="xl:hidden fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={toggleMenu}
          onKeyDown={(e) => e.key === 'Escape' && toggleMenu()}
          aria-label="Close menu overlay"
        />
      )}

      {/* Mobile Menu */}
      <div className={`xl:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-lg font-semibold">Menu</h2>
            <button
              type="button"
              onClick={toggleMenu}
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-gray-700" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex-1 px-6 py-8">
            <ul className="space-y-6">
              <li>
                <a 
                  href="/" 
                  className="block text-xl font-medium text-gray-900 hover:text-[#1C5E20] transition-colors"
                  onClick={toggleMenu}
                >
                  Home
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    toggleMenu();
                    window.scrollTo({ top: document.getElementById('features')?.offsetTop, behavior: 'smooth' });
                  }}
                  className="block text-xl font-medium text-gray-900 hover:text-[#1C5E20] transition-colors"
                >
                  Features
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    toggleMenu();
                    window.scrollTo({ top: document.getElementById('demo')?.offsetTop, behavior: 'smooth' });
                  }}
                  className="block text-xl font-medium text-gray-900 hover:text-[#1C5E20] transition-colors"
                >
                  Demo
                </button>
              </li>
            </ul>
          </nav>

          {/* Mobile CTA Buttons */}
          <div className="px-6 py-8 border-t space-y-4">
            <a 
              href="tel:+16176801682" 
              className="block w-full bg-white text-center text-lg px-4 py-3 rounded-full border border-gray-500 font-semibold hover:bg-gray-50 transition-colors"
              onClick={toggleMenu}
            >
              Sales Rep: +1 617 680 1682
            </a>
            <button
              type="button"
              onClick={toggleMenu}
              className="w-full"
            >
              <BookDemo />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

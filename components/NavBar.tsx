'use client'
import Image from 'next/image';
import React, { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import {  ShoppingCart, Search, User } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { title: "Collections", href: "/collections" },
    { title: "About", href: "/about" },
    { title: "Contact", href: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="sticky top-0 z-50 bg-black/90 shadow-md backdrop-blur-2xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 lg:px-0 h-20">

        {/* Logo - Moved to left on mobile */}
        <div className="md:hidden">
          <Link href="/" className="inline-block">
            <Image
              src="/images/logo.png"
              alt="Dhagay Shagay Logo"
              width={70}
              height={28}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Left Navigation - Desktop */}
        <div className="hidden md:flex items-center gap-8 text-white">
          {navigation.map((item) => (
            <Link
              key={item?.title}
              href={item?.href}
              className="text-sm uppercase font-medium relative group overflow-hidden py-1 px-2  transition-colors duration-200"
            >
              {item?.title}
              <span className="w-full h-[1px] bg-lime-400 absolute left-0 bottom-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </Link>
          ))}
        </div>

        {/* Center Logo - Desktop */}
        <div className="hidden md:flex justify-center items-center flex-1">
          <Link href="/" className="inline-block">
            <Image
              src="/images/logo.png"
              alt="Dhagay Shagay Logo"
              width={90}
              height={36}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-5 text-white">
          <div className="hidden md:flex items-center gap-5">
            <Search className="w-5 h-5 cursor-pointer hover:text-lime-400 transition-colors" />
            <User className="w-5 h-5 cursor-pointer hover:text-lime-400 transition-colors" />
            <span className="text-sm cursor-pointer hover:text-lime-400 transition-colors">EN</span>
            <div className="relative">
              <ShoppingCart className="w-5 h-5 cursor-pointer hover:text-lime-400 transition-colors" />
              <span className="absolute -top-2 -right-2 bg-lime-400 text-black text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </div>
          </div>
          
          {/* Mobile Icons */}
          <div className="md:hidden flex items-center gap-4">
            <Search className="w-5 h-5 cursor-pointer" />
            <ShoppingCart className="w-5 h-5 cursor-pointer" />
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              {isMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 absolute top-20 left-0 w-full shadow-lg z-40 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-6 py-6 text-white">
            {navigation.map((item) => (
              <Link
                key={item?.title}
                href={item?.href}
                className="text-lg uppercase font-medium relative group overflow-hidden py-1 px-4 transition-colors duration-200"
                onClick={toggleMenu}
              >
                {item?.title}
                <span className="w-full h-[2px] bg-lime-400 absolute bottom-0 left-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-4">
              <User className="w-6 h-6 cursor-pointer" />
              <span className="text-lg cursor-pointer">EN</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
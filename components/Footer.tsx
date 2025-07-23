import Image from "next/image";
import { Instagram, Facebook, Twitter, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white px-4 sm:px-6 py-12">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Logo Section - Full width on mobile, spans 3 cols on desktop */}
          <div className="md:col-span-3 flex justify-center md:justify-start">
            <div className="relative w-64 h-32">
              <Image
                src="/images/logo.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Links Grid - spans 9 cols on desktop */}
          <div className="md:col-span-9 grid grid-cols-2 sm:grid-cols-3 gap-8">
            
            {/* Shop Now 1 */}
            <div>
              <h3 className="text-[#C5F302] font-bold text-lg mb-4 uppercase tracking-wider">Shop Now</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm hover:text-[#C5F302] transition-colors">Collections</a></li>
                <li><a href="#" className="text-sm hover:text-[#C5F302] transition-colors">Sets</a></li>
                <li><a href="#" className="text-sm hover:text-[#C5F302] transition-colors">Sale</a></li>
                <li><a href="#" className="text-sm hover:text-[#C5F302] transition-colors">Bestsellers</a></li>
              </ul>
            </div>

            {/* Shop Now 2 */}
            <div>
              <h3 className="text-[#C5F302] font-bold text-lg mb-4 uppercase tracking-wider">Categories</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm hover:text-[#C5F302] transition-colors">Male</a></li>
                <li><a href="#" className="text-sm hover:text-[#C5F302] transition-colors">Female</a></li>
                <li><a href="#" className="text-sm hover:text-[#C5F302] transition-colors">Unisex</a></li>
                <li><a href="#" className="text-sm hover:text-[#C5F302] transition-colors">New Arrivals</a></li>
              </ul>
            </div>

            {/* Our Company */}
            <div>
              <h3 className="text-[#C5F302] font-bold text-lg mb-4 uppercase tracking-wider">Our Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm hover:text-[#C5F302] transition-colors">About Us</a></li>
                <li><a href="#" className="text-sm hover:text-[#C5F302] transition-colors">Terms of Use</a></li>
                <li><a href="#" className="text-sm hover:text-[#C5F302] transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-sm hover:text-[#C5F302] transition-colors">Shipping Terms</a></li>
              </ul>
            </div>

            {/* Customer Service */}
            <div className="sm:col-span-3 md:col-span-1">
              <h3 className="text-[#C5F302] font-bold text-lg mb-4 uppercase tracking-wider">Help</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm hover:text-[#C5F302] transition-colors">FAQs</a></li>
                <li><a href="#" className="text-sm hover:text-[#C5F302] transition-colors">Returns</a></li>
                <li><a href="#" className="text-sm hover:text-[#C5F302] transition-colors">Size Guide</a></li>
                <li><a href="#" className="text-sm hover:text-[#C5F302] transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="sm:col-span-3 md:col-span-2">
              <h3 className="text-[#C5F302] font-bold text-lg mb-4 uppercase tracking-wider">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#C5F302]" />
                  <span className="text-sm">info@example.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#C5F302]" />
                  <span className="text-sm">+123 456 7890</span>
                </div>
              </div>
              
              <h3 className="text-[#C5F302] font-bold text-lg mt-6 mb-4 uppercase tracking-wider">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#" className="hover:text-[#C5F302] transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-[#C5F302] transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="hover:text-[#C5F302] transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 mt-12 mb-8"></div>

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <div>© {new Date().getFullYear()} Dhagay Shagay. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
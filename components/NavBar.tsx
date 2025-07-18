'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, ShoppingCart, X } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="w-full bg-black/90 text-white shadow-md sticky top-0 z-50">
      <nav className="flex items-center justify-between px-4 py-2 max-w-7xl mx-auto">
        {/* Left Links */}
        <ul className="hidden md:flex space-x-4 text-sm font-medium uppercase tracking-wider">
          <li>
            <Link href="/collections" className="hover:text-[#C5F302] transition duration-300">
              Collections
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-[#C5F302] transition duration-300">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-[#C5F302] transition duration-300">
              Contact
            </Link>
          </li>
        </ul>

        {/* Center Logo */}
        <div className="flex-1 md:flex-none flex justify-center items-center">
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
        <div className="flex items-center space-x-4">
          <span className="hidden md:inline text-sm cursor-pointer hover:text-[#C5F302] transition">
            EN
          </span>
          <Menu
            className="w-6 h-6 cursor-pointer hover:text-[#C5F302] transition md:hidden"
            onClick={() => setMenuOpen(true)}
          />
          <ShoppingCart
            className="w-5 h-5 cursor-pointer hover:text-[#C5F302] transition"
            onClick={() => router.push('/cart')}
          />
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden bg-black bg-opacity-60 backdrop-blur-sm">
          {/* Sidebar */}
          <div className="bg-[#C5F302] text-black w-64 h-full p-5 space-y-5 shadow-lg">
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold">Menu</span>
              <X className="w-6 h-6 cursor-pointer" onClick={() => setMenuOpen(false)} />
            </div>
            <ul className="text-base font-medium space-y-3 mt-4">
              <li>
                <Link href="/collections" onClick={() => setMenuOpen(false)} className="hover:text-white">
                  Collections
                </Link>
              </li>
              <li>
                <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/faq" onClick={() => setMenuOpen(false)} className="hover:text-white">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/cart" onClick={() => setMenuOpen(false)} className="hover:text-white">
                  Cart
                </Link>
              </li>
              <li>
                <span className="cursor-pointer hover:text-white" onClick={() => setMenuOpen(false)}>
                  EN
                </span>
              </li>
            </ul>
          </div>

          {/* Click outside area to close menu */}
          <div className="flex-1" onClick={() => setMenuOpen(false)} />
        </div>
      )}
    </header>
  );
}





// 'use client';

// import Image from 'next/image';
// import Link from 'next/link';
// import { useState } from 'react';
// import { Menu, ShoppingCart, X } from 'lucide-react';
// import { useRouter } from 'next/navigation';

// export default function Navbar() {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const router = useRouter();

//     return (
//         <header className="w-full bg-black text-white">
//             <nav className="flex items-center justify-between px-4 py-2 max-w-7xl mx-auto">
//                 {/* Left Links (hidden on mobile) */}
//                 <ul className="hidden md:flex space-x-6 text-sm uppercase">
//                     <li>
//                         <Link href="/collections" className="hover:text-[#C5F302] transition-colors duration-300 hover:underline cursor-pointer">
//                             Collections
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href="/about" className="hover:text-[#C5F302] transition-colors duration-300 hover:underline cursor-pointer">
//                             About
//                         </Link>
//                     </li>
//                     <li>
//                         <Link href="/contact" className="hover:text-[#C5F302] transition-colors duration-300 hover:underline cursor-pointer">
//                             Contact Us
//                         </Link>
//                     </li>
//                 </ul>

//                 {/* Logo */}
//                 <div className="flex justify-center items-center flex-1 md:flex-none">
//                     <Link href="/" className="cursor-pointer">
//                         <Image src="/images/logo.png" alt="Dhagay Shagay" width={100} height={50} priority />
//                     </Link>
//                 </div>

//                 {/* Right Icons */}
//                 <div className="flex items-center space-x-4 text-sm">
//                     <span className="cursor-pointer hover:text-[#C5F302] transition-colors duration-300 hidden md:inline">EN</span>
//                     {/* Hamburger menu on mobile */}
//                     <Menu
//                         className="w-6 h-6 cursor-pointer hover:text-[#C5F302] transition-colors duration-300 md:hidden"
//                         onClick={() => setMenuOpen(true)}
//                     />
//                     {/* Cart always visible */}
//                     <ShoppingCart
//                         className="w-5 h-5 cursor-pointer hover:text-[#C5F302] transition-colors duration-300"
//                         onClick={() => router.push('/cart')}
//                     />
//                 </div>
//             </nav>

//             {/* Sidebar Menu (mobile) */}
//             {menuOpen && (
//                 <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex md:hidden">
//                     <div className="bg-[#C5F302] text-black w-64 h-full p-6">
//                         <div className="flex justify-between items-center mb-6">
//                             <span className="font-bold text-lg">Menu</span>
//                             <X className="w-6 h-6 cursor-pointer" onClick={() => setMenuOpen(false)} />
//                         </div>
//                         <ul className="space-y-4 text-base">
//                             <li>
//                                 <Link href="/collections" onClick={() => setMenuOpen(false)}>
//                                     Collections
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/about" onClick={() => setMenuOpen(false)}>
//                                     About
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/faq" onClick={() => setMenuOpen(false)}>
//                                     FAQ
//                                 </Link>
//                             </li>
//                             <li>
//                                 <Link href="/cart" onClick={() => setMenuOpen(false)}>
//                                     Cart
//                                 </Link>
//                             </li>
//                             <li>
//                                 <span className="cursor-pointer" onClick={() => setMenuOpen(false)}>EN</span>
//                             </li>
//                         </ul>
//                     </div>
//                     <div className="flex-1" onClick={() => setMenuOpen(false)} />
//                 </div>
//             )}
//         </header>
//     );
// }

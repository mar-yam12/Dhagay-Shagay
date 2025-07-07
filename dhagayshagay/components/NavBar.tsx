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
        <header className="w-full bg-black text-white">
            <nav className="flex items-center justify-around px-2 py-2">
                {/* Left Links */}
                <ul className="flex space-x-6 text-sm uppercase">
                    <li>
                        <Link href="/collections" className="hover:text-[#C5F302] transition-colors duration-300 hover:underline cursor-pointer">
                            Collections
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className="hover:text-[#C5F302] transition-colors duration-300 hover:underline cursor-pointer">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/faq" className="hover:text-[#C5F302] transition-colors duration-300 hover:underline cursor-pointer">
                            FAQ
                        </Link>
                    </li>
                </ul>

                {/* Logo */}
                <div className="flex justify-center items-center">
                    <Link href="/" className="cursor-pointer">
                    <Image src="/images/logo.png" alt="Dhagay Shagay" width={100} height={50} />
                    </Link>
                </div>

                {/* Right Icons */}
                <div className="flex items-center space-x-4 text-sm ">
                    <span className="cursor-pointer hover:text-[#C5F302] transition-colors duration-300">EN</span>
                    <Menu
                        className="w-5 h-5 cursor-pointer hover:text-[#C5F302] transition-colors duration-300"
                        onClick={() => setMenuOpen(true)}
                    />
                    <ShoppingCart
                        className="w-5 h-5 cursor-pointer hover:text-[#C5F302] transition-colors duration-300"
                        onClick={() => router.push('/cart')}
                    />
                </div>
            </nav>

            {/* Sidebar Menu */}
            {menuOpen && (
                <div className="fixed inset-0 bg-transparent bg-opacity-20 z-50 flex">
                    <div className="bg-[#C5F302] text-black w-64 h-full p-6">
                        <div className="flex justify-between items-center mb-6">
                            <span className="font-bold text-lg">Menu</span>
                            <X className="w-6 h-6 cursor-pointer" onClick={() => setMenuOpen(false)} />
                        </div>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/collections" onClick={() => setMenuOpen(false)}>
                                    Collections
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" onClick={() => setMenuOpen(false)}>
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" onClick={() => setMenuOpen(false)}>
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/cart" onClick={() => setMenuOpen(false)}>
                                    Cart
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1" onClick={() => setMenuOpen(false)} />
                </div>
            )}
        </header>
    );
}

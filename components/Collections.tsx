"use client"
import Image from 'next/image';
import React from 'react'; // Import React for React.FC
import { useState } from 'react'; // Import useState
import PaginationDots from './pagination'; // Import the PaginationDots component


// 1. Define an interface for the Product data structure
interface Product {
  id: number;
  name: string;
  price: string;
  imageUrl: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'SUN-KISSED CHIC: THE SUMMER SIREN COLLECTION',
    price: '$45',
    imageUrl: '/images/product1.png', // Replace with your image path
  },
  {
    id: 2,
    name: 'SUN-KISSED CHIC: THE SUMMER SIREN COLLECTION',
    price: '$45',
    imageUrl: '/images/product2.png', // Replace with your image path
  },
  {
    id: 3,
    name: 'SUN-KISSED CHIC: THE SUMMER SIREN COLLECTION',
    price: '$45',
    imageUrl: '/images/product3.png', // Replace with your image path
  },
  {
    id: 4,
    name: 'SUN-KISSED CHIC: THE SUMMER SIREN COLLECTION',
    price: '$45',
    imageUrl: '/images/product4.png', // Replace with your image path
  },
  {
    id: 5,
    name: 'SUN-KISSED CHIC: THE SUMMER SIREN COLLECTION',
    price: '$45',
    imageUrl: '/images/product5.png', // Replace with your image path
  },
  {
    id: 6,
    name: 'SUN-KISSED CHIC: THE SUMMER SIREN COLLECTION',
    price: '$45',
    imageUrl: '/images/product6.png', // Replace with your image path
  },
  {
    id: 7,
    name: 'SUN-KISSED CHIC: THE SUMMER SIREN COLLECTION',
    price: '$45',
    imageUrl: '/images/product7.png', // Replace with your image path
  },
  {
    id: 8,
    name: 'SUN-KISSED CHIC: THE SUMMER SIREN COLLECTION',
    price: '$45',
    imageUrl: '/images/product8.png', // Replace with your image path
  },
];

// 2. Define an interface for ProductCard's props
interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
   
  <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
    <Image
      src={product.imageUrl}
      alt={product.name}
      width={400} // Adjust based on your image dimensions
      height={500} // Adjust based on your image dimensions
      layout="responsive"
      objectFit="cover"
      className="rounded-lg"
    />
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white flex justify-between items-center">
      <div>
        <p className="text-xs font-semibold">{product.name}</p>
        <p className="text-sm font-bold text-lime-400">{product.price}</p>
      </div>
      <button className="bg-lime-400 text-black p-2 rounded-full flex items-center justify-center">
        {/* SVG for the --> arrow style */}
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"></line>
          <polyline points="12 5 19 12 12 19"></polyline>
        </svg>
      </button>
    </div>
  </div>
);

const Collections = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 3; 

  // Calculate total pages based on ALL products
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Get current products for the page
  // const indexOfLastProduct = currentPage * productsPerPage;
  // const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  // const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8 font-sans"> {/* Added mobile padding */}
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 px-2 md:px-0"> {/* Added mobile padding */}
          {/* Adjusted visibility for "Collections" text */}
          <p className="text-sm uppercase text-gray-600 font-semibold mb-2 md:block">Collections</p>
          {/* Adjusted font sizes for responsiveness */}
          <h1 className="text-sm md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
            FOR INDIVIDUALS WHO PRIORITIZE <br className="hidden md:block"/> COMFORT REGARDLESS OF THE GENDER
          </h1>
        </div>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 space-y-4 md:space-y-0 px-2 md:px-0"> {/* Added mobile padding */}
          <div className="flex flex-wrap gap-3 md:space-x-4"> {/* Used flex-wrap and gap for better mobile button layout */}
            <button className="px-6 py-2 border border-black text-gray-800 rounded-full font-semibold">ALL</button>
            <button className="px-6 py-2 bg-lime-400 text-black rounded-full font-semibold">WOMEN</button> {/* Changed text-white to text-black as per original image */}
            <button className="px-6 py-2 border border-black text-gray-800 rounded-full font-semibold">MEN</button>
          </div>
          <button className="hidden md:block px-6 py-2 border border-black bg-lime-400 text-black rounded-full font-bold uppercase hover:bg-lime-500 transition-colors">
            View All Products
          </button>
        </div>

        {/* This is the key part for 2 columns on mobile and 4 on larger screens */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-2 md:px-0"> {/* Adjusted gap and added mobile padding */}
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
         <PaginationDots
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
    </div>
  );
};

export default Collections;
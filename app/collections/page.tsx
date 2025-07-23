'use client';

import { useEffect, useState } from 'react';
import { client } from '@/lib/sanity';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { FaFilter } from 'react-icons/fa';

interface Product {
  _id: string;
  name: string;
  slug: { current: string };
  image: { asset: { url: string } };
  price: number;
  priceWithoutDiscount: number;
  category: string;
  colors: string[];
  sizes: string[];
  isNew: boolean;
}

export default function AllProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filtered, setFiltered] = useState<Product[]>([]);
  const [filters, setFilters] = useState({
    category: '',
    size: '',
    color: '',
    maxPrice: 10000,
  });

  useEffect(() => {
    const fetchProducts = async () => {
      const query = `*[_type == "product"]{
        _id, name, slug, price, priceWithoutDiscount, category, colors, sizes, isNew,
        image { asset->{url} }
      }`;
      const data = await client.fetch(query);
      setProducts(data);
      setFiltered(data);
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    const result = products.filter((p) => {
      const matchCategory = filters.category ? p.category === filters.category : true;
      const matchSize = filters.size ? p.sizes.includes(filters.size) : true;
      const matchColor = filters.color ? p.colors.includes(filters.color) : true;
      const matchPrice = p.price <= filters.maxPrice;
      return matchCategory && matchSize && matchColor && matchPrice;
    });

    setFiltered(result);
  }, [filters, products]);

  const categories = [...new Set(products.map((p) => p.category))];
  const allSizes = [...new Set(products.flatMap((p) => p.sizes))];
  const allColors = [...new Set(products.flatMap((p) => p.colors))];

  return (
    <div className="p-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 min-h-screen">
      {/* FILTERS */}
      <aside className="bg-white p-4 rounded-lg shadow space-y-5">
        <h2 className="text-lg font-bold flex items-center gap-2">
          <FaFilter color="#C5F302" /> Filter Products
        </h2>

        <button
          onClick={() => setFilters({ category: '', size: '', color: '', maxPrice: 10000 })}
          className="text-sm text-gray-700 bg-gray-100 px-3 py-1 rounded hover:bg-gray-200 transition"
        >
          🔄 All Products
        </button>

        {/* CATEGORY */}
        <div>
          <h3 className="text-sm font-semibold mb-1">Category</h3>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilters((f) => ({ ...f, category: cat }))}
                className={`px-3 py-1 border rounded text-sm capitalize ${
                  filters.category === cat ? 'bg-black text-white' : ''
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* SIZES */}
        <div>
          <h3 className="text-sm font-semibold mb-1">Size</h3>
          <div className="flex flex-wrap gap-2">
            {allSizes.map((sz) => (
              <button
                key={sz}
                onClick={() => setFilters((f) => ({ ...f, size: sz }))}
                className={`px-3 py-1 border rounded text-sm ${
                  filters.size === sz ? 'bg-black text-white' : ''
                }`}
              >
                {sz}
              </button>
            ))}
          </div>
        </div>

        {/* COLORS */}
        <div>
          <h3 className="text-sm font-semibold mb-1">Color</h3>
          <div className="flex flex-wrap gap-2">
            {allColors.map((col) => (
              <button
                key={col}
                onClick={() => setFilters((f) => ({ ...f, color: col }))}
                className={`px-3 py-1 border rounded text-sm capitalize ${
                  filters.color === col ? 'bg-black text-white' : ''
                }`}
              >
                {col}
              </button>
            ))}
          </div>
        </div>

        {/* PRICE */}
        <div>
          <label className="text-sm font-medium block mb-1">
            Max Price: Rs. {filters.maxPrice}
          </label>
          <input
            type="range"
            min={100}
            max={10000}
            value={filters.maxPrice}
            onChange={(e) =>
              setFilters((f) => ({ ...f, maxPrice: Number(e.target.value) }))
            }
            className="w-full accent-[#C5F302]"
          />
        </div>
      </aside>

      {/* PRODUCTS GRID */}
      <section className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence>
          {filtered.length > 0 ? (
            filtered.map((product) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <Link
                  href={`/collections/${product.slug.current}`}
                  className="block border p-4 rounded-lg shadow hover:shadow-md bg-white transition hover:scale-[1.02]"
                >
                  <Image
                    src={product.image.asset.url}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="rounded object-cover w-full h-[250px]"
                  />
                  <div className="mt-2 space-y-1">
                    <h3 className="font-semibold text-lg">{product.name}</h3>
                    <p className="text-gray-700">Rs. {product.price}</p>
                    <p className="text-sm text-gray-500 capitalize">{product.category}</p>
                    {product.isNew && (
                      <span className="text-green-500 text-xs">New Arrival</span>
                    )}
                  </div>
                </Link>
              </motion.div>
            ))
          ) : (
            <motion.p
              className="text-gray-500 col-span-full text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              No matching products found.
            </motion.p>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
}

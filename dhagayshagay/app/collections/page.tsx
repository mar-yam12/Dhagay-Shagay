'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaMale, FaFemale } from 'react-icons/fa';
import { BsSnow, BsSun, BsGrid } from 'react-icons/bs';

const categories = [
  {
    label: 'All Products',
    href: '/collections/all',
    icon: <BsGrid className="text-4xl text-white" />,
    bg: 'bg-gradient-to-r from-emerald-400 to-green-500',
  },
  {
    label: 'Men',
    href: '/collections/men',
    icon: <FaMale className="text-4xl text-white" />,
    bg: 'bg-gradient-to-r from-blue-400 to-blue-600',
  },
  {
    label: 'Women',
    href: '/collections/women',
    icon: <FaFemale className="text-4xl text-white" />,
    bg: 'bg-gradient-to-r from-pink-400 to-pink-600',
  },
  {
    label: 'Winter Collection',
    href: '/trends/winter',
    icon: <BsSnow className="text-4xl text-white" />,
    bg: 'bg-gradient-to-r from-cyan-500 to-blue-800',
  },
  {
    label: 'Summer Collection',
    href: '/trends/summer',
    icon: <BsSun className="text-4xl text-white" />,
    bg: 'bg-gradient-to-r from-yellow-400 to-orange-500',
  },
];

export default function CollectionsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Page Title */}
      <motion.h1
        className="text-3xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Explore Our Collections
      </motion.h1>

      {/* Category Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {categories.map((cat) => (
          <motion.div
            key={cat.href}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className={`rounded-xl p-6 shadow-lg hover:shadow-xl transition hover:scale-[1.03] ${cat.bg}`}
          >
            <Link href={cat.href} className="flex flex-col gap-4 h-full">
              <div className="flex justify-between items-center">
                {cat.icon}
                <span className="text-white text-xl font-semibold">{cat.label}</span>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

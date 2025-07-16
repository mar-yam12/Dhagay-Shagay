'use client';

import { client } from "@/lib/sanity";
import Image from "next/image";
import { useCart } from "@/context/cart";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface ProductDetail {
  _id: string;
  name: string;
  slug: { current: string };
  image: { asset: { url: string } };
  price: number;
  priceWithoutDiscount: number;
  description: string;
  sizes: string[];
  colors: string[];
  rating: number;
  ratingCount: number;
  category: string;
}

interface RelatedProduct {
  _id: string;
  name: string;
  slug: { current: string };
  image: { asset: { url: string } };
  price: number;
}

async function getProduct(slug: string): Promise<ProductDetail> {
  const query = `*[_type == "product" && slug.current == $slug][0]{
    _id,
    name,
    slug,
    image{ asset->{url} },
    price,
    priceWithoutDiscount,
    description,
    sizes,
    colors,
    rating,
    ratingCount,
    category
  }`;
  return await client.fetch(query, { slug });
}

async function getRelatedProducts(slug: string, category: string): Promise<RelatedProduct[]> {
  const query = `*[_type == "product" && slug.current != $slug && category == $category][0...3]{
    _id,
    name,
    slug,
    image{ asset->{url} },
    price
  }`;
  return await client.fetch(query, { slug, category });
}

// ✅ FIXED TYPE
type Props = {
  params: {
    slug: string;
  };
};

export default function ProductPage({ params }: Props) {
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [related, setRelated] = useState<RelatedProduct[]>([]);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    getProduct(params.slug).then((p) => {
      setProduct(p);
      if (p) getRelatedProducts(p.slug.current, p.category).then(setRelated);
    });
  }, [params.slug]);

  if (!product) return <p className="p-6">Loading...</p>;

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      alert("Please select size and color");
      return;
    }

    addToCart({
      _id: product._id,
      name: product.name,
      price: product.price,
      image: product.image.asset.url,
      quantity: 1,
    });

    alert("🛒 Product added to cart!");
  };

  return (
    <motion.div
      className="p-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Product Image */}
      <motion.div
        className="w-full h-auto overflow-hidden rounded-xl shadow-lg"
        whileHover={{ scale: 1.02 }}
      >
        <Image
          src={product.image.asset.url}
          alt={product.name}
          width={600}
          height={600}
          className="object-cover rounded-xl w-full"
        />
      </motion.div>

      {/* Product Details */}
      <div className="flex flex-col justify-center space-y-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>

        <div className="text-xl text-green-600 font-semibold">
          Rs. {product.price}
          {product.priceWithoutDiscount > product.price && (
            <span className="ml-3 text-sm line-through text-gray-500">
              Rs. {product.priceWithoutDiscount}
            </span>
          )}
        </div>

        <p className="text-gray-700 leading-relaxed">{product.description}</p>

        {/* Sizes */}
        <motion.div
          className="mt-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h4 className="font-medium mb-2">Select Size:</h4>
          <div className="flex gap-2 flex-wrap">
            {product.sizes.map((size, i) => (
              <button
                key={i}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-1 rounded border transition ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Colors */}
        <motion.div
          className="mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h4 className="font-medium mb-2">Select Color:</h4>
          <div className="flex gap-2 flex-wrap">
            {product.colors.map((color, i) => (
              <button
                key={i}
                onClick={() => setSelectedColor(color)}
                className={`px-4 py-1 rounded border transition ${
                  selectedColor === color
                    ? "bg-black text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Cart + Wishlist */}
        <motion.div
          className="flex gap-4 items-center mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.button
            onClick={handleAddToCart}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white font-medium py-3 rounded-lg shadow-md"
            whileTap={{ scale: 0.95 }}
          >
            Add to Cart
          </motion.button>

          {/* Wishlist Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.1 }}
            className="w-10 h-10 rounded-full border text-red-500 border-red-500 hover:bg-red-500 hover:text-white transition"
            onClick={() => alert("❤️ Added to wishlist!")}
          >
            ❤️
          </motion.button>
        </motion.div>

        <div className="text-sm text-gray-500 mt-2">
          ⭐ {product.rating} ({product.ratingCount} ratings)
        </div>
      </div>

      {/* Related Products */}
      {related.length > 0 && (
        <motion.div
          className="md:col-span-2 mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4">You may also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {related.map((item) => (
              <motion.div
                key={item._id}
                whileHover={{ scale: 1.02 }}
                className="border rounded-lg p-4 hover:shadow-md transition"
              >
                <Image
                  src={item.image.asset.url}
                  alt={item.name}
                  width={300}
                  height={300}
                  className="rounded w-full h-[250px] object-cover"
                />
                <h3 className="font-semibold mt-2">{item.name}</h3>
                <p className="text-sm text-gray-600">Rs. {item.price}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

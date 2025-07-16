// app/collections/[slug]/page.tsx
'use client';

import { client } from "@/lib/sanity";
import Image from "next/image";
import { useCart } from "@/context/cart";
import { useState, useEffect } from "react";

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
    ratingCount
  }`;
  return await client.fetch(query, { slug });
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const [product, setProduct] = useState<ProductDetail | null>(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    getProduct(params.slug).then(setProduct);
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
    <div className="p-6 max-w-4xl mx-auto">
      <Image
        src={product.image.asset.url}
        alt={product.name}
        width={500}
        height={500}
        className="rounded-xl object-cover"
      />

      <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
      <p className="text-xl text-green-600 mt-1">Rs. {product.price}</p>
      <p className="text-gray-500 line-through">Rs. {product.priceWithoutDiscount}</p>
      <p className="mt-4">{product.description}</p>

      <div className="mt-4">
        <h4 className="font-medium">Sizes:</h4>
        <div className="flex gap-2 mt-1">
          {product.sizes.map((size, i) => (
            <button
              key={i}
              onClick={() => setSelectedSize(size)}
              className={`px-3 py-1 border rounded ${
                selectedSize === size ? "bg-black text-white" : ""
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4">
        <h4 className="font-medium">Colors:</h4>
        <div className="flex gap-2 mt-1">
          {product.colors.map((color, i) => (
            <button
              key={i}
              onClick={() => setSelectedColor(color)}
              className={`px-3 py-1 border rounded ${
                selectedColor === color ? "bg-black text-white" : ""
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <button
          onClick={handleAddToCart}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
        >
          Add to Cart
        </button>
      </div>

      <div className="mt-4 text-sm text-gray-600">
        ⭐ {product.rating} ({product.ratingCount} ratings)
      </div>
    </div>
  );
}

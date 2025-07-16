// app/collections/all/page.tsx
import { client } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";

interface Product {
  _id: string;
  name: string;
  slug: { current: string };
  image: { asset: { url: string } };
  price: number;
  category: string;
  isNew: boolean;
}

async function getAllProducts(): Promise<Product[]> {
  const query = `*[_type == "product"]{
    _id,
    name,
    slug,
    image{
      asset->{url}
    },
    price,
    category,
    isNew
  }`;
  return await client.fetch(query);
}

export default async function AllProductsPage() {
  const products = await getAllProducts();

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <Link
          key={product._id}
          href={`/collections/${product.slug.current}`}
          className="border rounded-lg p-4 hover:shadow-lg transition"
        >
          <Image
            src={product.image.asset.url}
            alt={product.name}
            width={300}
            height={300}
            className="object-cover rounded"
          />
          <div className="mt-2">
            <h3 className="font-semibold text-lg">{product.name}</h3>
            <p className="text-gray-700">Rs. {product.price}</p>
            <p className="text-sm text-gray-500 capitalize">{product.category}</p>
            {product.isNew && (
              <span className="text-green-600 font-medium text-sm">New Arrival</span>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
}

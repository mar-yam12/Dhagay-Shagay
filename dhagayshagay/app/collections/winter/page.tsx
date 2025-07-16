// app/trends/winter/page.tsx
import { client } from "@/lib/sanity";
import Image from "next/image";
import Link from "next/link";

interface Product {
  _id: string;
  name: string;
  slug: { current: string };
  image: { asset: { url: string } };
  price: number;
}

async function getWinterTrends(): Promise<Product[]> {
  const query = `*[_type == "product" && category == "winter"]{
    _id,
    name,
    slug,
    image{asset->{url}},
    price
  }`;
  return await client.fetch(query);
}

export default async function WinterTrendsPage() {
  const products = await getWinterTrends();

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <Link
          key={product._id}
          href={`/collections/${product.slug.current}`}
          className="border p-4 rounded hover:shadow-md"
        >
          <Image
            src={product.image.asset.url}
            alt={product.name}
            width={300}
            height={300}
            className="rounded"
          />
          <h2 className="mt-2 font-semibold">{product.name}</h2>
          <p className="text-gray-700">Rs. {product.price}</p>
        </Link>
      ))}
    </div>
  );
}

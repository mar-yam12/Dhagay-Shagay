import Hero from "@/components/Hero";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      {/* <Hero /> */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            About <span className="text-lime-400">Dhagay Shagay</span>
          </h1>
          <div className="w-24 h-1 bg-lime-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Our Fashion Philosophy
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Welcome to <strong className="text-gray-900">Dhagay Shagay</strong> — 
              your ultimate destination for unique, stylish, and seasonal clothing. 
              We bridge tradition with contemporary trends, offering premium quality 
              that celebrates individuality.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From casual everyday wear to stunning seasonal collections, each piece 
              is thoughtfully curated to blend cultural heritage with modern aesthetics.
            </p>
          </div>
          <div className="relative rounded-xl overflow-hidden h-80">
            <Image
              src="/images/hero-bg.png"
              alt="Dhagay Shagay fashion collection"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={false}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="order-1 md:order-2 space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Our Story
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Founded by passionate local creatives, we're committed to making 
              premium fashion accessible while supporting regional artisans. 
              Each garment tells a story of craftsmanship and cultural pride.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We meticulously handpick fabrics and designs that reflect current 
              trends while honoring traditional techniques—creating wearable art 
              with a distinctive desi essence.
            </p>
          </div>
          <div className="order-2 md:order-1 relative rounded-xl overflow-hidden h-80">
            <Image
              src="/images/men-summer.png"
              alt="Dhagay Shagay founders or workshop"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={false}
            />
          </div>
        </div>

        <div className="bg-black text-white rounded-xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            <span className="text-lime-400">Join</span> Our Fashion Journey
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed mb-6">
            Thank you for being part of our story. Together, let's celebrate the 
            vibrant intersection of fashion, culture, and craftsmanship.
          </p>
          <button className="bg-lime-400 hover:bg-white text-black font-medium py-3 px-8 rounded-full transition duration-300">
            Explore Collections
          </button>
        </div>
      </div>
    </>
  );
}







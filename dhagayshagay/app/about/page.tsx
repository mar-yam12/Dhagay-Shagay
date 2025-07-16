import Hero from "@/components/Hero";

export default function AboutPage() {
  return (
    <><Hero />
    <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-6 text-center">About Dhagay Shagay</h1>

          <p className="text-gray-700 mb-4 leading-relaxed">
              Welcome to <strong>Dhagay Shagay</strong> — your ultimate fashion destination for unique, stylish, and seasonal clothing for both men and women.
              We are passionate about connecting you with high-quality fabrics, trendy designs, and affordable luxury that celebrates your personality.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
              Whether you are looking for casual everyday wear, stunning Eid outfits, or statement pieces for winter or summer collections, our curated
              fashion lines bring together tradition and modern aesthetics — all in one place.
          </p>

          <p className="text-gray-700 mb-4 leading-relaxed">
              Founded by local creatives and fashion enthusiasts, our mission is to make premium quality accessible while supporting local designers and
              tailors. Each product is made with care and handpicked to reflect current fashion trends with a desi twist.
          </p>

          <p className="text-gray-700 leading-relaxed">
              Thank you for being a part of our journey. Lets celebrate fashion, culture, and craftsmanship together.
          </p>
      </div></>
  );
}

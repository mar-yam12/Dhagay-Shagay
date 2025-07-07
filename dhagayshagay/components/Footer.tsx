
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
        
        {/* Urdu Logo */}
        <div className="flex items-start justify-center md:justify-start">
         <Image
            src="/images/logo.png"
             alt="Logo"
              width={300}
               height={150}
              className="object-contain -mt-20"
               />
        </div>

        {/* Column 1: SHOP NOW */}
        <div>
          <h3 className="text-lime-400 font-semibold mb-2">SHOP NOW</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#">COLLECTIONS</a></li>
            <li><a href="#">SETS</a></li>
            <li><a href="#">SALE</a></li>
            <li><a href="#">BESTSELLERS</a></li>
          </ul>
        </div>

        {/* Column 2: SHOP NOW */}
        <div>
          <h3 className="text-lime-400 font-semibold mb-2">SHOP NOW</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#">MALE</a></li>
            <li><a href="#">FEMALE</a></li>
            
          </ul>
        </div>

        

        {/* Column 4: OUR COMPANY */}
        <div>
          <h3 className="text-lime-400 font-semibold mb-2">OUR COMPANY</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#">ABOUT US</a></li>
            <li><a href="#">TERMS OF USE</a></li>
            <li><a href="#">CONTACT US</a></li>
            <li><a href="#">SHIPPING TERMS</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-10"></div>
    </footer>
  );
}
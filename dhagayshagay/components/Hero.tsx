import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full h-[90vh] bg-black overflow-hidden">
      <Image
        src="/images/hero-bg.png"
        alt="Fashion Model"
        fill
        
        className="object-cover object-center opacity-90"
        priority
      />

      <div className="absolute inset-0  flex items-center justify-start p-12">
        <div>
          <Image
            src="/images/logo.png"
            alt="Dhagay Shagay Urdu Logo"
            width={600}
            height={300}
            className="mb-6"
          />
        </div>
      </div>

      <div className="absolute bottom-0 w-full h-2 bg-[#C5F302]" />
    </section>
  );
}

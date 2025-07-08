import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] md:h-[90vh] bg-black overflow-hidden">
      <Image
        src="/images/hero-bg.png"
        alt="Fashion Model"
        fill
        className="object-cover object-center opacity-90"
        priority
      />

      <div className="absolute inset-0 flex items-center justify-start px-4 py-8 md:p-12">
        <div>
          <Image
            src="/images/logo.png"
            alt="Dhagay Shagay Urdu Logo"
            width={320}
            height={160}
            className="mb-4 md:mb-6 w-[220px] md:w-[400px] lg:w-[600px] h-auto"
            priority
          />
        </div>
      </div>

      <div className="absolute bottom-0 w-full h-1.5 md:h-2 bg-[#C5F302]" />
    </section>
  );
}


export default function Hero() {
  return (
    <section className="relative w-full h-[70vh] md:h-[90vh]  overflow-hidden">
{/* Background Video or Image */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover contrast-110 brightness-105"
          src="/images/hero-bg.mp4"
        ></video>
        <div className="absolute inset-0 bg-black opacity-50" />
      </div>



      <div className="absolute bottom-0 w-full h-1.5 md:h-2 bg-[#C5F302]" />
    </section>
  );
}

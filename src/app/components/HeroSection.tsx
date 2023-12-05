import Paint4 from "@/components/icons/Paint4";
import Paint2 from "@/components/icons/Paint2";
import Paint1 from "@/components/icons/Paint1";

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <Paint4
        width={300}
        height={300}
        className="hidden lg:block absolute bottom-28 rotate-90 -left-32 fill-secondary"
      />
      <Paint2 width={200} height={200} className="hidden lg:block absolute top-5 rotate-90 right-24 fill-accent" />
      <Paint1
        width={300}
        height={300}
        className="hidden lg:block absolute -bottom-12 -rotate-12 -right-7 fill-primary"
      />

      <main className="flex items-center flex-col justify-center h-full p-40">
        <div className="lg:-rotate-6 mb-10 md:-translate-y-20">
          <h1 className="lg:text-9xl md:text-8xl text-5xl font-semibold ">
            Color<span className="text-accent">works</span>
          </h1>
          <h1 className="lg:text-9xl md:text-8xl text-5xl font-semibold ">
            Pain<span className="text-secondary">ting</span>
            LLC
          </h1>
        </div>
        <a href="/contact" className="btn btn-accent w-80 text-base-100">
          Make an appointment
        </a>
      </main>
    </section>
  );
}

export default Hero;

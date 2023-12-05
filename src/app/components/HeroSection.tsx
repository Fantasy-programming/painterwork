function Hero() {
  return (
    <section className="relative">
      <main className="flex items-center flex-col justify-center h-full m-40">
        <div className="lg:-rotate-6 mb-10 md:-translate-y-20">
          <h1 className="lg:text-9xl md:text-8xl text-5xl font-semibold lg:-translate-x-32">
            Color<span className="text-accent">works</span>
          </h1>
          <h1 className="lg:text-9xl md:text-8xl text-5xl font-semibold lg:translate-x-32">
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

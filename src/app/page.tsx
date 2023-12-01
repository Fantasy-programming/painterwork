import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <section className="min-h-screen">
        <nav className="navbar  justify-center">
          <ul className="navbar-center gap-10">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/gallery">Our Work</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
        <main className="flex items-center flex-col justify-center h-full m-40">
          <div className="lg:-rotate-6 mb-10 md:-translate-y-20">
            <h1 className="lg:text-9xl md:text-8xl text-5xl font-semibold lg:-translate-x-32">
              Colorworks
            </h1>
            <h1 className="lg:text-9xl md:text-8xl text-5xl font-semibold lg:translate-x-32">
              Painting LLC
            </h1>
          </div>
          <a href="/contact" className="btn btn-accent w-80">
            Contact US
          </a>
        </main>
      </section>
      <section>
        <div></div>
        <div></div>
      </section>
      <Footer />
    </div>
  );
}

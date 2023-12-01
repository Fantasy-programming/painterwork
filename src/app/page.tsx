export default function Home() {
  return (
    <>
      <section className="">
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
            Make an appointment
          </a>
        </main>
      </section>
      <section className="flex gap-10 m-20">
        <div className="diff aspect-[16/9]">
          <div className="diff-item-1">
            <img
              alt="daisy"
              src="https://daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a.jpg"
            />
          </div>
          <div className="diff-item-2">
            <img
              alt="daisy"
              src="https://daisyui.com/images/stock/photo-1560717789-0ac7c58ac90a-bw.jpg"
            />
          </div>
          <div className="diff-resizer"></div>
        </div>
        <div>
          <h2>bal bala al</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui ex
            culpa est praesentium illum ratione soluta exercitationem dolor
            neque deleniti, nesciunt odit debitis commodi, sit, earum enim
            inventore voluptatibus dignissimos.
          </p>
        </div>
      </section>
      <section className="m-20">
        <h2 className="text-4xl text-center">Price Estimation</h2>
        <div className="flex gap-10">
          <div className="w-1/2">
            <div className="flex gap-5 ">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Room size</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Room size</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
            <div className="flex gap-5 ">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Room size</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text">Room size</span>
                </div>
                <input
                  type="text"
                  placeholder="Type here"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
          </div>
          <div className="flex justify-center items-center w-1/2">
            <h3>2500 GHC</h3>
          </div>
        </div>
      </section>
    </>
  );
}

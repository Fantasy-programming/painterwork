import React from 'react';
import Image from 'next/image';

function page() {
  return (
    <>
      <section className="flex h-80 mt-20 gap-6">
        <div className="w-1/2">
          <div className="relative w-full h-full p-10">
            <div className="relative w-full h-full">
              <Image fill={true} alt="daisy" src="/images/service1.jpeg" />
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="p-10">
            <h2 className="text-3xl capitalize">Interior Painting</h2>
            <p>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </p>
          </div>
        </div>
      </section>
      <section className="flex h-80 flex-row-reverse gap-6 mb-10">
        <div className="w-1/2">
          <div className="relative w-full h-full p-10">
            <div className="relative w-full h-full">
              <Image fill={true} alt="daisy" src="/images/service2.jpg" />
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <div className="p-10">
            <h2 className="text-3xl capitalize">Exterior Painting</h2>
            <p>
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default page;

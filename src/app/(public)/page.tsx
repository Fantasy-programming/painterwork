import Image from 'next/image';

import colorService from '@/db/colorService';

import { Colors } from '@/components/Colors';
import PriceEstForm from './_components/PriceEstForm';

import Paint1 from '@/components/icons/Paint1';
import Paint2 from '@/components/icons/Paint2';
import Paint3 from '@/components/icons/Paint3';
import Paint4 from '@/components/icons/Paint4';

export default async function Home() {
  const data = await colorService.getAll();

  return (
    <>
      <section className="relative overflow-hidden">
        <Paint4
          width={300}
          height={300}
          className="hidden lg:block absolute bottom-28 rotate-90 -left-32 fill-secondary"
        />
        <Paint2
          width={200}
          height={200}
          className="hidden lg:block absolute top-5 rotate-90 right-24 fill-accent"
        />
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
      <section className="flex flex-col md:flex-row gap-10 sm:p-20 p-10 bg-primary text-base-100 relative overflow-hidden">
        <Paint3
          width={250}
          height={250}
          className="hidden lg:block absolute -bottom-12 rotate-90 right-5 fill-accent"
        />
        <div className="diff aspect-[16/9] w-full md:w-1/2">
          <div className="diff-item-1">
            <Image
              width={500}
              height={500}
              alt="daisy"
              src="/images/after.webp"
            />
          </div>
          <div className="diff-item-2">
            <Image
              width={500}
              height={500}
              alt="daisy"
              src="/images/before.webp"
            />
          </div>
          <div className="diff-resizer"></div>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl leading-loose">Transform Your Space</h2>
          <p className="leading-loose">
            Experience the astonishing difference. Our skilled painters work
            wonders, turning cream walls into brilliant white canvases. From a
            muted tone to a vibrant, fresh hue that breathes life into every
            corner. But that&apos;s not all—we elevate your space further by
            adding finesse to details. The stairs, once overlooked, are now
            beautifully adorned, complementing the renewed walls with a touch of
            elegance.
          </p>
        </div>
      </section>

      <section className=" bg-base-100 p-10 md:px-20 md:py-48" id="colors">
        <h2 className="text-2xl md:text-4xl text-center font-semibold mb-10">
          We have a wide range of colors covering for all your needs
        </h2>
        <Colors limit={7} data={data} more={true} />
      </section>

      <section className="m-10 md:m-20" id="estimator">
        <h2 className="text-4xl text-center font-semibold mb-10">
          Price
          <span className="text-secondary underline decoration-wavy underline-offset-4 decoration-accent">
            Estimation
          </span>
        </h2>
        <PriceEstForm />
      </section>
    </>
  );
}

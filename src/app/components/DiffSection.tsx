import Image from "next/image";

function DiffSection() {
  return (
    <section className="flex flex-col md:flex-row gap-10 sm:p-20 p-10 bg-primary text-base-100">
      <div className="diff aspect-[16/9] w-full md:w-1/2">
        <div className="diff-item-1">
          <Image width={500} height={500} alt="daisy" src="/after.webp" />
        </div>
        <div className="diff-item-2">
          <Image width={500} height={500} alt="daisy" src="/before.webp" />
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
  );
}

export default DiffSection;

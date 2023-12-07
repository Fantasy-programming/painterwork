import imageService from '@/db/imageService';

import Gallery from '@/components/Gallery';

export default async function GalleryPage() {
  const data = await imageService.getAll();
  return (
    <>
      <section className=" p-10  md:p-20">
        <Gallery data={data} />
      </section>
    </>
  );
}

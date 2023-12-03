import Gallery from "@/components/Gallery";
import { url } from "@utils/env";

const getData = async () => {
  console.log("url", url);
  try {
    const res = await fetch(`${url}/api/images`, {
      cache: "no-store",
    });
    return await res.json();
  } catch (e) {
    console.log(e);
  }
};

export default async function GalleryPage() {
  const data = await getData();
  return (
    <>
      <section className="m-20">
        <Gallery data={data} />
      </section>
    </>
  );
}

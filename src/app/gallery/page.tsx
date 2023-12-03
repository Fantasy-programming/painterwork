import Gallery from "@/components/Gallery";

const getData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/images", {
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

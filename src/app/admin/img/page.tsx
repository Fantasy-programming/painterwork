import GetPosts from "@/components/GetPost";
import NewPost from "@/components/NewPost";

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

export default async function Page() {
  const data = await getData();

  return (
    <div className="">
      <div className=" my-20">
        <NewPost />
        <GetPosts data={data} />
      </div>
    </div>
  );
}

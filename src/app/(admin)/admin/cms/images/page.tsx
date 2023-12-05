import GetPosts from "@/components/GetPost";
import NewPost from "@/components/NewPost";
import Search from "@/components/Search";
import { url } from "@utils/env";

type PostData = {
  _id: string;
  name: string;
  description: string;
  imageUrl: string;
};

const getData = async () => {
  try {
    const res = await fetch(`${url}/api/images`, {
      cache: "no-store",
    });
    return await res.json();
  } catch (e) {
    console.log(e);
  }
};

const filterData = async (query: string, data: PostData[]) => {
  return data.filter((item: PostData) => {
    return item.name.toLowerCase().includes(query.toLowerCase());
  });
};

const page = async ({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) => {
  const query = searchParams?.query || "";
  const rawdata = await getData();
  const data = await filterData(query, rawdata);

  return (
    <>
      <div className="p-10">
        <h1 className="text-2xl text-primary uppercase">Images Showcase</h1>
        <div className="my-10 ">
          <Search searchText="Search images" />
          <GetPosts data={data} />
          <NewPost />
        </div>
      </div>
    </>
  );
};

export default page;

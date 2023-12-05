import { Colors } from "@/components/ColorSection";
import NewColor from "@/components/NewColor";
import Search from "@/components/Search";

import { url } from "@utils/env";

type ColorData = {
  _id: string;
  name: string;
  hexCode: string;
};

const getColors = async () => {
  try {
    const res = await fetch(`${url}/api/colors`, {
      cache: "no-store",
    });
    return await res.json();
  } catch (e) {
    console.log(e);
  }
};

const filterData = async (query: string, data: ColorData[]) => {
  return data.filter((item: ColorData) => {
    return item.name.toLowerCase().includes(query.toLowerCase());
  });
};

const page = async ({
  searchParams,
}: {
  searchParams?: { query?: string };
}) => {
  const query = searchParams?.query || "";
  const rawdata = await getColors();
  const data = await filterData(query, rawdata);
  return (
    <>
      <div className="p-10">
        <h1 className="text-2xl text-primary uppercase">Colors</h1>
        <div className="my-10">
          <Search searchText="Search color" />
          <div className="py-10">
            <Colors data={data} more={false} />
          </div>
          <NewColor />
        </div>
      </div>
    </>
  );
};

export default page;

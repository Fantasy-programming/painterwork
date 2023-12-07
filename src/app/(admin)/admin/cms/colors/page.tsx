import { Colors } from '@/components/Colors';
import NewColor from './NewColor';
import Search from '@/components/Search';

import { url } from '@/lib/env';
import colorService, { ColorElement } from '@/db/colorService';
import { searchFilter } from '@/lib/tools';

const page = async ({
  searchParams,
}: {
  searchParams?: { query?: string };
}) => {
  const query = searchParams?.query || '';
  const rawdata = await colorService.getAll();
  const data = searchFilter(query, rawdata) as ColorElement[];
  return (
    <>
      <div className="p-10">
        <h1 className="text-2xl text-primary uppercase">Colors</h1>
        <div className="my-10">
          <Search searchText="Search color" />
          <div className="py-10">
            <Colors data={data} more={false} />
          </div>
          <NewColor url={url || ''} />
        </div>
      </div>
    </>
  );
};

export default page;
